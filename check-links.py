#!/usr/bin/env python3
"""
Comprehensive broken link checker for the ignite-website staging server.
Crawls all internal links and reports 404s.
"""

import re
import sys
import urllib.request
import urllib.error
from collections import defaultdict
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse

BASE_URL = "http://localhost:3000"
CHECKED = set()
BROKEN = defaultdict(list)  # broken_url -> [pages that link to it]
PAGES_CHECKED = 0

class LinkExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            for attr, value in attrs:
                if attr == 'href' and value:
                    self.links.append(value)

def get_links(url):
    """Extract all links from a page."""
    try:
        with urllib.request.urlopen(url, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            parser = LinkExtractor()
            parser.feed(html)
            return parser.links
    except Exception as e:
        return []

def check_url(url):
    """Check if URL returns 200 or redirect (not 404)."""
    if url in CHECKED:
        return url not in [b for b in BROKEN.keys()]

    CHECKED.add(url)

    try:
        req = urllib.request.Request(url, method='HEAD')
        with urllib.request.urlopen(req, timeout=10) as response:
            return True
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return False
        # Other errors (500, etc) - consider as issues too
        if e.code >= 400:
            return False
        return True
    except Exception:
        return True  # Network errors - skip

def is_internal(url):
    """Check if URL is internal to the site."""
    if url.startswith('/'):
        return True
    if url.startswith(BASE_URL):
        return True
    if url.startswith('#'):
        return False
    if url.startswith('mailto:') or url.startswith('javascript:'):
        return False
    parsed = urlparse(url)
    return parsed.netloc == '' or parsed.netloc == 'localhost:3000'

def normalize_url(url, base_url):
    """Normalize URL to absolute form."""
    if url.startswith('#'):
        return None
    if url.startswith('mailto:') or url.startswith('javascript:'):
        return None
    if url.startswith('//'):
        return 'http:' + url
    if url.startswith('/'):
        return BASE_URL + url
    if url.startswith('http'):
        return url
    return urljoin(base_url, url)

def crawl_site():
    """Crawl the site starting from the homepage."""
    global PAGES_CHECKED

    to_visit = [BASE_URL + '/']
    visited = set()

    # Also seed with key entry points
    seeds = [
        '/docs/', '/download/', '/community/', '/resources/', '/faq/',
        '/events/', '/blog/', '/use-cases/', '/features/',
        '/docs/ignite3/3.1.0/', '/docs/ignite2/latest/',
        '/arch/multi-tier-storage/', '/arch/native-persistence/',
    ]
    for seed in seeds:
        to_visit.append(BASE_URL + seed)

    while to_visit:
        url = to_visit.pop(0)

        if url in visited:
            continue
        visited.add(url)

        # Only crawl internal pages
        if not is_internal(url):
            continue

        # Skip non-HTML resources
        parsed = urlparse(url)
        path = parsed.path
        if any(path.endswith(ext) for ext in ['.css', '.js', '.png', '.jpg', '.svg', '.ico', '.woff', '.woff2', '.json', '.xml', '.txt', '.zip', '.pdf']):
            continue

        PAGES_CHECKED += 1
        if PAGES_CHECKED % 100 == 0:
            print(f"Progress: {PAGES_CHECKED} pages checked, {len(BROKEN)} broken links found", file=sys.stderr)

        links = get_links(url)

        for link in links:
            normalized = normalize_url(link, url)
            if normalized is None:
                continue

            # Check internal links
            if is_internal(normalized):
                # Add to crawl queue if HTML page
                if not any(normalized.endswith(ext) for ext in ['.css', '.js', '.png', '.jpg', '.svg', '.ico']):
                    if normalized not in visited:
                        to_visit.append(normalized)

                # Check if it's broken
                if not check_url(normalized):
                    BROKEN[normalized].append(url)

def main():
    print("Starting comprehensive link check...", file=sys.stderr)
    print(f"Base URL: {BASE_URL}", file=sys.stderr)
    print("", file=sys.stderr)

    crawl_site()

    print("", file=sys.stderr)
    print(f"Completed: {PAGES_CHECKED} pages checked", file=sys.stderr)
    print(f"Found {len(BROKEN)} broken links", file=sys.stderr)
    print("", file=sys.stderr)

    if BROKEN:
        print("=" * 60)
        print("BROKEN LINKS REPORT")
        print("=" * 60)
        print("")

        for broken_url, sources in sorted(BROKEN.items()):
            print(f"BROKEN: {broken_url}")
            print(f"  Found on {len(sources)} page(s):")
            for source in sources[:5]:  # Show first 5 sources
                print(f"    - {source}")
            if len(sources) > 5:
                print(f"    ... and {len(sources) - 5} more")
            print("")
    else:
        print("No broken links found!")

if __name__ == '__main__':
    main()

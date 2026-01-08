#!/usr/bin/env python3
"""
HTTP server with .html extension fallback for clean URLs.
Mimics Apache's .htaccess behavior, especially for Ignite 2 Jekyll docs
which have sidebar links without .html extensions.

Supports base path stripping for staging builds (e.g., /suggested-site/).
"""

import http.server
import os
import sys
from urllib.parse import urlparse, unquote

# Global base path for URL stripping (set by main())
BASE_PATH = ''

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP handler that adds .html extension fallback for clean URLs."""

    def resolve_path(self):
        """Resolve the request path, adding .html extension if needed."""
        parsed = urlparse(self.path)
        url_path = unquote(parsed.path)

        # Strip base path prefix if configured (for staging builds)
        if BASE_PATH and url_path.startswith(BASE_PATH):
            url_path = url_path[len(BASE_PATH):] or '/'

        fs_path = self.translate_path(url_path)

        # If path exists as-is, use it
        if os.path.exists(fs_path):
            if os.path.isdir(fs_path):
                index_path = os.path.join(fs_path, 'index.html')
                if os.path.exists(index_path):
                    return url_path  # Return stripped path
            else:
                return url_path  # Path exists, serve as-is

        # Try adding .html extension (for Ignite 2 sidebar links)
        if not url_path.endswith('.html') and not url_path.endswith('/'):
            html_path = fs_path + '.html'
            if os.path.exists(html_path):
                new_path = url_path + '.html'
                if parsed.query:
                    new_path += '?' + parsed.query
                return new_path

        # Try as directory with index.html (for redirect)
        if not url_path.endswith('/'):
            index_path = os.path.join(fs_path, 'index.html')
            if os.path.isdir(fs_path) and os.path.exists(index_path):
                # Redirect to path with trailing slash (preserve base path in redirect)
                original_path = unquote(parsed.path)
                return 'redirect:' + original_path + '/'

        return url_path  # Return stripped path, let default handler return 404

    def do_HEAD(self):
        """Handle HEAD requests with .html fallback."""
        resolved = self.resolve_path()
        if resolved:
            if resolved.startswith('redirect:'):
                self.send_response(301)
                self.send_header('Location', resolved[9:])
                self.end_headers()
                return
            self.path = resolved
        return super().do_HEAD()

    def do_GET(self):
        """Handle GET requests with .html fallback."""
        resolved = self.resolve_path()
        if resolved:
            if resolved.startswith('redirect:'):
                self.send_response(301)
                self.send_header('Location', resolved[9:])
                self.end_headers()
                return
            self.path = resolved
        return super().do_GET()

    def translate_path(self, path):
        """Translate URL path to filesystem path, stripping base path if needed."""
        # Strip base path prefix if configured
        if BASE_PATH and path.startswith(BASE_PATH):
            path = path[len(BASE_PATH):] or '/'
        return super().translate_path(path)

    def log_message(self, format, *args):
        """Custom log format with status code highlighting."""
        status = args[1] if len(args) > 1 else ''
        if status.startswith('4'):
            # Highlight 4xx errors
            print(f"[404] {args[0]}")
        elif status.startswith('3'):
            # Show redirects
            print(f"[{status[:3]}] {args[0]}")
        # Suppress 200 OK logs for cleaner output


def main():
    global BASE_PATH

    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
    directory = sys.argv[2] if len(sys.argv) > 2 else '.'
    BASE_PATH = sys.argv[3] if len(sys.argv) > 3 else ''

    # Ensure base path has correct format (starts with /, no trailing /)
    if BASE_PATH and not BASE_PATH.startswith('/'):
        BASE_PATH = '/' + BASE_PATH
    if BASE_PATH.endswith('/'):
        BASE_PATH = BASE_PATH[:-1]

    os.chdir(directory)

    handler = CleanURLHandler
    server = http.server.HTTPServer(('', port), handler)

    print(f"Serving at http://localhost:{port}")
    print(f"Directory: {os.getcwd()}")
    if BASE_PATH:
        print(f"Base path: {BASE_PATH}")
        print(f"Access site at: http://localhost:{port}{BASE_PATH}/")
    print("")
    print("Features:")
    print("  - Clean URLs: /page serves /page.html")
    print("  - Directory index: /dir/ serves /dir/index.html")
    print("  - Ignite 2 sidebar links work without .html")
    if BASE_PATH:
        print(f"  - Base path stripping: {BASE_PATH}/* -> /*")
    print("")
    print("Press Ctrl+C to stop")
    print("")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...")
        server.shutdown()


if __name__ == '__main__':
    main()

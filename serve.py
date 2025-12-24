#!/usr/bin/env python3
"""
HTTP server with .html extension fallback for clean URLs.
Mimics Apache's .htaccess behavior, especially for Ignite 2 Jekyll docs
which have sidebar links without .html extensions.
"""

import http.server
import os
import sys
from urllib.parse import urlparse, unquote

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP handler that adds .html extension fallback for clean URLs."""

    def resolve_path(self):
        """Resolve the request path, adding .html extension if needed."""
        parsed = urlparse(self.path)
        url_path = unquote(parsed.path)
        fs_path = self.translate_path(url_path)

        # If path exists as-is, use it
        if os.path.exists(fs_path):
            if os.path.isdir(fs_path):
                index_path = os.path.join(fs_path, 'index.html')
                if os.path.exists(index_path):
                    return None  # Let default handler serve directory
            else:
                return None  # Path exists, serve as-is

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
                return 'redirect:' + url_path + '/'

        return None  # Not found, let default handler return 404

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
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
    directory = sys.argv[2] if len(sys.argv) > 2 else '.'

    os.chdir(directory)

    handler = CleanURLHandler
    server = http.server.HTTPServer(('', port), handler)

    print(f"Serving at http://localhost:{port}")
    print(f"Directory: {os.getcwd()}")
    print("")
    print("Features:")
    print("  - Clean URLs: /page serves /page.html")
    print("  - Directory index: /dir/ serves /dir/index.html")
    print("  - Ignite 2 sidebar links work without .html")
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

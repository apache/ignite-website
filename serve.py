#!/usr/bin/env python3
"""
Simple HTTP server with .html extension fallback.
Mimics Apache's .htaccess behavior for clean URLs.
"""

import http.server
import os
import sys
from pathlib import Path

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP handler that adds .html extension fallback for clean URLs."""

    def do_GET(self):
        # Get the file path
        path = self.translate_path(self.path)

        # If path exists as-is, serve it normally
        if os.path.exists(path):
            return super().do_GET()

        # If path doesn't exist and doesn't end with .html, try adding .html
        if not self.path.endswith('.html') and not self.path.endswith('/'):
            html_path = path + '.html'
            if os.path.exists(html_path):
                # Serve the .html file
                self.path = self.path + '.html'
                return super().do_GET()

        # Fall back to default behavior (will return 404)
        return super().do_GET()

def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
    directory = sys.argv[2] if len(sys.argv) > 2 else '.'

    os.chdir(directory)

    handler = CleanURLHandler
    server = http.server.HTTPServer(('', port), handler)

    print(f"Serving at http://localhost:{port}")
    print(f"Directory: {os.getcwd()}")
    print("Press Ctrl+C to stop")
    print()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...")
        server.shutdown()

if __name__ == '__main__':
    main()

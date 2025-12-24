#!/bin/bash

# Suggested Site Build Script
# Combines ignite-website and ignite-3 docs into suggested-site/ for testing
#
# Output: suggested-site/  (combined website + docs for review)
# Note: build/ remains pure Docusaurus output for local development
#
# Usage:
#   ./build_suggested_site.sh                    # Build only
#   ./build_suggested_site.sh --serve            # Build and start server
#   ./build_suggested_site.sh --skip-docs-build  # Skip Docusaurus docs build (use existing)
#   ./build_suggested_site.sh --skip-site-build  # Skip website build (use existing)
#   ./build_suggested_site.sh --staging-dir=PATH # Stage to custom directory (for PR submission)

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WEBSITE_DIR="$SCRIPT_DIR"
IGNITE3_DOCS_DIR="${IGNITE3_DOCS_DIR:-$HOME/Code/magliettiGit/ignite-3/docs}"
# Stage combined site into suggested-site/ for testing and review
# This keeps build/ pure Docusaurus output for local development
# Can be overridden with --staging-dir for PR submission to different repos
STAGING_DIR="${STAGING_DIR:-$WEBSITE_DIR/suggested-site}"

# Options
SERVE=false
SKIP_DOCS_BUILD=false
SKIP_SITE_BUILD=false
PORT=3000

while [ "$#" -gt 0 ]; do
  case "$1" in
    --serve)
      SERVE=true
      ;;
    --skip-docs-build)
      SKIP_DOCS_BUILD=true
      ;;
    --skip-site-build)
      SKIP_SITE_BUILD=true
      ;;
    --port=*)
      PORT="${1#*=}"
      ;;
    --ignite3-docs=*)
      IGNITE3_DOCS_DIR="${1#*=}"
      ;;
    --staging-dir=*)
      STAGING_DIR="${1#*=}"
      # Expand ~ to home directory
      STAGING_DIR="${STAGING_DIR/#\~/$HOME}"
      ;;
    -h|--help)
      echo "Usage: $0 [options]"
      echo ""
      echo "Options:"
      echo "  --serve              Start a local server after building"
      echo "  --skip-docs-build    Skip building Ignite 3 Docusaurus docs"
      echo "  --skip-site-build    Skip building the main website"
      echo "  --port=PORT          Port for local server (default: 3000)"
      echo "  --ignite3-docs=PATH  Path to ignite-3/docs directory"
      echo "  --staging-dir=PATH   Output directory for staged site (for PR submission)"
      echo "  -h, --help           Show this help message"
      echo ""
      echo "Environment Variables:"
      echo "  IGNITE3_DOCS_DIR     Path to ignite-3/docs (default: ~/Code/magliettiGit/ignite-3/docs)"
      echo "  STAGING_DIR          Output directory (default: ./suggested-site)"
      echo ""
      echo "Examples:"
      echo "  # Build and serve locally"
      echo "  $0 --serve"
      echo ""
      echo "  # Build to Apache ignite-website repo for PR submission"
      echo "  $0 --staging-dir=~/Code/ignite/ignite-website/suggested-site"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Use --help for usage information"
      exit 1
      ;;
  esac
  shift
done

echo "=== Suggested Site Build ==="
echo "Website directory: $WEBSITE_DIR"
echo "Ignite 3 docs directory: $IGNITE3_DOCS_DIR"
echo "Staging directory: $STAGING_DIR"
echo ""

# Verify directories exist
if [ ! -d "$IGNITE3_DOCS_DIR" ]; then
  echo "ERROR: Ignite 3 docs directory not found: $IGNITE3_DOCS_DIR"
  echo "Set IGNITE3_DOCS_DIR or use --ignite3-docs=PATH"
  exit 1
fi

# Step 1: Build Ignite 3 docs (Docusaurus)
if [ "$SKIP_DOCS_BUILD" = false ]; then
  echo "=== [1/9] Building Ignite 3 Documentation (Docusaurus) ==="
  cd "$IGNITE3_DOCS_DIR"
  npm run build
  echo "<<< Ignite 3 docs build complete"
else
  echo "=== [1/9] Skipping Ignite 3 docs build (--skip-docs-build) ==="
fi

# Step 2: Build website (Docusaurus)
if [ "$SKIP_SITE_BUILD" = false ]; then
  echo ""
  echo "=== [2/9] Building Website (Docusaurus) ==="
  cd "$WEBSITE_DIR"
  npm run build
  echo "<<< Website build complete"
else
  echo ""
  echo "=== [2/9] Skipping website build (--skip-site-build) ==="
fi

# Step 3: Copy website build to staging directory
echo ""
echo "=== [3/9] Copying website build to staging directory ==="
rm -rf "$STAGING_DIR"
mkdir -p "$STAGING_DIR"
cp -r "$WEBSITE_DIR/build/"* "$STAGING_DIR/"
# Create .nojekyll to prevent GitHub Pages from processing with Jekyll
touch "$STAGING_DIR/.nojekyll"
echo "<<< Copied website to $STAGING_DIR"

# Step 4: Copy Ignite 3 docs directly from ignite-3 repo build
echo ""
echo "=== [4/9] Copying Ignite 3 docs to staging/docs/ignite3/ ==="
mkdir -p "$STAGING_DIR/docs/ignite3"
rm -rf "$STAGING_DIR/docs/ignite3"/*
cp -r "$IGNITE3_DOCS_DIR/build/"* "$STAGING_DIR/docs/ignite3/"
echo "<<< Copied $(find "$STAGING_DIR/docs/ignite3" -type f | wc -l | tr -d ' ') files"

# Step 5: Copy pre-built Ignite 2 docs
echo ""
echo "=== [5/9] Copying Ignite 2 docs to staging/docs/ignite2/ ==="
if [ -d "$WEBSITE_DIR/docs/ignite2" ]; then
  rm -rf "$STAGING_DIR/docs/ignite2"
  cp -r "$WEBSITE_DIR/docs/ignite2" "$STAGING_DIR/docs/"
  echo "<<< Copied Ignite 2 docs ($(ls "$STAGING_DIR/docs/ignite2" | wc -l | tr -d ' ') versions)"
else
  echo "!!! WARNING: Ignite 2 docs not found at $WEBSITE_DIR/docs/ignite2"
fi

# Step 6: Copy original assets (versioning.js, docs.css, etc.)
echo ""
echo "=== [6/9] Merging original assets (versioning.js, docs.css, etc.) ==="
if [ -d "$WEBSITE_DIR/assets" ]; then
  # Copy JS files
  mkdir -p "$STAGING_DIR/assets/js"
  cp "$WEBSITE_DIR/assets/js/"*.js "$STAGING_DIR/assets/js/" 2>/dev/null || true

  # Copy CSS files
  mkdir -p "$STAGING_DIR/assets/css"
  cp "$WEBSITE_DIR/assets/css/"*.css "$STAGING_DIR/assets/css/" 2>/dev/null || true

  # Copy fonts
  if [ -d "$WEBSITE_DIR/assets/fonts" ]; then
    cp -r "$WEBSITE_DIR/assets/fonts" "$STAGING_DIR/assets/"
  fi

  # Copy images
  if [ -d "$WEBSITE_DIR/assets/images" ]; then
    mkdir -p "$STAGING_DIR/assets/images"
    cp -r "$WEBSITE_DIR/assets/images/"* "$STAGING_DIR/assets/images/" 2>/dev/null || true
  fi

  echo "<<< Merged assets:"
  echo "    - JS files: $(ls "$STAGING_DIR/assets/js/"*.js 2>/dev/null | wc -l | tr -d ' ')"
  echo "    - CSS files: $(ls "$STAGING_DIR/assets/css/"*.css 2>/dev/null | wc -l | tr -d ' ')"
else
  echo "!!! WARNING: Assets directory not found at $WEBSITE_DIR/assets"
fi

# Step 7: Copy Pagefind search index
echo ""
echo "=== [7/9] Copying Pagefind search index ==="
if [ -d "$WEBSITE_DIR/docs/pagefind" ]; then
  cp -r "$WEBSITE_DIR/docs/pagefind" "$STAGING_DIR/docs/"
  echo "<<< Copied Pagefind index"
else
  echo "!!! WARNING: Pagefind directory not found (search may not work for Ignite 2)"
fi

# Step 8: Copy version metadata files
echo ""
echo "=== [8/9] Copying version metadata files ==="

# Copy available-versions.txt for ignite2
if [ -f "$WEBSITE_DIR/docs/ignite2/available-versions.txt" ]; then
  cp "$WEBSITE_DIR/docs/ignite2/available-versions.txt" "$STAGING_DIR/docs/ignite2/"
  echo "<<< Copied ignite2/available-versions.txt"
fi

# Copy root available-versions.txt (legacy)
if [ -f "$WEBSITE_DIR/docs/available-versions.txt" ]; then
  cp "$WEBSITE_DIR/docs/available-versions.txt" "$STAGING_DIR/docs/"
  echo "<<< Copied docs/available-versions.txt"
fi

# Note: We skip copying 'latest' text files here because step 9 creates
# 'latest' directories with actual content for deep link support

# Copy extensions docs if they exist
if [ -d "$WEBSITE_DIR/docs/extensions" ]; then
  cp -r "$WEBSITE_DIR/docs/extensions" "$STAGING_DIR/docs/"
  echo "<<< Copied extensions docs"
fi

# Step 9: Create latest version aliases for static server
# (Python http.server doesn't process .htaccess, so we need special handling)
echo ""
echo "=== [9/9] Creating 'latest' version aliases ==="

# Note: /docs/index.html is generated by Docusaurus from src/pages/docs.tsx
# It provides a landing page for choosing between Ignite 2 and Ignite 3 docs
echo ">>> /docs/ landing page generated by Docusaurus (src/pages/docs.tsx)"

# Create /docs/latest/ -> redirect to Ignite 3 (canonical latest)
rm -rf "$STAGING_DIR/docs/latest"
mkdir -p "$STAGING_DIR/docs/latest"
cat > "$STAGING_DIR/docs/latest/index.html" << 'REDIRECT_EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting to Apache Ignite 3 Documentation</title>
  <meta http-equiv="refresh" content="0; url=/docs/ignite3/3.1.0/">
  <link rel="canonical" href="/docs/ignite3/3.1.0/">
</head>
<body>
  <p>Redirecting to <a href="/docs/ignite3/3.1.0/">Apache Ignite 3 Documentation</a>...</p>
</body>
</html>
REDIRECT_EOF
echo "<<< Created /docs/latest/ -> /docs/ignite3/3.1.0/"

# Create /docs/ignite2/latest/ as a copy of 2.17.0 (enables deep links)
echo ">>> Creating /docs/ignite2/latest/ (copy of 2.17.0 for deep links)..."
rm -rf "$STAGING_DIR/docs/ignite2/latest"
if [ -d "$STAGING_DIR/docs/ignite2/2.17.0" ]; then
  cp -r "$STAGING_DIR/docs/ignite2/2.17.0" "$STAGING_DIR/docs/ignite2/latest"
  echo "<<< Created /docs/ignite2/latest/ ($(find "$STAGING_DIR/docs/ignite2/latest" -type f | wc -l | tr -d ' ') files)"
else
  echo "!!! WARNING: /docs/ignite2/2.17.0 not found, skipping latest alias"
fi

# Create /docs/ignite3/latest/ as redirect to 3.1.0
# NOTE: Docusaurus builds have hardcoded paths, so we can't copy content.
# Deep links like /docs/ignite3/latest/getting-started/ will redirect to 3.1.0 equivalent.
echo ">>> Creating /docs/ignite3/latest/ (redirect to 3.1.0)..."
rm -rf "$STAGING_DIR/docs/ignite3/latest"
mkdir -p "$STAGING_DIR/docs/ignite3/latest"
cat > "$STAGING_DIR/docs/ignite3/latest/index.html" << 'REDIRECT_EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting to Apache Ignite 3 Latest</title>
  <script>
    // Preserve the path after /latest/ and redirect to /3.1.0/
    var path = window.location.pathname.replace('/docs/ignite3/latest', '/docs/ignite3/3.1.0');
    window.location.replace(path + window.location.search + window.location.hash);
  </script>
  <meta http-equiv="refresh" content="0; url=/docs/ignite3/3.1.0/">
  <link rel="canonical" href="/docs/ignite3/3.1.0/">
</head>
<body>
  <p>Redirecting to <a href="/docs/ignite3/3.1.0/">Apache Ignite 3.1.0 Documentation</a>...</p>
</body>
</html>
REDIRECT_EOF
echo "<<< Created /docs/ignite3/latest/ redirect"

echo ""
echo "=== Build Complete ==="
echo ""
echo "Staging directory: $STAGING_DIR"
echo ""
echo "Directory structure:"
echo "  suggested-site/"
echo "  ├── docs/"
echo "  │   ├── ignite2/     (Jekyll - $(ls "$STAGING_DIR/docs/ignite2" 2>/dev/null | grep -E '^2\.' | wc -l | tr -d ' ') versions)"
echo "  │   ├── ignite3/     (Docusaurus)"
echo "  │   ├── extensions/"
echo "  │   └── pagefind/"
echo "  └── assets/"
echo "      ├── js/          (includes versioning.js)"
echo "      └── css/         (includes docs.css)"
echo ""

# Verify key files exist
echo "Verification:"
if [ -f "$STAGING_DIR/assets/js/versioning.js" ]; then
  echo "  [OK] versioning.js"
else
  echo "  [MISSING] versioning.js"
fi

if [ -f "$STAGING_DIR/assets/css/docs.css" ]; then
  echo "  [OK] docs.css"
else
  echo "  [MISSING] docs.css"
fi

if [ -f "$STAGING_DIR/docs/ignite2/available-versions.txt" ]; then
  echo "  [OK] ignite2/available-versions.txt"
else
  echo "  [MISSING] ignite2/available-versions.txt"
fi

if [ -d "$STAGING_DIR/docs/ignite3/3.1.0" ]; then
  echo "  [OK] ignite3/3.1.0/"
else
  echo "  [MISSING] ignite3/3.1.0/"
fi

echo ""

# Start server if requested
if [ "$SERVE" = true ]; then
  echo "=== Starting Local Server ==="
  echo ""
  echo "Server URL: http://localhost:$PORT"
  echo ""
  echo "Test URLs:"
  echo "  - Homepage:              http://localhost:$PORT/"
  echo "  - Docs Landing:          http://localhost:$PORT/docs/"
  echo "  - Ignite 3 latest:       http://localhost:$PORT/docs/ignite3/latest/"
  echo "  - Ignite 3 versioned:    http://localhost:$PORT/docs/ignite3/3.1.0/"
  echo "  - Ignite 2 latest:       http://localhost:$PORT/docs/ignite2/latest/"
  echo "  - Ignite 2 versioned:    http://localhost:$PORT/docs/ignite2/2.17.0/"
  echo "  - Deep link test:        http://localhost:$PORT/docs/ignite2/latest/quick-start/java"
  echo ""
  echo "Press Ctrl+C to stop the server"
  echo ""
  # Use custom Python server with .html extension fallback (mimics Apache .htaccess)
  python3 "$WEBSITE_DIR/serve.py" "$PORT" "$STAGING_DIR"
fi

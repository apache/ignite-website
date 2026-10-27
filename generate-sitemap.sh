#!/usr/bin/env bash

set -euo pipefail

#######################################
# CONFIG
#######################################

BASE_URL="https://ignite.apache.org"
OUTPUT_FILE="sitemap.xml"

# The latest documentation versions are read from the pointer files, see
# read_latest_versions below: "latest" at the repository root for Ignite 2 (the
# same file the docs-publishing workflow in apache/ignite reads) and
# docs/ignite3/latest for Ignite 3.

# Ignite 3 (Docusaurus) pages declare canonical URLs under /docs/ignite3/<version>/,
# which robots.txt disallows, so listing them in the sitemap only produces
# "blocked by robots.txt" errors. Keep them out until the Ignite 3 docs indexing
# is sorted out (canonical on /docs/ignite3/latest/ or an Allow rule).
INCLUDE_IGNITE3_DOCS="no"

# Prefix of the generator meta that marks Docusaurus pages ("Docusaurus v<core version>");
# matching the prefix keeps the site pages in the sitemap across Docusaurus upgrades.
DOCUSAURUS_GENERATOR_META='<meta name="generator" content="Docusaurus v'

EXCLUDE_DIRS=(
  ".git"
  "node_modules"
  "vendor"
  "tmp"
  "private"
  "assets"
  "releases"
  "build"
  "jcache"
  "suggested-site"
  "_docs"
)

# Exact paths by priority
PRIORITY_1_0=(
  "/"
  "/download/"
)

PRIORITY_0_9=(
)

# Prefix-based priorities
PRIORITY_PREFIX_1_0=(
  "/docs/ignite2/latest/"
)

PRIORITY_PREFIX_0_6=(
)

PRIORITY_PREFIX_0_8=(
)

DEFAULT_PRIORITY="0.7"

#######################################

SITE_DIR="$(pwd)"
BASE_URL="${BASE_URL%/}"

# Resolve IGNITE2_LATEST_VERSION / IGNITE3_LATEST_VERSION from the pointer files.
# .htaccess and src/config/docs-urls.ts carry the same numbers; update them
# together with the pointer files when a new version is released.
read_latest_versions() {
  local ignite2_pointer="$SITE_DIR/latest"            # "version=2.18.0"
  local ignite3_pointer="$SITE_DIR/docs/ignite3/latest" # "../docs/ignite3/3.1.0"

  IGNITE2_LATEST_VERSION="$(grep '^version=' "$ignite2_pointer" 2>/dev/null | head -n 1 | cut -d'=' -f2 | tr -d '[:space:]' || true)"
  IGNITE3_LATEST_VERSION="$(tr -d '[:space:]' < "$ignite3_pointer" 2>/dev/null | xargs -0 basename 2>/dev/null || true)"

  if [[ ! "$IGNITE2_LATEST_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Cannot read the latest Ignite 2 version from $ignite2_pointer" >&2
    exit 1
  fi
  if [[ ! -d "$SITE_DIR/docs/ignite2/$IGNITE2_LATEST_VERSION" ]]; then
    echo "docs/ignite2/$IGNITE2_LATEST_VERSION (from $ignite2_pointer) does not exist" >&2
    exit 1
  fi
  if [[ ! "$IGNITE3_LATEST_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Cannot read the latest Ignite 3 version from $ignite3_pointer" >&2
    exit 1
  fi
}
read_latest_versions
echo "Latest versions: Ignite 2 = $IGNITE2_LATEST_VERSION, Ignite 3 = $IGNITE3_LATEST_VERSION"

TMP_URLS="$(mktemp "${TMPDIR:-/tmp}/sitemap-urls.XXXXXX")"
TMP_SORTED="$(mktemp "${TMPDIR:-/tmp}/sitemap-sorted.XXXXXX")"
TMP_DIRTY="$(mktemp "${TMPDIR:-/tmp}/sitemap-dirty.XXXXXX")"

cleanup() {
  rm -f "$TMP_URLS" "$TMP_SORTED" "$TMP_DIRTY"
}
trap cleanup EXIT

# Files with uncommitted changes (modified, staged or untracked), one path per line.
# Their <lastmod> comes from the file mtime, because the git history does not know
# about them yet.
git -C "$SITE_DIR" status --porcelain --untracked-files=all 2>/dev/null | cut -c4- > "$TMP_DIRTY" || true

in_array() {
  local needle="$1"
  shift
  local item

  for item in "$@"; do
    [[ "$needle" == "$item" ]] && return 0
  done

  return 1
}

starts_with_any() {
  local value="$1"
  shift
  local prefix

  for prefix in "$@"; do
    [[ "$value" == "$prefix"* ]] && return 0
  done

  return 1
}

# The "${arr[@]+"${arr[@]}"}" form keeps empty arrays from tripping `set -u`
# on bash 3.2 (the /bin/bash shipped with macOS).
get_priority() {
  local url_path="$1"

  if in_array "$url_path" ${PRIORITY_1_0[@]+"${PRIORITY_1_0[@]}"}; then
    echo "1.0"
    return
  fi

  if starts_with_any "$url_path" ${PRIORITY_PREFIX_1_0[@]+"${PRIORITY_PREFIX_1_0[@]}"}; then
    echo "1.0"
    return
  fi

  if in_array "$url_path" ${PRIORITY_0_9[@]+"${PRIORITY_0_9[@]}"}; then
    echo "0.9"
    return
  fi

  if starts_with_any "$url_path" ${PRIORITY_PREFIX_0_6[@]+"${PRIORITY_PREFIX_0_6[@]}"}; then
    echo "0.6"
    return
  fi

  if starts_with_any "$url_path" ${PRIORITY_PREFIX_0_8[@]+"${PRIORITY_PREFIX_0_8[@]}"}; then
    echo "0.8"
    return
  fi

  echo "$DEFAULT_PRIORITY"
}

# <lastmod> must reflect real content changes, otherwise search engines ignore it.
# Use the date of the last commit that touched the file; use the file mtime for
# files that have uncommitted changes (see TMP_DIRTY) or are unknown to git.
get_lastmod() {
  local file="$1"
  local rel="${file#$SITE_DIR/}"
  local git_date=""

  if ! grep -Fxq -- "$rel" "$TMP_DIRTY"; then
    git_date="$(TZ=UTC git -C "$SITE_DIR" log -1 --format=%cd --date=format-local:'%Y-%m-%dT%H:%M:%SZ' -- "$rel" 2>/dev/null || true)"
  fi

  if [[ -n "$git_date" ]]; then
    echo "$git_date"
  else
    date -u -r "$file" +"%Y-%m-%dT%H:%M:%SZ"
  fi
}

# Build prune expression for find
PRUNE_EXPR=()
for dir in "${EXCLUDE_DIRS[@]}"; do
  PRUNE_EXPR+=( -path "$SITE_DIR/$dir" -o -path "$SITE_DIR/$dir/*" -o )
done
unset 'PRUNE_EXPR[${#PRUNE_EXPR[@]}-1]' 2>/dev/null || true

find "$SITE_DIR" \
  \( "${PRUNE_EXPR[@]}" \) -prune -o \
  -type f -name "*.html" -print0 |
while IFS= read -r -d '' file; do
  rel="${file#$SITE_DIR/}"

  # The error page is a Docusaurus page too, but must not be listed in the sitemap
  [[ "$rel" == "404.html" ]] && continue

  # docs/ignite3: only one allowed version, and only when enabled (see INCLUDE_IGNITE3_DOCS)
  if [[ "$rel" == docs/ignite3/* ]]; then
    [[ "$INCLUDE_IGNITE3_DOCS" == "yes" ]] || continue
    [[ "$rel" != docs/ignite3/$IGNITE3_LATEST_VERSION/* ]] && continue
  fi

  # docs/ignite2: only one allowed version
  if [[ "$rel" == docs/ignite2/* ]]; then
    [[ "$rel" != docs/ignite2/$IGNITE2_LATEST_VERSION/* ]] && continue
  fi

  # For all files except docs/ignite2/*:
  # require Docusaurus generator meta tag
  if [[ "$rel" != docs/ignite2/* ]]; then
    grep -Fq "$DOCUSAURUS_GENERATOR_META" "$file" || continue
  fi

  # Pages that declare noindex (e.g. the empty section hubs under docs/ignite2/<version>/)
  # must not be listed
  if grep -qiE '<meta[^>]*name="robots"[^>]*content="noindex"' "$file"; then
    continue
  fi

  # Build URL path
  if [[ "$rel" == "index.html" ]]; then
    url_path="/"
  else
    path="${rel%.html}"

    if [[ "$path" == */index ]]; then
      url_path="/${path%/index}/"
    else
      url_path="/$path"
    fi
  fi

  # Replace ignite2 version with latest in public URL.
  # Quoted pattern + plain replacement: bash 3.2 keeps backslashes from "\/" in the result.
  versioned_prefix="/docs/ignite2/$IGNITE2_LATEST_VERSION/"
  latest_prefix="/docs/ignite2/latest/"
  url_path="${url_path/"$versioned_prefix"/$latest_prefix}"

  # Collapse accidental duplicate slashes in path only
  while [[ "$url_path" == *"//"* ]]; do
    url_path="${url_path//\/\//\/}"
  done

  url="${BASE_URL}${url_path}"
  lastmod="$(get_lastmod "$file")"
  priority="$(get_priority "$url_path")"

  printf '%s\t%s\t%s\n' "$url" "$lastmod" "$priority"
done > "$TMP_URLS"

# LC_ALL=C: byte order, so the file comes out the same on every machine and diffs stay small
LC_ALL=C sort -u "$TMP_URLS" > "$TMP_SORTED"

{
  printf '%s\n' '<?xml version="1.0" encoding="UTF-8"?>'
  printf '%s\n' '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  awk -F '\t' '
    {
      printf "  <url>\n"
      printf "    <loc>%s</loc>\n", $1
      printf "    <lastmod>%s</lastmod>\n", $2
      printf "    <priority>%s</priority>\n", $3
      printf "  </url>\n"
    }
  ' "$TMP_SORTED"

  printf '%s\n' '</urlset>'
} > "$OUTPUT_FILE"

echo "Sitemap generated: $OUTPUT_FILE"

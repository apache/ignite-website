#!/usr/bin/env bash

set -euo pipefail

#######################################
# CONFIG
#######################################

BASE_URL="https://ignite.apache.org"
OUTPUT_FILE="sitemap.xml"

IGNITE3_LATEST_VERSION="3.1.0"
IGNITE2_LATEST_VERSION="2.17.0"

DOCUSAURUS_GENERATOR_META='<meta name="generator" content="Docusaurus v3.9.2">'

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
  "/docs/ignite3/${IGNITE3_LATEST_VERSION}/"
)

PRIORITY_PREFIX_0_6=(
)

PRIORITY_PREFIX_0_8=(
)

DEFAULT_PRIORITY="0.7"

#######################################

SITE_DIR="$(pwd)"
BASE_URL="${BASE_URL%/}"

TMP_URLS="$(mktemp)"
TMP_SORTED="$(mktemp)"

cleanup() {
  rm -f "$TMP_URLS" "$TMP_SORTED"
}
trap cleanup EXIT

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

get_priority() {
  local url_path="$1"

  if in_array "$url_path" "${PRIORITY_1_0[@]}"; then
    echo "1.0"
    return
  fi

  if starts_with_any "$url_path" "${PRIORITY_PREFIX_1_0[@]}"; then
    echo "1.0"
    return
  fi

  if in_array "$url_path" "${PRIORITY_0_9[@]}"; then
    echo "0.9"
    return
  fi

  if starts_with_any "$url_path" "${PRIORITY_PREFIX_0_6[@]}"; then
    echo "0.6"
    return
  fi

  if starts_with_any "$url_path" "${PRIORITY_PREFIX_0_8[@]}"; then
    echo "0.8"
    return
  fi

  echo "$DEFAULT_PRIORITY"
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

  # docs/ignite3: only one allowed version
  if [[ "$rel" == docs/ignite3/* ]]; then
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

  # Replace ignite2 version with latest in public URL
  url_path="${url_path/\/docs\/ignite2\/$IGNITE2_LATEST_VERSION\//\/docs\/ignite2\/latest\/}"

  # Collapse accidental duplicate slashes in path only
  while [[ "$url_path" == *"//"* ]]; do
    url_path="${url_path//\/\//\/}"
  done

  url="${BASE_URL}${url_path}"
  lastmod="$(date -u -r "$file" +"%Y-%m-%dT%H:%M:%SZ")"
  priority="$(get_priority "$url_path")"

  printf '%s\t%s\t%s\n' "$url" "$lastmod" "$priority"
done > "$TMP_URLS"

sort -u "$TMP_URLS" > "$TMP_SORTED"

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

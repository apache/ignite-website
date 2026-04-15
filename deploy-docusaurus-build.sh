#!/usr/bin/env bash

set -euo pipefail

BUILD_DIR="build"
TARGET_DIR="."

[[ -d "$BUILD_DIR" ]] || {
  echo "No build/ directory found"
  exit 1
}

echo "Cleaning old Docusaurus JS/CSS assets..."

# Удаляем только хешированные docusaurus *.js
if [[ -d "$TARGET_DIR/assets/js" ]]; then
  find "$TARGET_DIR/assets/js" -maxdepth 1 -type f \
    | while IFS= read -r file; do
        name="$(basename "$file")"
        if [[ "$name" =~ \.[a-f0-9]{8,}\.js$ ]]; then
          echo "Removing $file"
          rm -f "$file"
        fi
      done
fi

# Удаляем только хешированные docusaurus *.css
if [[ -d "$TARGET_DIR/assets/css" ]]; then
  find "$TARGET_DIR/assets/css" -maxdepth 1 -type f \
    | while IFS= read -r file; do
        name="$(basename "$file")"
        if [[ "$name" =~ \.[a-f0-9]{8,}\.css$ ]]; then
          echo "Removing $file"
          rm -f "$file"
        fi
      done
fi

echo "Copying new build without touching sitemap.xml..."

rsync -a \
  --exclude='sitemap.xml' \
  "$BUILD_DIR"/ "$TARGET_DIR"/

echo "Done"

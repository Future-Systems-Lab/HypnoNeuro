#!/usr/bin/env bash
set -e
set -u
set -o pipefail
md="docs/presentations/stakeholder_summary.md"
src="visuals"
dest="docs/presentations/img"
mkdir -p "$dest"
grep -oE '\((img/[^)]+\.(png|jpg|jpeg|svg))\)' "$md" | tr -d '()' | sed 's#^img/##' | sort -u | while read -r name; do
  if [ -f "$src/$name" ]; then
    cp "$src/$name" "$dest/$name"
  else
    echo "MISSING:$name"
  fi
done

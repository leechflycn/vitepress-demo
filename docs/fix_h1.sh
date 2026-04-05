#!/bin/bash
for file in $(find . -name '*.md' -not -name 'index.md'); do
  if ! grep -q '^# ' "$file"; then
    title=$(grep -m 1 '^title:' "$file" | sed 's/^title: "\?//' | sed 's/"\?$//')
    if [ -n "$title" ]; then
      awk -v t="$title" 'BEGIN {p=0} /^---$/ {c++; if (c==2) {print; print "\n# " t; p=1; next}} {print}' "$file" > tmp_file && mv tmp_file "$file"
      echo "Fixed $file with title: $title"
    fi
  fi
done

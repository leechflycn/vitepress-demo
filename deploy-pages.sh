#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  echo "ERROR: CLOUDFLARE_API_TOKEN is not set" >&2
  exit 2
fi
npm run docs:build
npx -y wrangler@latest pages deploy docs/.vitepress/dist --project-name vitepress-demo --branch main --commit-dirty=true

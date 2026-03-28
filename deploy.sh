#!/bin/bash
# Deploy DougAIWebsite to Hostinger VPS
set -e

echo "Deploying to douglasai.co..."

ssh root@76.13.29.209 "cd /root/DougAIWebsite && git pull origin claude/ai-automation-website-PGFp4 && npm install && npm run build && pm2 restart douglasai"

echo "Deploy complete!"

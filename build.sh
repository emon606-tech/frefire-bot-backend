#!/bin/bash

echo "🚀 Starting build process..."

# Check Node.js version
echo "📋 Node.js version: $(node --version)"
echo "📋 NPM version: $(npm --version)"

# Clean previous installations
echo "🧹 Cleaning previous installations..."
rm -rf node_modules package-lock.json

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create cache directory
echo "📁 Creating cache directory..."
mkdir -p /opt/render/project/src/node_modules/.cache/puppeteer

# Install Chrome
echo "🌐 Installing Chrome..."
npx puppeteer browsers install chrome --path /opt/render/project/src/node_modules/.cache/puppeteer

# Verify Chrome installation
echo "✅ Verifying Chrome installation..."
if [ -f "/opt/render/project/src/node_modules/.cache/puppeteer/chrome-linux-*/chrome-linux/chrome" ]; then
    echo "✅ Chrome found!"
    ls -la /opt/render/project/src/node_modules/.cache/puppeteer/
else
    echo "⚠️ Chrome not found in expected location"
    find /opt/render/project/src/node_modules -name "chrome" -type f 2>/dev/null || echo "No Chrome found anywhere"
fi

echo "🏁 Build process completed!" 
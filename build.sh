#!/bin/bash

echo "🚀 Starting build process..."

# Check Node.js version
echo "📋 Checking Node.js version..."
node --version
npm --version

# Clean install
echo "🧹 Cleaning previous installations..."
rm -rf node_modules package-lock.json yarn.lock

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Verify installation
echo "✅ Verifying installation..."
if [ -f "bot_server.js" ]; then
    echo "✅ bot_server.js found"
else
    echo "❌ bot_server.js not found"
    exit 1
fi

if [ -d "node_modules" ]; then
    echo "✅ node_modules directory created"
else
    echo "❌ node_modules directory not created"
    exit 1
fi

echo "🎉 Build completed successfully!"
echo "🚀 Ready to start server with: npm start" 
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Puppeteer Chrome installation and launch strategies...');

async function testLaunchStrategy(name, options) {
    try {
        console.log(`\n🚀 Testing ${name}...`);
        const browser = await puppeteer.launch(options);
        console.log(`✅ ${name} successful`);
        await browser.close();
        return true;
    } catch (error) {
        console.log(`❌ ${name} failed: ${error.message}`);
        return false;
    }
}

async function verifyChrome() {
    try {
        // Check if Chrome executable exists
        const executablePath = puppeteer.executablePath();
        console.log(`\n📁 Puppeteer executable path: ${executablePath}`);
        
        if (fs.existsSync(executablePath)) {
            console.log('✅ Chrome executable file exists');
            
            // Get file stats
            const stats = fs.statSync(executablePath);
            console.log(`📁 File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
            console.log(`📅 Last modified: ${stats.mtime}`);
        } else {
            console.log('❌ Chrome executable file does not exist');
        }
        
        // Test different launch strategies
        const strategies = [
            {
                name: 'Default Puppeteer launch',
                options: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }
            },
            {
                name: 'System Chrome',
                options: { 
                    headless: true, 
                    executablePath: '/usr/bin/google-chrome',
                    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
                }
            },
            {
                name: 'Chromium',
                options: { 
                    headless: true, 
                    executablePath: '/usr/bin/chromium-browser',
                    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
                }
            },
            {
                name: 'Custom Chrome path',
                options: { 
                    headless: true, 
                    executablePath: '/opt/google/chrome/chrome',
                    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
                }
            }
        ];
        
        let successCount = 0;
        for (const strategy of strategies) {
            const success = await testLaunchStrategy(strategy.name, strategy.options);
            if (success) successCount++;
        }
        
        console.log(`\n📊 Results: ${successCount}/${strategies.length} strategies successful`);
        
        // List Puppeteer cache directory
        const cacheDir = path.dirname(executablePath);
        console.log(`\n📁 Cache directory: ${cacheDir}`);
        
        if (fs.existsSync(cacheDir)) {
            const files = fs.readdirSync(cacheDir);
            console.log(`📁 Cache directory contents: ${files.join(', ')}`);
        }
        
        // Check environment variables
        console.log(`\n🔧 Environment variables:`);
        console.log(`PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: ${process.env.PUPPETEER_SKIP_CHROMIUM_DOWNLOAD || 'not set'}`);
        console.log(`PUPPETEER_EXECUTABLE_PATH: ${process.env.PUPPETEER_EXECUTABLE_PATH || 'not set'}`);
        console.log(`PUPPETEER_CACHE_DIR: ${process.env.PUPPETEER_CACHE_DIR || 'not set'}`);
        
    } catch (error) {
        console.error('\n❌ Verification failed:', error.message);
    }
}

verifyChrome().catch(console.error); 
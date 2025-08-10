# 🤖 Garena Bot Server Deployment Guide

## **🎯 What This Bot Does:**

This bot automatically:
1. **Takes a Free Fire UID** from your website
2. **Navigates to Garena's official website** (`https://mshop.garenanow.com`)
3. **Selects Free Fire** from the game options
4. **Enters the UID** in the login form
5. **Clicks the login button**
6. **Scrapes the real player data** (username, etc.)
7. **Returns it to your main page**

## **🚀 Quick Start (Local Testing):**

### **Step 1: Install Dependencies**
```bash
# Navigate to your project folder
cd "idfound page"

# Install bot dependencies
npm install express cors puppeteer

# Or use the package.json
npm install
```

### **Step 2: Start the Bot Server**
```bash
# Start bot server on port 3001
node bot_server.js

# Or use nodemon for development
npx nodemon bot_server.js
```

### **Step 3: Test the Bot**
```bash
# Test bot health
curl http://localhost:3001/api/bot/health

# Test bot scraping (replace 123456789 with real UID)
curl -X POST http://localhost:3001/api/bot/scrape \
  -H "Content-Type: application/json" \
  -d '{"uid": "123456789"}'
```

## **🌐 Deploy to Render (Recommended):**

### **Step 1: Create New Repository**
```bash
# Create a new folder for bot server
mkdir garena-bot-server
cd garena-bot-server

# Copy bot files
cp ../bot_server.js ./
cp ../bot_package.json ./package.json
```

### **Step 2: Create Render.yaml**
```yaml
services:
  - type: web
    name: garena-bot-server
    env: node
    buildCommand: npm install
    startCommand: node bot_server.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
```

### **Step 3: Deploy to Render**
1. **Go to [render.com](https://render.com)**
2. **Create new Web Service**
3. **Connect your GitHub repository**
4. **Select the bot repository**
5. **Deploy!**

### **Step 4: Update Your Frontend**
```javascript
// In your HTML, update the bot server URL
const BOT_SERVER = {
    BASE_URL: 'https://your-bot-server-name.onrender.com',
    ENDPOINTS: {
        SCRAPE: '/api/bot/scrape',
        HEALTH: '/api/bot/health'
    }
};
```

## **🔧 Bot Configuration:**

### **Garena Website Selectors:**
The bot needs to find elements on Garena's website. You may need to update these selectors:

```javascript
const GARENA_BOT_CONFIG = {
    BASE_URL: 'https://mshop.garenanow.com',
    FREE_FIRE_SELECTOR: '[data-game="freefire"]', // Update this
    UID_INPUT_SELECTOR: 'input[placeholder*="player ID"]', // Update this
    LOGIN_BUTTON_SELECTOR: 'button[type="submit"]', // Update this
    USERNAME_SELECTOR: '.username, .player-name, .nickname' // Update this
};
```

### **How to Find Selectors:**
1. **Open Garena website** in browser
2. **Right-click on Free Fire icon** → Inspect Element
3. **Look for unique attributes** like `id`, `class`, `data-*`
4. **Update the selectors** in `bot_server.js`

## **📱 Testing the Bot:**

### **Test with Real UID:**
```bash
# Use a real Free Fire UID (like from the screenshot: 2665040923)
curl -X POST https://your-bot-server.onrender.com/api/bot/scrape \
  -H "Content-Type: application/json" \
  -d '{"uid": "2665040923"}'
```

### **Expected Response:**
```json
{
  "success": true,
  "data": {
    "username": "NOYON & ON**",
    "nickname": "NOYON & ON**",
    "game": "Free Fire",
    "level": 45,
    "rank": "Unknown",
    "region": "Unknown",
    "clan": "Unknown",
    "kills": 12500,
    "matches": 750,
    "isRealData": true,
    "source": "Garena Official Website"
  },
  "message": "Successfully scraped real data from Garena website"
}
```

## **⚠️ Important Notes:**

### **Legal Considerations:**
- **Web scraping may violate terms of service**
- **Use responsibly and ethically**
- **Consider rate limiting**
- **Respect robots.txt**

### **Technical Limitations:**
- **Garena may block automated access**
- **Website structure may change**
- **Need to update selectors regularly**
- **May require CAPTCHA solving**

### **Rate Limiting:**
```javascript
// Add rate limiting to prevent abuse
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/bot/', limiter);
```

## **🔄 Troubleshooting:**

### **Common Issues:**

1. **"Could not find Free Fire selection"**
   - Update `FREE_FIRE_SELECTOR` in config
   - Check if website structure changed

2. **"Could not find UID input field"**
   - Update `UID_INPUT_SELECTOR` in config
   - Check if form is dynamically loaded

3. **"Could not find login button"**
   - Update `LOGIN_BUTTON_SELECTOR` in config
   - Check if button has different attributes

4. **"Bot could not extract player data"**
   - Check if login was successful
   - Update `USERNAME_SELECTOR` in config
   - Check browser console for errors

### **Debug Mode:**
```javascript
// Enable debug screenshots
await page.screenshot({ path: `debug_uid_${uid}.png` });

// Enable console logging
await page.on('console', msg => console.log('PAGE LOG:', msg.text()));
```

## **🎉 Success Indicators:**

- ✅ **Bot connects to Garena website**
- ✅ **Free Fire is selected automatically**
- ✅ **UID is entered successfully**
- ✅ **Login button is clicked**
- ✅ **Real player data is extracted**
- ✅ **Data is returned to your frontend**

## **🚀 Next Steps:**

1. **Deploy bot server to Render**
2. **Test with real Free Fire UIDs**
3. **Update selectors if needed**
4. **Add rate limiting and error handling**
5. **Monitor for website changes**
6. **Consider adding CAPTCHA solving**

## **📞 Support:**

If you encounter issues:
1. **Check browser console logs**
2. **Verify bot server is running**
3. **Test with known working UIDs**
4. **Update selectors if website changed**
5. **Check Render deployment logs**

---

**🎯 Your bot is now ready to get REAL Free Fire data from Garena's official website! 🚀** 
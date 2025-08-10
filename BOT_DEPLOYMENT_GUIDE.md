# Free Fire Bot Backend Deployment Guide

## Overview
This bot server automatically scrapes real Free Fire player data from the official Garena website (https://shop.garena.sg/) using Puppeteer automation.

## URLs
- **🌐 Garena Official Site**: https://shop.garena.sg/
- **🤖 Bot Backend**: https://frefire-bot-backend.onrender.com
- **🎯 Frontend**: https://emonxxx11.github.io/frefire-bot/

## Features
- Real-time data scraping from Garena official website
- Puppeteer automation for web scraping
- RESTful API endpoints
- CORS enabled for GitHub Pages frontend
- Health check monitoring

## API Endpoints

### 1. Health Check
```
GET /api/bot/health
```
Returns server status and version information.

### 2. Player Data Scraping
```
POST /api/bot/scrape
Content-Type: application/json

Body: { "uid": "123456789" }
```
Scrapes real player data from Garena website for the given UID.

## Deployment on Render

### 1. Prerequisites
- Render account
- GitHub repository with the bot code
- Node.js 18+ support

### 2. Deployment Steps

1. **Fork/Clone Repository**
   ```bash
   git clone https://github.com/emonxxx11/frefire-bot.git
   cd frefire-bot
   ```

2. **Create Render Service**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure Service**
   - **Name**: `frefire-bot-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for better performance)

4. **Environment Variables**
   ```
   NODE_ENV=production
   PORT=10000
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for build and deployment
   - Your service will be available at: `https://frefire-bot-backend.onrender.com`

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Test Endpoints
- Health Check: http://localhost:3001/api/bot/health
- Bot Scraping: http://localhost:3001/api/bot/scrape (POST)

## Frontend Integration

The frontend at https://emonxxx11.github.io/frefire-bot/ automatically connects to the bot backend when deployed.

### CORS Configuration
The bot server is configured to allow requests from:
- https://emonxxx11.github.io
- https://emonxxx11.github.io/frefire-bot
- Local development servers

## Bot Configuration

### Garena Website Selectors
The bot automatically tries multiple selectors to find elements on the Garena website:
- Free Fire game selection
- UID input field
- Login/submit button
- Player information extraction

### Timeout Settings
- Page load timeout: 30 seconds
- Element wait timeout: 10 seconds
- Response wait: 5 seconds

## Monitoring

### Health Check
Monitor the bot server health at:
```
https://frefire-bot-backend.onrender.com/api/bot/health
```

### Logs
Check Render dashboard for:
- Build logs
- Runtime logs
- Error messages

## Troubleshooting

### Common Issues

1. **Bot Timeout**
   - Increase timeout values in `GARENA_BOT_CONFIG`
   - Check Garena website availability

2. **CORS Errors**
   - Verify frontend URL is in CORS origins
   - Check browser console for errors

3. **Puppeteer Issues**
   - Ensure Node.js 18+ is used
   - Check Render's Node.js support

### Performance Optimization

1. **Headless Mode**
   - Bot runs in headless mode for faster execution
   - Disabled GPU acceleration for compatibility

2. **Resource Management**
   - Browser instances are properly closed
   - Memory usage is optimized

## Security Notes

- Bot uses realistic user agent
- No sensitive data is logged
- CORS is properly configured
- Input validation is implemented

## Support

For issues or questions:
- GitHub Issues: https://github.com/emonxxx11/frefire-bot/issues
- Bot Backend: https://frefire-bot-backend.onrender.com
- Frontend: https://emonxxx11.github.io/frefire-bot/

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Author**: emonxxx11 
# 🔥 Free Fire Bot Backend

A powerful bot server that automatically scrapes real Free Fire player data from the official Garena website using Puppeteer automation.

## 🌐 Live URLs

- **🤖 Bot Backend**: [https://frefire-bot-backend.onrender.com](https://frefire-bot-backend.onrender.com)
- **🎯 Frontend**: [https://emonxxx11.github.io/frefire-bot/](https://emonxxx11.github.io/frefire-bot/)
- **🌐 Garena Official**: [https://shop.garena.sg/](https://shop.garena.sg/)

## ✨ Features

- 🚀 **Real-time Data Scraping** from Garena official website
- 🤖 **Puppeteer Automation** for reliable web scraping
- 🔌 **RESTful API** endpoints
- 🌐 **CORS Enabled** for GitHub Pages frontend
- 📊 **Health Check** monitoring
- ⚡ **Fast & Efficient** headless browser automation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/emon606-tech/frefire-bot-backend.git
cd frefire-bot-backend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production
```bash
npm start
```

## 📡 API Endpoints

### Health Check
```http
GET /api/bot/health
```

### Player Data Scraping
```http
POST /api/bot/scrape
Content-Type: application/json

{
  "uid": "123456789"
}
```

## 🛠️ Technology Stack

- **Backend**: Node.js + Express
- **Web Automation**: Puppeteer
- **CORS**: Express CORS middleware
- **Deployment**: Render.com

## 📚 Documentation

For detailed deployment and usage instructions, see [BOT_DEPLOYMENT_GUIDE.md](./BOT_DEPLOYMENT_GUIDE.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Important Notes

- **Web scraping may violate terms of service**
- **Use responsibly and ethically**
- **Consider rate limiting**
- **Respect robots.txt**

## 🆘 Support

- **GitHub Issues**: [https://github.com/emon606-tech/frefire-bot-backend/issues](https://github.com/emon606-tech/frefire-bot-backend/issues)
- **Bot Backend**: [https://frefire-bot-backend.onrender.com](https://frefire-bot-backend.onrender.com)
- **Frontend**: [https://emonxxx11.github.io/frefire-bot/](https://emonxxx11.github.io/frefire-bot/)

---

**Made with ❤️ by emonxxx11** 
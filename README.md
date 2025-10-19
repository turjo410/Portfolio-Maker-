# 🎨 Portfolio Maker

> Professional portfolio builder with multi-step form and PDF export

[![React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)](https://www.mongodb.com/)

## Features

- 6-step guided form with real-time validation
- Visual progress indicators (✓/✗)
- Profile image upload
- 60+ categorized skills library
- PDF portfolio export
- JWT authentication
- MongoDB data persistence

## Installation

```bash
# Clone and install
git clone https://github.com/turjo410/Portfolio-Maker-.git
cd Portfolio-Maker-
npm install

# Setup environment
echo "PORT=5001
MONGODB_URI=mongodb://localhost:27017/portfolio-maker
JWT_SECRET=your_secret_key" > .env

# Start MongoDB and run
brew services start mongodb-community  # macOS
npm run dev
```

Visit **http://localhost:3000**

## Tech Stack

**Frontend:** React • Vite • Framer Motion • GSAP • Zustand  
**Backend:** Node.js • Express • MongoDB • JWT

## Usage

1. Create account / Login
2. Complete 6-step form (Personal → Skills → Education → Experience → Projects → Review)
3. Generate and download PDF

**Requirements:** Personal info + 2 education entries + 1 work experience

## Author

**Turjo Khan** • [@turjo410](https://github.com/turjo410)

## License

MIT License

---

<div align="center">
Made with ❤️ • ⭐ Star if helpful!
</div>

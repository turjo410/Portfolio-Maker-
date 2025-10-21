# 🚀 Deployment Guide - Free Hosting

This guide will help you deploy Portfolio Maker for **FREE** with full functionality.

## 🎯 Recommended Stack (100% Free)

### Option 1: Render + MongoDB Atlas (Easiest)

**Frontend + Backend**: Render  
**Database**: MongoDB Atlas  
**Cost**: $0/month

---

## 📋 Step-by-Step Deployment

### 1️⃣ Deploy MongoDB (Atlas - Free Tier)

1. **Create Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for free

2. **Create Cluster**
   - Click "Build a Database"
   - Choose **FREE** tier (M0 Sandbox)
   - Select region closest to you
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Username: `portfoliomaker`
   - Password: Generate secure password (save it!) - TurjoTurjo123
   - Role: Atlas Admin
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Example: `mongodb+srv://portfoliomaker:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio-maker?retryWrites=true&w=majority`
    mongodb+srv://portfoliomaker:<TurjoTurjo123>@cluster0.oobnxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
---

### 2️⃣ Deploy Backend (Render)

1. **Create Render Account**
   - Go to [Render](https://render.com/)
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `turjo410/Portfolio-Maker-`
   - Configure:
     ```
     Name: portfolio-maker-api
     Branch: main
     Root Directory: (leave empty)
     Environment: Node
     Build Command: npm install
     Start Command: npm run server
     ```

3. **Add Environment Variables**
   - Click "Environment"
   - Add variables:
     ```
     PORT = 5001
     MONGODB_URI = mongodb+srv://portfoliomaker:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio-maker?retryWrites=true&w=majority
     JWT_SECRET = your_super_secret_random_string_min_32_characters
     NODE_ENV = production
     FRONTEND_URL = https://portfolio-maker.onrender.com
     ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait 5-10 minutes
   - Your API will be live at: `https://portfolio-maker-api.onrender.com`

---

### 3️⃣ Update Frontend for Production

Create a production configuration:

**Update `vite.config.js`:**

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
```

**Create `.env.production`:**

```env
VITE_API_URL=https://portfolio-maker-api.onrender.com
```

**Update `src/services/api.js`:**

```javascript
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
```

---

### 4️⃣ Deploy Frontend (Render)

1. **Create Static Site**
   - Click "New +" → "Static Site"
   - Connect same repository
   - Configure:
     ```
     Name: portfolio-maker
     Branch: main
     Build Command: npm install && npm run build
     Publish Directory: dist
     ```

2. **Add Environment Variable**
   ```
   VITE_API_URL = https://portfolio-maker-api.onrender.com
   ```

3. **Deploy**
   - Click "Create Static Site"
   - Your frontend will be live at: `https://portfolio-maker.onrender.com`

---

## 🔄 Alternative: Vercel + Railway

### Option 2: Vercel (Frontend) + Railway (Backend)

**Frontend**: Vercel  
**Backend**: Railway  
**Database**: MongoDB Atlas

#### Deploy Backend on Railway

1. Go to [Railway.app](https://railway.app/)
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Add environment variables (same as Render)
6. Railway automatically detects Node.js and deploys
7. Get your backend URL: `https://portfolio-maker-production.up.railway.app`

#### Deploy Frontend on Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `Portfolio-Maker-` repository
5. Configure:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Environment Variables:
     VITE_API_URL = https://your-railway-url.up.railway.app
   ```
6. Click "Deploy"
7. Your site will be live at: `https://portfolio-maker.vercel.app`

---

## 🔄 Alternative: All-in-One Solutions

### Option 3: Cyclic (Easiest - All-in-One)

1. Go to [Cyclic.sh](https://www.cyclic.sh/)
2. Sign in with GitHub
3. Click "Link Your Own"
4. Select your repository
5. Add environment variables
6. Cyclic automatically detects and deploys both frontend and backend!
7. Live at: `https://portfolio-maker.cyclic.app`

---

## 📝 Update Backend for Production

**Update `server/index.js` for CORS:**

```javascript
import cors from 'cors';

const allowedOrigins = [
  'http://localhost:3000',
  'https://portfolio-maker.onrender.com',
  'https://portfolio-maker.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

---

## 🎯 Recommended Setup (Best Free Option)

```
Frontend:  Vercel (Fast CDN, unlimited bandwidth)
Backend:   Render (500 hours/month free)
Database:  MongoDB Atlas (512MB free)
```

### Why This Stack?

✅ **100% Free Forever**  
✅ **Auto-deploy on git push**  
✅ **SSL certificates included**  
✅ **Global CDN**  
✅ **No credit card required**  
✅ **Professional URLs**

---

## 🔧 Post-Deployment Steps

1. **Update README.md** with live links:
   ```markdown
   ## 🌐 Live Demo
   
   - **Website**: https://portfolio-maker.vercel.app
   - **API**: https://portfolio-maker-api.onrender.com
   ```

2. **Test Your Deployment**:
   - Visit your frontend URL
   - Create an account
   - Fill out the form
   - Generate PDF
   - Verify database saves data

3. **Monitor Usage**:
   - Render: 500 hours/month (auto-sleep after 15 min inactive)
   - Vercel: Unlimited bandwidth
   - MongoDB Atlas: 512MB storage

---

## ⚠️ Important Notes

### Render Free Tier Limitations:
- Apps sleep after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- 500 free hours/month (plenty for development)

### Solutions:
1. **UptimeRobot**: Ping your backend every 5 minutes to keep it awake
   - Free service: [UptimeRobot](https://uptimerobot.com/)
   
2. **Cron Job**: Add to your frontend to ping backend periodically

---

## 🚀 Quick Deploy Commands

After setting up MongoDB Atlas, run:

```bash
# 1. Install Render CLI (optional)
npm install -g render-cli

# 2. Deploy to Vercel
npm install -g vercel
vercel --prod

# 3. Deploy to Railway
npm install -g @railway/cli
railway login
railway up
```

---

## 📊 Comparison Table

| Platform | Frontend | Backend | Database | Sleep? | Deploy Time |
|----------|----------|---------|----------|--------|-------------|
| **Render** | ✅ | ✅ | ❌ | Yes (15min) | ~5 min |
| **Vercel** | ✅ | ❌ | ❌ | No | ~2 min |
| **Railway** | ❌ | ✅ | ✅ | No | ~3 min |
| **Cyclic** | ✅ | ✅ | ❌ | Yes (30min) | ~4 min |
| **MongoDB Atlas** | ❌ | ❌ | ✅ | No | ~10 min |

---

## 🎉 You're All Set!

Your Portfolio Maker will be:
- ✅ Live on the internet
- ✅ Accessible from anywhere
- ✅ Auto-deployed on every git push
- ✅ SSL secured (HTTPS)
- ✅ 100% FREE

### Need Help?

- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Railway Docs](https://docs.railway.app/)

---

**Made with ❤️ by Turjo Khan**

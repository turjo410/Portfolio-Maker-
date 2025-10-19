#!/bin/bash

# Portfolio Maker - Quick Deploy Script
# This script helps you deploy to various platforms

echo "🚀 Portfolio Maker - Deployment Helper"
echo "======================================="
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "Choose your deployment platform:"
echo ""
echo "1) Vercel (Frontend) - Recommended for frontend"
echo "2) Render (Backend) - Recommended for backend"
echo "3) Railway (Backend) - Alternative to Render"
echo "4) Show deployment guide"
echo "5) Exit"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
  1)
    echo ""
    echo -e "${BLUE}🚀 Deploying to Vercel...${NC}"
    echo ""
    if ! command -v vercel &> /dev/null; then
      echo -e "${YELLOW}Installing Vercel CLI...${NC}"
      npm install -g vercel
    fi
    echo ""
    echo -e "${GREEN}Running Vercel deployment...${NC}"
    vercel --prod
    ;;
  2)
    echo ""
    echo -e "${BLUE}📋 Render Deployment Instructions${NC}"
    echo ""
    echo "1. Go to https://render.com/"
    echo "2. Sign in with GitHub"
    echo "3. Click 'New +' → 'Web Service'"
    echo "4. Connect your repository: turjo410/Portfolio-Maker-"
    echo "5. Configure:"
    echo "   - Name: portfolio-maker-api"
    echo "   - Build Command: npm install"
    echo "   - Start Command: npm run server"
    echo "6. Add environment variables from DEPLOYMENT_GUIDE.md"
    echo "7. Click 'Create Web Service'"
    echo ""
    echo -e "${GREEN}See DEPLOYMENT_GUIDE.md for detailed steps!${NC}"
    ;;
  3)
    echo ""
    echo -e "${BLUE}🚂 Deploying to Railway...${NC}"
    echo ""
    if ! command -v railway &> /dev/null; then
      echo -e "${YELLOW}Installing Railway CLI...${NC}"
      npm install -g @railway/cli
    fi
    echo ""
    echo -e "${GREEN}Running Railway deployment...${NC}"
    railway login
    railway init
    railway up
    ;;
  4)
    echo ""
    echo -e "${GREEN}📖 Opening deployment guide...${NC}"
    if command -v open &> /dev/null; then
      open DEPLOYMENT_GUIDE.md
    elif command -v xdg-open &> /dev/null; then
      xdg-open DEPLOYMENT_GUIDE.md
    else
      cat DEPLOYMENT_GUIDE.md
    fi
    ;;
  5)
    echo ""
    echo -e "${GREEN}👋 Goodbye!${NC}"
    exit 0
    ;;
  *)
    echo ""
    echo -e "${YELLOW}Invalid choice. Please run the script again.${NC}"
    exit 1
    ;;
esac

echo ""
echo -e "${GREEN}✅ Done!${NC}"
echo ""
echo "📖 For more details, check DEPLOYMENT_GUIDE.md"
echo ""

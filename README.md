# 🎨 Portfolio Maker# Portfolio Maker - Professional Portfolio Generator



> A modern, full-stack web application for creating professional portfolios with PDF export functionalityA modern, full-stack web application for creating professional portfolios with beautiful animations, multiple career-specific templates, and PDF export functionality.



[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://reactjs.org/)## ✨ Features

[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)

[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)](https://www.mongodb.com/)### Core Features

[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite)](https://vitejs.dev/)- 🎨 **Beautiful Animated UI** - Smooth transitions and engaging animations using Framer Motion and custom WebGL effects

- 🎯 **8 Career-Specific Templates** - Unique visual designs for:

## ✨ Features  - **Student** - Academic-focused with education highlights

  - **Teacher** - Professional layout with teaching credentials

### 🎯 Core Functionality  - **Designer** - Creative portfolio with visual emphasis

- **Multi-Step Form Wizard** - Intuitive 6-step portfolio creation process  - **Architect** - Structural design with project showcases

- **Real-time Validation** - Smart form validation with visual feedback  - **Developer** - Tech-focused with GitHub integration

- **PDF Export** - Generate professional PDF portfolios instantly  - **Professional** - Corporate two-column layout

- **User Authentication** - Secure JWT-based login system  - **Business** - Executive professional template

- **Responsive Design** - Works flawlessly on all devices  - **Photographer** - Visual storytelling layout

- 📸 **Profile Image Upload** - Add your professional photo with drag-and-drop support

### 🎨 User Experience- 📝 **Multi-Step Form** - Intuitive slideshow-style form with 6 steps:

- **Animated Background** - GSAP-powered interactive dot grid  1. Personal Information (with image upload)

- **Smart Progress Tracking** - Visual indicators for completed/incomplete sections  2. Skills & Expertise

- **Skill Dropdowns** - Pre-populated skill categories with custom input option  3. Education

  - 30+ Technical Skills  4. Work Experience

  - 15+ Soft Skills  5. Projects

  - 15+ Languages  6. Review & Preview

- **Profile Image Upload** - Drag-and-drop image support with preview- 🔐 **Smart Authentication Flow** - Create portfolios freely, login only required for PDF download

- **Form Persistence** - Your data is saved as you work- 💾 **Data Persistence** - MongoDB backend for saving portfolio data

- 📄 **PDF Export** - Download your portfolio as a professional PDF with career-specific styling

### 📋 Portfolio Sections- 📱 **Responsive Design** - Works perfectly on all devices

1. **Personal Information** - Contact details, profile picture, professional summary- 🌈 **Light Mode** - Clean, minimalistic light theme design

2. **Skills & Expertise** - Technical skills, soft skills, and languages- ⚡ **Fast & Modern** - Built with React, Vite, and Express.js

3. **Education Background** - Academic qualifications (minimum 2 required)

4. **Work Experience** - Professional history (minimum 1 required)## 🚀 Tech Stack

5. **Projects** - Showcase your best work

6. **Review & Generate** - Preview and download as PDF### Frontend

- **React 18** - Modern UI library

### 🛡️ Advanced Validation- **Vite** - Next-generation frontend tooling

- ✅ Mandatory field enforcement- **Framer Motion** - Advanced animations

- ✅ Visual step completion indicators (✓/✗)- **OGL** - WebGL library for Plasma background effect

- ✅ Auto-navigation to error locations- **Zustand** - State management

- ✅ Minimum entry requirements for education and experience- **React Router** - Navigation

- ✅ Real-time error feedback- **Axios** - HTTP client

- **jsPDF & html2canvas** - PDF generation

## 🚀 Tech Stack

### Backend

### Frontend- **Node.js & Express** - Server framework

- **React 18.3.1** - UI library- **MongoDB & Mongoose** - Database

- **Vite** - Build tool & dev server- **JWT** - Authentication

- **Framer Motion** - Smooth animations- **bcryptjs** - Password hashing

- **GSAP** - Advanced animations

- **Zustand** - State management## 📋 Prerequisites

- **React Router** - Navigation

- **React Icons** - Icon libraryBefore running this application, make sure you have:

- **Axios** - HTTP client

- Node.js (v16 or higher)

### Backend- MongoDB (running locally or MongoDB Atlas account)

- **Node.js** - Runtime environment- npm or yarn package manager

- **Express.js** - Web framework

- **MongoDB** - NoSQL database## 🛠️ Installation & Setup

- **Mongoose** - MongoDB ODM

- **JWT** - Authentication### 1. Clone or Navigate to the Project

- **bcryptjs** - Password hashing

```bash

## 📦 Installationcd "/Users/turjokhan/Study EWU CSE /10th Semester/CSE412/Final Portfolio Maker"

```

### Prerequisites

- Node.js (v16 or higher)### 2. Install Dependencies

- MongoDB (v5 or higher)

- npm or yarn```bash

npm install

### 1. Clone the Repository```

```bash

git clone https://github.com/turjo410/Portfolio-Maker-.git### 3. Set Up MongoDB

cd Portfolio-Maker-

```**Option A: Local MongoDB**

- Install MongoDB on your system

### 2. Install Dependencies- Start MongoDB service:

```bash  ```bash

npm install  # macOS

```  brew services start mongodb-community

  

### 3. Environment Configuration  # Linux

Create a `.env` file in the root directory:  sudo systemctl start mongod

```env  ```

PORT=5001

MONGODB_URI=mongodb://localhost:27017/portfolio-maker**Option B: MongoDB Atlas (Cloud)**

JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

NODE_ENV=development- Create a new cluster

```- Get your connection string

- Update the `.env` file with your connection string

### 4. Start MongoDB

```bash### 4. Configure Environment Variables

# macOS (using Homebrew)

brew services start mongodb-communityThe `.env` file is already created. Update it if needed:



# Linux```env

sudo systemctl start mongodPORT=5000

MONGODB_URI=mongodb://localhost:27017/portfolio-maker

# WindowsJWT_SECRET=your_jwt_secret_key_change_this_in_production

net start MongoDBNODE_ENV=development

``````



### 5. Run the Application**⚠️ Important:** Change the `JWT_SECRET` to a strong, random string in production!

```bash

npm run dev### 5. Run the Application

```

Start both the frontend and backend concurrently:

The application will start on:

- **Frontend**: http://localhost:3000```bash

- **Backend**: http://localhost:5001npm run dev

```

## 🎮 Usage

This will start:

### Creating Your Portfolio- Frontend: http://localhost:3000

- Backend: http://localhost:5000

1. **Register/Login**

   - Visit http://localhost:3000Alternatively, you can run them separately:

   - Click "Get Started" or "Login"

   - Create a new account or sign in```bash

# Terminal 1 - Frontend

2. **Fill the Form**npm run client

   - Complete all 6 steps of the portfolio form

   - Upload a profile picture (optional)# Terminal 2 - Backend

   - Add your skills, education, and experiencenpm run server

   - Review your information```



3. **Generate PDF**## 📱 Application Flow

   - Click "Generate Portfolio" on the final step

   - Preview your portfolio### 🎯 User Flow:

   - Download as PDF1. Visit homepage with animated Plasma background

2. Click "Get Started Free" - **NO LOGIN REQUIRED**

### Validation Rules3. Select career type from 8 options (each with unique template)

- **Personal Info**: Name, email, phone, date of birth, and summary are required4. Fill multi-step form with slideshow transitions:

- **Education**: Minimum 2 entries (College + University) with all fields filled   - **Step 1:** Personal Info + Profile Image Upload

- **Experience**: Minimum 1 entry with company, position, and duration   - **Step 2:** Skills (Technical, Soft, Languages)

- **Skills**: No minimum required (but recommended!)   - **Step 3:** Education

   - **Step 4:** Work Experience

## 🎨 Design Highlights   - **Step 5:** Projects/Portfolio

   - **Step 6:** Review

### Color Theme5. Preview your portfolio with **career-specific template**

- **Primary**: Dark Blue (#1e3a8a)6. Click "Download PDF" - **LOGIN REQUIRED AT THIS POINT**

- **Secondary**: Sky Blue (#0ea5e9)7. Login or Register to download your portfolio as PDF

- **Accent**: Deep Blue (#0284c7)

- **Professional and Modern** aesthetic## 🎨 Portfolio Templates



### Key ComponentsEach career type has a uniquely designed template with custom layouts, colors, and typography:

- **DotGrid Background** - Interactive canvas-based animation

- **Smart Validation** - Green checkmarks for completed sections, red crosses for incomplete### 🎓 Student Template

- **Smooth Transitions** - Framer Motion powered page transitions- **Color Scheme:** Academic Blue

- **Responsive Layout** - Mobile-first design approach- **Layout:** Profile header with card-based sections

- **Focus:** Education and academic achievements

## 📁 Project Structure- **Style:** Clean, organized, GPA-focused



```### 👨‍🏫 Teacher Template

Portfolio-Maker/- **Color Scheme:** Professional Green

├── src/                      # Frontend source- **Layout:** Professional header with sidebar profile

│   ├── components/          # React components- **Focus:** Teaching experience and credentials

│   │   ├── DotGrid/        # Animated background- **Style:** Organized, competency-based

│   │   └── Squares/        # Alternative background

│   ├── pages/              # Page components### 🎨 Designer Template

│   │   ├── HomePage.jsx    # Landing page- **Color Scheme:** Creative Purple/Pink gradient

│   │   ├── FormPage.jsx    # Multi-step form- **Layout:** Hero section with portfolio grid

│   │   ├── PreviewPage.jsx # Portfolio preview- **Focus:** Visual projects and creative work

│   │   └── LoginPage.jsx   # Authentication- **Style:** Modern, vibrant, portfolio-centric

│   ├── store/              # Zustand stores

│   │   ├── portfolioStore.js### 🏛️ Architect Template

│   │   └── authStore.js- **Color Scheme:** Structural Gray

│   └── index.css           # Global styles- **Layout:** Minimal with numbered projects

├── server/                  # Backend source- **Focus:** Project showcases and timelines

│   ├── models/             # MongoDB models- **Style:** Bold, structured, architectural

│   │   ├── User.js

│   │   └── Portfolio.js### 💻 Developer Template

│   ├── routes/             # API routes- **Color Scheme:** Tech Dark (Dark mode)

│   │   ├── auth.js- **Layout:** Code-style headings, tech badges

│   │   └── portfolio.js- **Focus:** GitHub repos and tech stack

│   └── index.js            # Server entry point- **Style:** Terminal-inspired, modern

├── public/                  # Static assets

└── package.json            # Dependencies### 💼 Professional Template

```- **Color Scheme:** Corporate Navy Blue

- **Layout:** Two-column sidebar layout

## 🔧 Scripts- **Focus:** Work experience and achievements

- **Style:** Executive, traditional resume

```bash

npm run dev        # Start both frontend and backend### 📷 Photographer Template

npm run client     # Start frontend only (port 3000)- **Color Scheme:** Warm tones

npm run server     # Start backend only (port 5001)- **Layout:** Visual storytelling with gallery grid

```- **Focus:** Portfolio gallery and visual work

- **Style:** Minimal, artistic, image-centric

## 🌟 Features in Detail

## 🎨 Customization

### 1. Animated Dot Grid Background

- Physics-based particle system### Adding New Career Types

- Mouse interaction with inertia

- Click-to-explode effectEdit `src/pages/CareerSelectionPage.jsx` and add new career types to the `careerTypes` array:

- Smooth GSAP animations

```javascript

### 2. Smart Form Validation{

- Step-by-step validation  id: 'yourcareer',

- Visual feedback (✓ for complete, ✗ for incomplete)  name: 'Your Career',

- Auto-scroll to errors  icon: '🎯',

- Comprehensive error messages  IconComponent: YourIcon,

  description: 'Description here',

### 3. Skill Management  color: '#yourcolor',

- Dropdown menus with pre-populated skills}

- Custom skill input```

- Categorized by type (Technical, Soft, Languages)

- Tag-based display with easy removal### Customizing Colors



### 4. Image UploadEdit CSS custom properties in `src/index.css`:

- Drag-and-drop support

- File type validation (JPEG, PNG, GIF)```css

- Size limit (5MB max):root {

- Base64 encoding for database storage  --color-primary: #6366f1;

- Instant preview  --color-secondary: #f59e0b;

  /* ... more colors */

### 5. PDF Generation}

- Professional layout```

- All sections included

- Download ready format### Modifying Animations

- Print optimized

Animation settings can be adjusted in:

## 🔐 Security Features- `src/components/Plasma/Plasma.jsx` - Background animation

- Individual page components - Framer Motion animations

- Password hashing with bcryptjs

- JWT token-based authentication## 🔧 Available Scripts

- Protected API routes

- Input sanitization- `npm run dev` - Run both frontend and backend

- Secure headers- `npm run client` - Run only frontend (Vite dev server)

- `npm run server` - Run only backend (Express server)

## 🐛 Troubleshooting- `npm run build` - Build for production

- `npm run preview` - Preview production build

### MongoDB Connection Issues

```bash## 📁 Project Structure

# Check if MongoDB is running

brew services list | grep mongodb```

Final Portfolio Maker/

# Restart MongoDB├── src/                          # Frontend source code

brew services restart mongodb-community│   ├── components/              # Reusable components

```│   │   ├── Plasma/             # WebGL background component

│   │   └── ProtectedRoute.jsx  # Route protection

### Port Already in Use│   ├── pages/                   # Page components

```bash│   │   ├── HomePage.jsx        # Landing page

# Kill process on port 3000│   │   ├── LoginPage.jsx       # Login page

lsof -ti:3000 | xargs kill -9│   │   ├── RegisterPage.jsx    # Registration page

│   │   ├── CareerSelectionPage.jsx

# Kill process on port 5001│   │   ├── FormPage.jsx        # Multi-step form

lsof -ti:5001 | xargs kill -9│   │   └── PreviewPage.jsx     # Portfolio preview & PDF

```│   ├── store/                   # State management

│   │   ├── authStore.js        # Authentication state

### Dependencies Issues│   │   └── portfolioStore.js   # Portfolio data state

```bash│   ├── services/                # API services

# Clear cache and reinstall│   │   └── api.js              # API client

rm -rf node_modules package-lock.json│   ├── App.jsx                  # Main app component

npm install│   ├── main.jsx                 # Entry point

```│   └── index.css                # Global styles

├── server/                       # Backend source code

## 🤝 Contributing│   ├── models/                  # Database models

│   │   ├── User.js

Contributions are welcome! Please feel free to submit a Pull Request.│   │   └── Portfolio.js

│   ├── routes/                  # API routes

1. Fork the project│   │   ├── auth.js

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)│   │   └── portfolio.js

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)│   ├── middleware/              # Express middleware

4. Push to the branch (`git push origin feature/AmazingFeature`)│   │   └── auth.js

5. Open a Pull Request│   └── index.js                 # Server entry point

├── index.html                   # HTML template

## 📝 License├── package.json                 # Dependencies

├── vite.config.js              # Vite configuration

This project is open source and available under the [MIT License](LICENSE).└── .env                         # Environment variables

```

## 👨‍💻 Author

## 🔐 Security Notes

**Turjo Khan**

- GitHub: [@turjo410](https://github.com/turjo410)- Passwords are hashed using bcrypt

- JWT tokens for secure authentication

## 🙏 Acknowledgments- Protected routes require authentication

- CORS enabled for frontend-backend communication

- GSAP for amazing animation library- **Remember to change JWT_SECRET in production!**

- Framer Motion for smooth transitions

- MongoDB for reliable database## 🐛 Troubleshooting

- React community for excellent documentation

### MongoDB Connection Issues

---```bash

# Check if MongoDB is running

<div align="center">mongosh

  <p>Made with ❤️ for creating beautiful portfolios</p>

  <p>⭐ Star this repo if you find it helpful!</p># Or check MongoDB service status

</div>brew services list | grep mongodb

```

### Port Already in Use
```bash
# Find and kill process using port 3000 or 5000
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

### Package Installation Errors
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 📝 Future Enhancements

- [ ] Multiple portfolio templates for each career type
- [ ] Image upload for profile picture
- [ ] Social media integration
- [ ] Portfolio sharing links
- [ ] Email portfolio functionality
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Portfolio analytics

## 📄 License

This project is created for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and use this project for your needs!

## 📞 Support

For issues or questions, please check the troubleshooting section or create an issue in the repository.

---

Built with ❤️ using React, Express, and MongoDB

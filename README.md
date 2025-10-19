<div align="center">

# 🎨 Portfolio Maker

### *Transform Your Experience into a Professional Portfolio*

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/status-active-success.svg?style=for-the-badge)

[🚀 Quick Start](#-installation) • [✨ Features](#-features) • [📖 Documentation](#-usage-guide) • [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)

---

</div>

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🎥 Demo](#-demo)
- [🚀 Installation](#-installation)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [📖 Usage Guide](#-usage-guide)
- [🎨 Visual Features](#-visual-features)
- [📁 Project Structure](#-project-structure)
- [🔐 Security](#-security)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Overview

**Portfolio Maker** is a modern, full-stack web application designed to help professionals create stunning portfolios with ease. Built with React and Node.js, it features an intuitive multi-step form, real-time validation, animated UI components, and seamless PDF export functionality.

### Why Choose Portfolio Maker?

- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 🎨 **Beautiful UI** - GSAP-powered animations and smooth Framer Motion transitions
- 🔒 **Secure** - JWT authentication with bcrypt password hashing
- 📱 **Responsive** - Perfect on desktop, tablet, and mobile devices
- 💾 **Auto-Save** - Your progress is automatically saved to MongoDB
- 🎯 **User-Friendly** - Guided 6-step wizard with visual progress tracking

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 Core Features

- **Multi-Step Wizard** 📝
  - 6 intuitive steps
  - Progress tracking
  - Step validation
  - Auto-navigation to errors

- **Smart Validation** ✅
  - Real-time field checking
  - Visual indicators (✓/✗)
  - Mandatory field enforcement
  - Custom error messages

- **PDF Export** 📄
  - Professional layouts
  - One-click download
  - Print-optimized format

</td>
<td width="50%">

### 🎨 User Experience

- **Profile Images** 🖼️
  - Drag-and-drop upload
  - Preview before save
  - 5MB size limit
  - JPEG/PNG/GIF support

- **Skills Library** 🛠️
  - 30+ Technical Skills
  - 15+ Soft Skills  
  - 15+ Languages
  - Custom skill input

- **Animated UI** ✨
  - Interactive dot grid background
  - Smooth page transitions
  - Hover effects
  - Loading animations

</td>
</tr>
</table>

---

## 🎥 Demo

### Portfolio Creation Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Sign Up   │───▶│  Step 1-6   │───▶│   Review    │───▶│  Download   │
│  / Login    │    │  Form Fill  │    │  Portfolio  │    │     PDF     │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### Key Screens

1. **Home Page** - Interactive animated landing page with dot grid
2. **Form Page** - Multi-step form with slideshow transitions
3. **Preview Page** - Full portfolio preview before PDF generation
4. **Login Page** - Secure authentication with clean UI

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager

### Quick Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/turjo410/Portfolio-Maker-.git
cd Portfolio-Maker-

# 2️⃣ Install dependencies
npm install

# 3️⃣ Configure environment variables
cat > .env << EOL
PORT=5001
MONGODB_URI=mongodb://localhost:27017/portfolio-maker
JWT_SECRET=your_super_secret_jwt_key_change_in_production
NODE_ENV=development
EOL

# 4️⃣ Start MongoDB
# macOS (Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB

# 5️⃣ Run the application
npm run dev
```

### 🎉 Success!

Your application is now running:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5001](http://localhost:5001)

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | UI Framework | 18.3.1 |
| ⚡ **Vite** | Build Tool & Dev Server | 5.4.20 |
| 🎭 **Framer Motion** | Page Transitions | 11.13.5 |
| 🎬 **GSAP** | Advanced Animations | 3.12.7 |
| 🐻 **Zustand** | State Management | 5.0.2 |
| 🧭 **React Router** | Navigation | 7.1.1 |
| 🎨 **React Icons** | Icon Library | 5.4.0 |

### Backend Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| 🟢 **Node.js** | Runtime Environment | 16+ |
| 🚂 **Express** | Web Framework | 4.21.2 |
| 🍃 **MongoDB** | Database | 5+ |
| 🦦 **Mongoose** | MongoDB ODM | 8.9.4 |
| 🔐 **JWT** | Authentication | 9.0.2 |
| 🔒 **bcryptjs** | Password Hashing | 2.4.3 |

### Development Tools

- **Nodemon** - Auto-restart server on changes
- **Concurrently** - Run multiple commands simultaneously
- **Axios** - HTTP client for API calls

---

## 📖 Usage Guide

### Step-by-Step Portfolio Creation

#### 1️⃣ **Personal Information**
   - Full name (required)
   - Email address (required)
   - Phone number (required)
   - Date of birth (required)
   - Location
   - Professional summary (required)
   - Profile picture upload

#### 2️⃣ **Skills & Expertise**
   - Select from 30+ technical skills or add custom
   - Choose from 15+ soft skills
   - Add languages you speak
   - Tag-based interface for easy management

#### 3️⃣ **Education Background**
   - **Minimum 2 entries required**
   - First entry: College/High School
   - Second entry: University
   - Fields: Institution, Degree, Field, Year, Description

#### 4️⃣ **Work Experience**
   - **Minimum 1 entry required**
   - Company name
   - Position/Job title
   - Duration
   - Location
   - Responsibilities

#### 5️⃣ **Projects Portfolio**
   - Project title
   - Description
   - Technologies used
   - Project URL/GitHub link

#### 6️⃣ **Review & Generate**
   - Preview all sections
   - Edit any section
   - Validate required fields
   - Generate PDF

### 🎯 Validation Rules

| Section | Requirements |
|---------|-------------|
| Personal Info | Name, Email, Phone, DOB, Summary |
| Skills | No minimum (but recommended) |
| Education | Minimum 2 entries with all fields |
| Experience | Minimum 1 entry with Company, Position, Duration |
| Projects | Optional |

---

## 🎨 Visual Features

### Animated Components

#### 🎪 Dot Grid Background
- **Physics-based particle system** with 400+ animated dots
- **Mouse interaction** - Dots follow cursor with inertia
- **Click effects** - Explosive particle dispersion on click
- **GSAP-powered** smooth animations

#### 🎬 Page Transitions
- **Framer Motion** slideshow effects
- Smooth step navigation
- Direction-aware animations
- Custom easing functions

#### ✅ Visual Validation
- **Green checkmarks** (✓) for completed sections
- **Red crosses** (✗) for incomplete sections
- Auto-highlight error fields
- Progress bar with completion percentage

#### 🖼️ Image Upload
- Drag-and-drop interface
- Instant preview
- File type validation
- Size limit warnings
- Responsive image display

---

## 📁 Project Structure

```
Portfolio-Maker/
│
├── 📂 src/                          # Frontend source code
│   ├── 📂 components/              
│   │   ├── DotGrid/                # Animated background component
│   │   ├── Squares/                # Alternative background
│   │   └── ProtectedRoute.jsx      # Route authentication guard
│   │
│   ├── 📂 pages/                   
│   │   ├── HomePage.jsx            # Landing page with animations
│   │   ├── FormPage.jsx            # Multi-step portfolio form
│   │   ├── PreviewPage.jsx         # Portfolio preview & PDF export
│   │   ├── LoginPage.jsx           # User authentication
│   │   └── RegisterPage.jsx        # User registration
│   │
│   ├── 📂 store/                   
│   │   ├── authStore.js            # Authentication state (Zustand)
│   │   └── portfolioStore.js       # Portfolio data state (Zustand)
│   │
│   ├── 📂 services/                
│   │   └── api.js                  # Axios API client
│   │
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles & CSS variables
│
├── 📂 server/                       # Backend source code
│   ├── 📂 models/                  
│   │   ├── User.js                 # User schema (Mongoose)
│   │   └── Portfolio.js            # Portfolio schema (Mongoose)
│   │
│   ├── 📂 routes/                  
│   │   ├── auth.js                 # Authentication endpoints
│   │   └── portfolio.js            # Portfolio CRUD endpoints
│   │
│   ├── 📂 middleware/              
│   │   └── auth.js                 # JWT verification middleware
│   │
│   └── index.js                    # Express server setup
│
├── 📄 package.json                  # Dependencies & scripts
├── 📄 vite.config.js               # Vite configuration
├── 📄 .env                         # Environment variables
└── 📄 README.md                    # You are here!
```

---

## �� Security

### Authentication & Authorization

- **JWT Tokens** - Secure stateless authentication
- **bcrypt Hashing** - Password encryption with salt rounds
- **Protected Routes** - Frontend and backend route guards
- **Token Expiration** - Automatic session timeout
- **CORS Configuration** - Cross-origin request security

### Best Practices

```javascript
// ✅ Passwords are hashed before storing
const hashedPassword = await bcrypt.hash(password, 10);

// ✅ JWT tokens are verified on protected routes
const token = jwt.verify(token, process.env.JWT_SECRET);

// ✅ Sensitive data is never exposed
const user = await User.findById(id).select('-password');
```

### Environment Variables

⚠️ **Important**: Never commit your `.env` file to version control!

```env
# Required environment variables
PORT=5001
MONGODB_URI=mongodb://localhost:27017/portfolio-maker
JWT_SECRET=change_this_to_a_long_random_string_in_production
NODE_ENV=development
```

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m '✨ Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` file for more information.

This means you can:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

---

## 👨‍💻 Author

<div align="center">

### Turjo Khan

[![GitHub](https://img.shields.io/badge/GitHub-turjo410-181717?style=for-the-badge&logo=github)](https://github.com/turjo410)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:turjokhan@example.com)

</div>

---

## 🙏 Acknowledgments

Special thanks to:

- **GSAP Team** - For the incredible animation library
- **Framer Motion** - For smooth, beautiful transitions
- **MongoDB** - For the reliable database solution
- **React Community** - For excellent documentation and support
- **Vite Team** - For the blazing-fast build tool

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green?style=for-the-badge)

**[⬆ Back to Top](#-portfolio-maker)**

---

**Portfolio Maker** © 2025 by Turjo Khan

</div>

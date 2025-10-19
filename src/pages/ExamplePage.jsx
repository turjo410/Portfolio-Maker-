import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { getTemplateByCareerType } from '../components/PortfolioTemplates/PortfolioTemplates';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ExamplePage.css';

const ExamplePage = () => {
  const navigate = useNavigate();
  const portfolioRef = useRef(null);

  // Dummy portfolio data showcasing a Developer template
  const exampleData = {
    personalInfo: {
      fullName: 'Shahriar Khan',
      email: 'shahriar.khan@example.com',
      phone: '+880 1712 345678',
      dateOfBirth: '1998-05-15',
      location: 'Dhaka, Bangladesh',
      website: 'https://shahriarkhan.dev',
      linkedin: 'https://linkedin.com/in/shahriarkhan',
      github: 'https://github.com/shahriarkhan',
      profileImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%233b82f6" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="80" fill="white"%3ESK%3C/text%3E%3C/svg%3E',
      summary: 'Passionate Full-Stack Developer with 4+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Love creating elegant solutions to complex problems and constantly learning new technologies.'
    },
    skills: {
      technical: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Next.js', 'Express.js'],
      soft: ['Problem Solving', 'Team Leadership', 'Agile/Scrum', 'Communication', 'Project Management'],
      languages: ['Bengali (Native)', 'English (Fluent)', 'Hindi (Intermediate)'],
      tools: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira']
    },
    education: [
      {
        institution: 'East West University',
        degree: 'Bachelor of Science',
        field: 'Computer Science & Engineering',
        year: '2016 - 2020',
        description: 'CGPA: 3.85/4.00. Dean\'s List for 6 semesters. Final project: AI-powered recruitment platform using Machine Learning.'
      },
      {
        institution: 'Notre Dame College',
        degree: 'Higher Secondary Certificate',
        field: 'Science',
        year: '2013 - 2015',
        description: 'GPA: 5.00/5.00. Won National Science Olympiad Gold Medal.'
      }
    ],
    workExperience: [
      {
        company: 'TechCorp Bangladesh',
        position: 'Senior Software Engineer',
        location: 'Dhaka, Bangladesh',
        duration: 'Jan 2022 - Present',
        description: 'Leading a team of 5 developers building e-commerce platforms. Architected microservices infrastructure reducing server costs by 40%. Implemented CI/CD pipelines increasing deployment frequency by 300%.'
      },
      {
        company: 'Digital Solutions Ltd',
        position: 'Full Stack Developer',
        location: 'Dhaka, Bangladesh',
        duration: 'Jun 2020 - Dec 2021',
        description: 'Developed 15+ client projects using MERN stack. Built real-time collaboration tools serving 10,000+ daily active users. Mentored 3 junior developers.'
      },
      {
        company: 'StartupHub',
        position: 'Software Developer Intern',
        location: 'Dhaka, Bangladesh',
        duration: 'Jan 2020 - May 2020',
        description: 'Contributed to mobile app development using React Native. Implemented payment gateway integration. Fixed 50+ bugs and improved app performance by 25%.'
      }
    ],
    projects: [
      {
        name: 'E-Commerce Platform',
        link: 'https://github.com/shahriarkhan/ecommerce-platform',
        description: 'Full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard. Built with Next.js, Node.js, MongoDB, and Stripe. Handles 100K+ monthly transactions.'
      },
      {
        name: 'Real-Time Chat Application',
        link: 'https://github.com/shahriarkhan/realtime-chat',
        description: 'WebSocket-based chat application with group chats, file sharing, and video calls. Technologies: React, Socket.io, WebRTC, Redis. Supports 1000+ concurrent users.'
      },
      {
        name: 'Portfolio Maker',
        link: 'https://github.com/shahriarkhan/portfolio-maker',
        description: 'Web application for creating professional portfolios with multiple templates and PDF export. Built with React, Express, MongoDB. Featured on Product Hunt with 500+ users.'
      },
      {
        name: 'Task Management System',
        link: 'https://github.com/shahriarkhan/task-manager',
        description: 'Kanban-style task management tool with drag-and-drop, team collaboration, and time tracking. Tech stack: React, TypeScript, Node.js, PostgreSQL.'
      }
    ]
  };

  const handleDownloadPDF = async () => {
    if (!portfolioRef.current) return;

    try {
      const canvas = await html2canvas(portfolioRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Example_Portfolio_Shahriar_Khan.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <div className="example-page">
      <motion.div
        className="example-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-left">
          <button className="btn-back" onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Home
          </button>
          <h1 className="example-title">Example Portfolio - Developer Template</h1>
        </div>
        <div className="header-actions">
          <button className="btn-download-example" onClick={handleDownloadPDF}>
            <FaDownload /> Download This Example
          </button>
          <button className="btn-create-yours" onClick={() => navigate('/career-selection')}>
            Create Your Own
          </button>
        </div>
      </motion.div>

      <motion.div
        className="example-info-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          This is an example portfolio using the <strong>Developer Template</strong>. 
          You can create your own portfolio with any of our 8 career-specific templates!
        </p>
      </motion.div>

      <motion.div
        className="example-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div ref={portfolioRef} className="portfolio-example">
          {getTemplateByCareerType('developer', exampleData)}
        </div>
      </motion.div>

      <motion.div
        className="example-footer-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Ready to Create Your Own Portfolio?</h2>
        <p>Choose from 8 unique templates designed for different careers</p>
        <button className="btn-start-now" onClick={() => navigate('/career-selection')}>
          Get Started Now - It's Free!
        </button>
      </motion.div>
    </div>
  );
};

export default ExamplePage;

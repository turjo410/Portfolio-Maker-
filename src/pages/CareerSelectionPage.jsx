import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Plasma from '../components/Plasma/Plasma';
import { usePortfolioStore } from '../store/portfolioStore';
import { useAuthStore } from '../store/authStore';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaPalette,
  FaBuilding,
  FaCode,
  FaBriefcase,
  FaUserTie,
  FaCamera,
  FaHome,
} from 'react-icons/fa';
import './CareerSelectionPage.css';

const careerTypes = [
  {
    id: 'student',
    name: 'Student',
    icon: '🎓',
    IconComponent: FaGraduationCap,
    description: 'Perfect for students showcasing academic achievements and projects',
    color: '#6366f1',
  },
  {
    id: 'teacher',
    name: 'Teacher/Educator',
    icon: '👨‍🏫',
    IconComponent: FaChalkboardTeacher,
    description: 'Ideal for educators highlighting teaching experience and credentials',
    color: '#10b981',
  },
  {
    id: 'designer',
    name: 'Designer',
    icon: '🎨',
    IconComponent: FaPalette,
    description: 'Showcase your creative work and design portfolio',
    color: '#ec4899',
  },
  {
    id: 'architect',
    name: 'Architect',
    icon: '🏛️',
    IconComponent: FaBuilding,
    description: 'Display architectural projects and professional achievements',
    color: '#f59e0b',
  },
  {
    id: 'developer',
    name: 'Developer',
    icon: '💻',
    IconComponent: FaCode,
    description: 'Highlight coding projects and technical skills',
    color: '#3b82f6',
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: '💼',
    IconComponent: FaBriefcase,
    description: 'General professional portfolio for any industry',
    color: '#8b5cf6',
  },
  {
    id: 'business',
    name: 'Business',
    icon: '👔',
    IconComponent: FaUserTie,
    description: 'Business-focused portfolio for executives and entrepreneurs',
    color: '#06b6d4',
  },
  {
    id: 'photographer',
    name: 'Photographer',
    icon: '📸',
    IconComponent: FaCamera,
    description: 'Visual portfolio for photographers and visual artists',
    color: '#ef4444',
  },
];

const CareerSelectionPage = () => {
  const navigate = useNavigate();
  const setCareerType = usePortfolioStore((state) => state.setCareerType);
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [selectedCareer, setSelectedCareer] = useState('');

  const handleCareerSelect = (careerId) => {
    setSelectedCareer(careerId);
  };

  const handleContinue = () => {
    if (selectedCareer) {
      setCareerType(selectedCareer);
      navigate('/create-portfolio');
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="career-selection-page">
      <div className="career-background">
        <Plasma
          color="#a78bfa"
          speed={0.5}
          direction="forward"
          scale={1.3}
          opacity={0.3}
          mouseInteractive={false}
        />
      </div>

      {isAuthenticated && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}

      {!isAuthenticated && (
        <button className="logout-button" onClick={() => navigate('/')}>
          <FaHome /> Home
        </button>
      )}

      <div className="career-container">
        <div className="career-header">
          <motion.h1
            className="career-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Career Path
          </motion.h1>
          <motion.p
            className="career-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select the career type that best describes you. We'll customize your portfolio template accordingly.
          </motion.p>
        </div>

        <div className="career-grid">
          {careerTypes.map((career) => (
            <motion.div
              key={career.id}
              className={`career-card ${selectedCareer === career.id ? 'selected' : ''}`}
              onClick={() => handleCareerSelect(career.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="career-icon" style={{ color: career.color }}>
                <career.IconComponent />
              </div>
              <h3 className="career-name">{career.name}</h3>
              <p className="career-description">{career.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="career-actions">
          <button
            className="btn-career btn-career-primary"
            onClick={handleContinue}
            disabled={!selectedCareer}
          >
            Continue to Portfolio
          </button>
          <button className="btn-career btn-career-secondary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerSelectionPage;

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '../store/portfolioStore';
import { useAuthStore } from '../store/authStore';
import { FaDownload, FaEdit } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { getTemplateByCareerType } from '../components/PortfolioTemplates/PortfolioTemplates';
import './PreviewPage.css';

const PreviewPage = () => {
  const navigate = useNavigate();
  const portfolioData = usePortfolioStore((state) => state.portfolioData);
  const careerType = usePortfolioStore((state) => state.careerType);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const portfolioRef = useRef(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleDownloadPDF = async () => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

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
      pdf.save(`${portfolioData.personalInfo.fullName}_Portfolio.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  const handleEdit = () => {
    navigate('/create-portfolio');
  };

  const handleLoginRedirect = () => {
    navigate('/login', { state: { from: '/preview' } });
  };

  const handleRegisterRedirect = () => {
    navigate('/register', { state: { from: '/preview' } });
  };

  return (
    <div className="preview-page">
      <motion.div
        className="preview-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="preview-title">Portfolio Preview</h1>
        <div className="preview-actions">
          <button className="btn-edit" onClick={handleEdit}>
            <FaEdit /> Edit
          </button>
          <button className="btn-download" onClick={handleDownloadPDF}>
            <FaDownload /> Download PDF
          </button>
        </div>
      </motion.div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <motion.div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="modal-title">Login Required</h2>
            <p className="modal-text">
              Please login or create an account to download your portfolio as PDF.
            </p>
            <div className="modal-actions">
              <button className="btn-modal-primary" onClick={handleLoginRedirect}>
                Login
              </button>
              <button className="btn-modal-secondary" onClick={handleRegisterRedirect}>
                Create Account
              </button>
            </div>
            <button className="btn-modal-cancel" onClick={() => setShowLoginModal(false)}>
              Cancel
            </button>
          </motion.div>
        </div>
      )}

      <motion.div
        className="preview-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div ref={portfolioRef} className="portfolio-preview">
          {getTemplateByCareerType(careerType, portfolioData)}
        </div>
      </motion.div>
    </div>
  );
};

export default PreviewPage;

import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Squares from '../components/Squares/Squares';
import { useAuthStore } from '../store/authStore';
import { 
  FaRocket, 
  FaPalette, 
  FaDownload, 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaCode,
  FaCamera,
  FaBriefcase,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleGetStarted = () => {
    navigate('/career-selection');
  };

  return (
    <div className="home-page">
      <div className="squares-background">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="rgba(30, 58, 138, 0.2)"
          squareSize={50}
          hoverFillColor="rgba(59, 130, 246, 0.1)"
        />
      </div>

      <header className="home-header">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          PortfolioMaker
        </motion.div>

        <motion.div
          className="auth-buttons"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          ) : (
            <Link to="/career-selection" className="btn btn-primary">
              Dashboard
            </Link>
          )}
        </motion.div>
      </header>

      <div className="home-content">
        <section className="hero-section">
          <h1 className="hero-title">
            Create Your Perfect Portfolio
          </h1>
          <p className="hero-subtitle">
            Professional portfolio templates for every career. 
            Build, customize, and download your portfolio in minutes.
          </p>

          <div className="hero-cta">
            <button onClick={handleGetStarted} className="btn btn-primary btn-large">
              Get Started Free
            </button>
            <button onClick={() => navigate('/example')} className="btn btn-secondary btn-large">
              View Examples
            </button>
          </div>
        </section>

        <section className="features-section">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose PortfolioMaker?
          </motion.h2>
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3 className="feature-title">Quick & Easy</h3>
              <p className="feature-description">
                Create your professional portfolio in just a few minutes with our intuitive step-by-step process.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature-icon">
                <FaPalette />
              </div>
              <h3 className="feature-title">8 Unique Templates</h3>
              <p className="feature-description">
                Career-specific designs for students, teachers, designers, architects, developers, and more.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature-icon">
                <FaDownload />
              </div>
              <h3 className="feature-title">Export to PDF</h3>
              <p className="feature-description">
                Download your portfolio as a professional PDF ready to share with employers and clients.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="feature-icon">
                <FaCamera />
              </div>
              <h3 className="feature-title">Profile Pictures</h3>
              <p className="feature-description">
                Upload your professional photo with instant preview and easy management.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h3 className="feature-title">No Login Required</h3>
              <p className="feature-description">
                Start creating immediately. Login only when you're ready to download your portfolio.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="feature-icon">
                <FaBriefcase />
              </div>
              <h3 className="feature-title">Professional Results</h3>
              <p className="feature-description">
                Impress employers with polished, career-appropriate portfolio designs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <div className="steps-container">
            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="step-number">1</div>
              <h3 className="step-title">Choose Your Career</h3>
              <p className="step-description">
                Select from 8 career types to get a template designed specifically for your field.
              </p>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="step-number">2</div>
              <h3 className="step-title">Fill Your Information</h3>
              <p className="step-description">
                Add your details, upload photo, skills, education, experience, and projects step by step.
              </p>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="step-number">3</div>
              <h3 className="step-title">Preview & Customize</h3>
              <p className="step-description">
                See your portfolio come to life with your chosen template and make any adjustments.
              </p>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="step-number">4</div>
              <h3 className="step-title">Download & Share</h3>
              <p className="step-description">
                Export your professional portfolio as PDF and share it with the world!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Templates Showcase */}
        <section className="templates-section">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Career-Specific Templates
          </motion.h2>
          <div className="templates-grid">
            {[
              { icon: <FaUserGraduate />, name: 'Student', color: '#3b82f6' },
              { icon: <FaChalkboardTeacher />, name: 'Teacher', color: '#10b981' },
              { icon: <FaPalette />, name: 'Designer', color: '#a855f7' },
              { icon: <FaBriefcase />, name: 'Architect', color: '#64748b' },
              { icon: <FaCode />, name: 'Developer', color: '#3b82f6' },
              { icon: <FaBriefcase />, name: 'Professional', color: '#1e40af' },
              { icon: <FaBriefcase />, name: 'Business', color: '#1e3a8a' },
              { icon: <FaCamera />, name: 'Photographer', color: '#0f172a' },
            ].map((template, index) => (
              <motion.div
                key={template.name}
                className="template-card"
                style={{ '--template-color': template.color }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="template-icon">{template.icon}</div>
                <h3 className="template-name">{template.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="stats-section">
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="stat-card">
              <div className="stat-number">8</div>
              <div className="stat-label">Unique Templates</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5</div>
              <div className="stat-label">Minutes Average</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free to Start</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Users</div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Users Say
          </motion.h2>
          <div className="testimonials-grid">
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="testimonial-text">
                "The student template helped me create a professional portfolio for my first internship application. Got the job!"
              </p>
              <div className="testimonial-author">
                <strong>Ahmed Hassan</strong>
                <span>Computer Science Student</span>
              </div>
            </motion.div>

            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="testimonial-stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="testimonial-text">
                "As a designer, I loved how the creative template showcased my work. The PDF export is flawless!"
              </p>
              <div className="testimonial-author">
                <strong>Nadia Rahman</strong>
                <span>Graphic Designer</span>
              </div>
            </motion.div>

            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="testimonial-stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="testimonial-text">
                "Quick, professional, and free! Created my portfolio in under 10 minutes. Highly recommended."
              </p>
              <div className="testimonial-author">
                <strong>Rakib Khan</strong>
                <span>Software Developer</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to Create Your Portfolio?</h2>
            <p className="cta-subtitle">Join thousands of professionals who've already created their perfect portfolio</p>
            <button onClick={handleGetStarted} className="btn btn-primary btn-large">
              Get Started Now - It's Free!
            </button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="home-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">PortfolioMaker</h3>
              <p className="footer-description">
                Create professional portfolios with career-specific templates in minutes.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/career-selection">Get Started</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <div className="footer-social">
                <a href="#" className="social-icon"><FaGithub /></a>
                <a href="#" className="social-icon"><FaLinkedin /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 PortfolioMaker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '../store/portfolioStore';
import { useAuthStore } from '../store/authStore';
import { FaArrowLeft, FaArrowRight, FaCheck, FaPlus, FaTimes, FaHome, FaExclamationTriangle } from 'react-icons/fa';
import './FormPage.css';

const steps = [
  { id: 0, label: 'Personal Info', name: 'personalInfo' },
  { id: 1, label: 'Skills', name: 'skills' },
  { id: 2, label: 'Education', name: 'education' },
  { id: 3, label: 'Experience', name: 'experience' },
  { id: 4, label: 'Projects', name: 'projects' },
  { id: 5, label: 'Review', name: 'review' },
];

const FormPage = () => {
  const navigate = useNavigate();
  const portfolioData = usePortfolioStore((state) => state.portfolioData);
  const currentStep = usePortfolioStore((state) => state.currentStep);
  const setCurrentStep = usePortfolioStore((state) => state.setCurrentStep);
  const updatePersonalInfo = usePortfolioStore((state) => state.updatePersonalInfo);
  const updateSkills = usePortfolioStore((state) => state.updateSkills);
  const addEducation = usePortfolioStore((state) => state.addEducation);
  const updateEducation = usePortfolioStore((state) => state.updateEducation);
  const removeEducation = usePortfolioStore((state) => state.removeEducation);
  const addWorkExperience = usePortfolioStore((state) => state.addWorkExperience);
  const updateWorkExperience = usePortfolioStore((state) => state.updateWorkExperience);
  const removeWorkExperience = usePortfolioStore((state) => state.removeWorkExperience);
  const addProject = usePortfolioStore((state) => state.addProject);
  const updateProject = usePortfolioStore((state) => state.updateProject);
  const removeProject = usePortfolioStore((state) => state.removeProject);
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const careerType = usePortfolioStore((state) => state.careerType);

  const [skillInput, setSkillInput] = useState('');
  const [technicalSkillInput, setTechnicalSkillInput] = useState('');
  const [softSkillInput, setSoftSkillInput] = useState('');
  const [languageInput, setLanguageInput] = useState('');
  const [direction, setDirection] = useState(1);
  const [imagePreview, setImagePreview] = useState(portfolioData.personalInfo.profileImage || null);
  const [validationErrors, setValidationErrors] = useState([]);

  // Function to check if a specific step is completed
  const isStepCompleted = (stepId) => {
    switch (stepId) {
      case 0: // Personal Info
        return (
          portfolioData.personalInfo.fullName?.trim() &&
          portfolioData.personalInfo.email?.trim() &&
          portfolioData.personalInfo.phone?.trim() &&
          portfolioData.personalInfo.dateOfBirth?.trim() &&
          portfolioData.personalInfo.summary?.trim()
        );
      
      case 1: // Skills - No mandatory requirements, so always valid
        return true;
      
      case 2: // Education
        if (!portfolioData.education || portfolioData.education.length < 2) {
          return false;
        }
        return portfolioData.education.every(edu => 
          edu.institution?.trim() && 
          edu.degree?.trim() && 
          edu.field?.trim() && 
          edu.year?.trim()
        );
      
      case 3: // Work Experience
        if (!portfolioData.workExperience || portfolioData.workExperience.length < 1) {
          return false;
        }
        return portfolioData.workExperience.every(exp => 
          exp.company?.trim() && 
          exp.position?.trim() && 
          exp.duration?.trim()
        );
      
      case 4: // Projects - No mandatory requirements
        return true;
      
      case 5: // Review - No mandatory requirements
        return true;
      
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Validation function
  const validateForm = () => {
    const errors = [];

    // Validate Personal Info
    if (!portfolioData.personalInfo.fullName?.trim()) {
      errors.push({ step: 0, field: 'Full Name', message: 'Full Name is required' });
    }
    if (!portfolioData.personalInfo.email?.trim()) {
      errors.push({ step: 0, field: 'Email', message: 'Email is required' });
    }
    if (!portfolioData.personalInfo.phone?.trim()) {
      errors.push({ step: 0, field: 'Phone', message: 'Phone number is required' });
    }
    if (!portfolioData.personalInfo.dateOfBirth?.trim()) {
      errors.push({ step: 0, field: 'Date of Birth', message: 'Date of Birth is required' });
    }
    if (!portfolioData.personalInfo.summary?.trim()) {
      errors.push({ step: 0, field: 'Summary', message: 'Professional Summary is required' });
    }

    // Validate Education - Must have at least 2 entries (College and University)
    if (!portfolioData.education || portfolioData.education.length < 2) {
      errors.push({ 
        step: 2, 
        field: 'Education', 
        message: 'At least 2 education entries required (College and University)' 
      });
    } else {
      portfolioData.education.forEach((edu, index) => {
        if (!edu.institution?.trim() || !edu.degree?.trim() || !edu.field?.trim() || !edu.year?.trim()) {
          errors.push({ 
            step: 2, 
            field: `Education ${index + 1}`, 
            message: `Education ${index + 1}: All fields are required` 
          });
        }
      });
    }

    // Validate Work Experience - At least 1 required
    if (!portfolioData.workExperience || portfolioData.workExperience.length < 1) {
      errors.push({ 
        step: 3, 
        field: 'Work Experience', 
        message: 'At least 1 work experience is required' 
      });
    } else {
      portfolioData.workExperience.forEach((exp, index) => {
        if (!exp.company?.trim() || !exp.position?.trim() || !exp.duration?.trim()) {
          errors.push({ 
            step: 3, 
            field: `Experience ${index + 1}`, 
            message: `Experience ${index + 1}: Company, Position, and Duration are required` 
          });
        }
      });
    }

    return errors;
  };

  const handleNext = () => {
    // If we're on the last step (Review), validate everything before generating
    if (currentStep === steps.length - 1) {
      const errors = validateForm();
      
      if (errors.length > 0) {
        setValidationErrors(errors);
        
        // Show alert with all errors
        const errorMessages = errors.map(err => `• ${err.message}`).join('\n');
        alert(`Please fix the following errors:\n\n${errorMessages}`);
        
        // Navigate to the first step with errors
        const firstErrorStep = errors[0].step;
        setDirection(firstErrorStep > currentStep ? 1 : -1);
        setCurrentStep(firstErrorStep);
        return;
      }
      
      // Clear any previous errors
      setValidationErrors([]);
      navigate('/preview');
    } else {
      if (currentStep < steps.length - 1) {
        setDirection(1);
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId) => {
    setDirection(stepId > currentStep ? 1 : -1);
    setCurrentStep(stepId);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    navigate('/');
  };

  const addSkill = (category, input, clearInput) => {
    if (input.trim()) {
      const currentSkills = portfolioData.skills[category] || [];
      updateSkills({ [category]: [...currentSkills, input.trim()] });
      clearInput('');
    }
  };

  const removeSkill = (category, index) => {
    const currentSkills = portfolioData.skills[category];
    updateSkills({ [category]: currentSkills.filter((_, i) => i !== index) });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPEG, PNG, or GIF)');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        updatePersonalInfo({ profileImage: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    updatePersonalInfo({ profileImage: null });
  };

  const renderPersonalInfoForm = () => (
    <div className="form-slide">
      <div className="slide-header">
        <h2 className="slide-title">Personal Information</h2>
        <p className="slide-subtitle">Let's start with your basic information</p>
      </div>

      <div className="form-section">
        {/* Profile Image Upload */}
        <div className="image-upload-section">
          <label className="form-label">Profile Picture</label>
          <div className="image-upload-container">
            {imagePreview ? (
              <div className="image-preview-wrapper">
                <img src={imagePreview} alt="Profile" className="image-preview" />
                <button
                  type="button"
                  className="btn-remove-image"
                  onClick={removeImage}
                  title="Remove image"
                >
                  <FaTimes />
                </button>
              </div>
            ) : (
              <label className="image-upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="image-input"
                />
                <div className="upload-placeholder">
                  <FaPlus size={40} />
                  <p>Upload Profile Picture</p>
                  <span className="upload-hint">JPEG, PNG, GIF (Max 5MB)</span>
                </div>
              </label>
            )}
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Shahriar Khan"
              value={portfolioData.personalInfo.fullName}
              onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="shahriar.khan@example.com"
              value={portfolioData.personalInfo.email}
              onChange={(e) => updatePersonalInfo({ email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Phone <span className="required">*</span>
            </label>
            <input
              type="tel"
              className="form-input"
              placeholder="+880 1712 345678"
              value={portfolioData.personalInfo.phone}
              onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Date of Birth <span className="required">*</span>
            </label>
            <input
              type="date"
              className="form-input"
              value={portfolioData.personalInfo.dateOfBirth || ''}
              onChange={(e) => updatePersonalInfo({ dateOfBirth: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-input"
              placeholder="Dhaka, Bangladesh"
              value={portfolioData.personalInfo.location}
              onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Website</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://yourwebsite.com"
              value={portfolioData.personalInfo.website}
              onChange={(e) => updatePersonalInfo({ website: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">LinkedIn</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://linkedin.com/in/yourprofile"
              value={portfolioData.personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
            />
          </div>

          <div className="form-group full-width">
            <label className="form-label">
              Professional Summary <span className="required">*</span>
            </label>
            <textarea
              className="form-textarea"
              placeholder="Write a brief summary about yourself..."
              value={portfolioData.personalInfo.summary}
              onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkillsForm = () => {
    const technicalSkills = [
      'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'Angular', 'Vue.js',
      'PHP', 'Ruby', 'Swift', 'Kotlin', 'TypeScript', 'SQL', 'MongoDB', 'PostgreSQL',
      'HTML/CSS', 'Git', 'Docker', 'AWS', 'Azure', 'Machine Learning', 'Data Analysis',
      'UI/UX Design', 'Photoshop', 'Illustrator', 'Figma', 'AutoCAD', 'Revit', '3D Modeling'
    ];

    const softSkills = [
      'Leadership', 'Communication', 'Problem Solving', 'Team Work', 'Time Management',
      'Critical Thinking', 'Creativity', 'Adaptability', 'Collaboration', 'Presentation',
      'Project Management', 'Strategic Planning', 'Decision Making', 'Negotiation', 'Mentoring'
    ];

    const languages = [
      'English', 'Bengali', 'Hindi', 'Spanish', 'French', 'German', 'Chinese', 'Japanese',
      'Arabic', 'Russian', 'Portuguese', 'Italian', 'Korean', 'Dutch', 'Turkish'
    ];

    return (
      <div className="form-slide">
        <div className="slide-header">
          <h2 className="slide-title">Skills & Expertise</h2>
          <p className="slide-subtitle">Showcase your abilities and competencies</p>
        </div>

        <div className="form-section">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skill-input-container">
            <select
              className="form-input"
              value=""
              onChange={(e) => {
                if (e.target.value) {
                  addSkill('technical', e.target.value, () => {});
                }
              }}
            >
              <option value="">Select a skill...</option>
              {technicalSkills.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
          <div className="skill-input-container" style={{ marginTop: '10px' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Or type custom skill..."
              value={technicalSkillInput}
              onChange={(e) => setTechnicalSkillInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill('technical', technicalSkillInput, setTechnicalSkillInput))}
            />
            <button className="add-button" onClick={() => addSkill('technical', technicalSkillInput, setTechnicalSkillInput)}>
              <FaPlus /> Add
            </button>
          </div>
          <div className="skill-tags">
            {portfolioData.skills.technical?.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <FaTimes className="remove-tag" onClick={() => removeSkill('technical', index)} />
              </span>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Soft Skills</h3>
          <div className="skill-input-container">
            <select
              className="form-input"
              value=""
              onChange={(e) => {
                if (e.target.value) {
                  addSkill('soft', e.target.value, () => {});
                }
              }}
            >
              <option value="">Select a skill...</option>
              {softSkills.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
          </div>
          <div className="skill-input-container" style={{ marginTop: '10px' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Or type custom skill..."
              value={softSkillInput}
              onChange={(e) => setSoftSkillInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill('soft', softSkillInput, setSoftSkillInput))}
            />
            <button className="add-button" onClick={() => addSkill('soft', softSkillInput, setSoftSkillInput)}>
              <FaPlus /> Add
            </button>
          </div>
          <div className="skill-tags">
            {portfolioData.skills.soft?.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <FaTimes className="remove-tag" onClick={() => removeSkill('soft', index)} />
              </span>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h3 className="section-title">Languages</h3>
          <div className="skill-input-container">
            <select
              className="form-input"
              value=""
              onChange={(e) => {
                if (e.target.value) {
                  addSkill('languages', e.target.value, () => {});
                }
              }}
            >
              <option value="">Select a language...</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
          <div className="skill-input-container" style={{ marginTop: '10px' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Or type custom language..."
              value={languageInput}
              onChange={(e) => setLanguageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill('languages', languageInput, setLanguageInput))}
            />
            <button className="add-button" onClick={() => addSkill('languages', languageInput, setLanguageInput)}>
              <FaPlus /> Add
            </button>
          </div>
          <div className="skill-tags">
            {portfolioData.skills.languages?.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <FaTimes className="remove-tag" onClick={() => removeSkill('languages', index)} />
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderEducationForm = () => (
    <div className="form-slide">
      <div className="slide-header">
        <h2 className="slide-title">Education Background</h2>
        <p className="slide-subtitle">Add your academic qualifications (Minimum 2: College & University) <span className="required">*</span></p>
      </div>

      {portfolioData.education?.map((edu, index) => (
        <div key={index} className="dynamic-section">
          <div className="dynamic-section-header">
            <h3 className="section-title">
              Education {index + 1} 
              {index === 0 && <span className="badge-label"> (College)</span>}
              {index === 1 && <span className="badge-label"> (University)</span>}
              <span className="required"> *</span>
            </h3>
            {portfolioData.education.length > 2 && (
              <button className="remove-section-button" onClick={() => removeEducation(index)}>
                Remove
              </button>
            )}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Institution <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder={index === 0 ? "College Name" : "University Name"}
                value={edu.institution}
                onChange={(e) =>
                  updateEducation(index, { ...edu, institution: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Degree <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Bachelor of Science"
                value={edu.degree}
                onChange={(e) => updateEducation(index, { ...edu, degree: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Field of Study <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Computer Science"
                value={edu.field}
                onChange={(e) => updateEducation(index, { ...edu, field: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Year <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="2020 - 2024"
                value={edu.year}
                onChange={(e) => updateEducation(index, { ...edu, year: e.target.value })}
                required
              />
            </div>

            <div className="form-group full-width">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                placeholder="Achievements, GPA, relevant coursework..."
                value={edu.description}
                onChange={(e) => updateEducation(index, { ...edu, description: e.target.value })}
              />
            </div>
          </div>
        </div>
      ))}

      <button
        className="add-more-button"
        onClick={() =>
          addEducation({
            institution: '',
            degree: '',
            field: '',
            year: '',
            description: '',
          })
        }
      >
        <FaPlus /> Add More Education
      </button>
    </div>
  );

  const renderExperienceForm = () => (
    <div className="form-slide">
      <div className="slide-header">
        <h2 className="slide-title">Work Experience</h2>
        <p className="slide-subtitle">Detail your professional experience (Minimum 1 required) <span className="required">*</span></p>
      </div>

      {portfolioData.workExperience?.map((exp, index) => (
        <div key={index} className="dynamic-section">
          <div className="dynamic-section-header">
            <h3 className="section-title">
              Experience {index + 1} <span className="required">*</span>
            </h3>
            {portfolioData.workExperience.length > 1 && (
              <button className="remove-section-button" onClick={() => removeWorkExperience(index)}>
                Remove
              </button>
            )}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Company <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Company Name"
                value={exp.company}
                onChange={(e) =>
                  updateWorkExperience(index, { ...exp, company: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Position <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Job Title"
                value={exp.position}
                onChange={(e) =>
                  updateWorkExperience(index, { ...exp, position: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-input"
                placeholder="City, Country"
                value={exp.location}
                onChange={(e) =>
                  updateWorkExperience(index, { ...exp, location: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Duration <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Jan 2020 - Present"
                value={exp.duration}
                onChange={(e) =>
                  updateWorkExperience(index, { ...exp, duration: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group full-width">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                placeholder="Responsibilities, achievements, technologies used..."
                value={exp.description}
                onChange={(e) =>
                  updateWorkExperience(index, { ...exp, description: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      ))}

      <button
        className="add-more-button"
        onClick={() =>
          addWorkExperience({
            company: '',
            position: '',
            location: '',
            duration: '',
            description: '',
          })
        }
      >
        <FaPlus /> Add More Experience
      </button>
    </div>
  );

  const renderProjectsForm = () => (
    <div className="form-slide">
      <div className="slide-header">
        <h2 className="slide-title">Projects & Publications</h2>
        <p className="slide-subtitle">
          Showcase your work <span className="optional-badge">Optional</span>
        </p>
      </div>

      {portfolioData.projects?.map((project, index) => (
        <div key={index} className="dynamic-section">
          <div className="dynamic-section-header">
            <h3 className="section-title">Project {index + 1}</h3>
            <button className="remove-section-button" onClick={() => removeProject(index)}>
              Remove
            </button>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Project Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Project Title"
                value={project.name}
                onChange={(e) => updateProject(index, { ...project, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Link</label>
              <input
                type="url"
                className="form-input"
                placeholder="https://project-link.com"
                value={project.link}
                onChange={(e) => updateProject(index, { ...project, link: e.target.value })}
              />
            </div>

            <div className="form-group full-width">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                placeholder="Project details, technologies, achievements..."
                value={project.description}
                onChange={(e) =>
                  updateProject(index, { ...project, description: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      ))}

      <button
        className="add-more-button"
        onClick={() =>
          addProject({
            name: '',
            link: '',
            description: '',
          })
        }
      >
        <FaPlus /> Add Project
      </button>
    </div>
  );

  const renderReviewForm = () => (
    <div className="form-slide">
      <div className="slide-header">
        <h2 className="slide-title">Review Your Portfolio</h2>
        <p className="slide-subtitle">Check everything before generating your PDF</p>
      </div>

      <div className="form-section">
        <h3 className="section-title">Personal Information</h3>
        <p><strong>Name:</strong> {portfolioData.personalInfo.fullName}</p>
        <p><strong>Email:</strong> {portfolioData.personalInfo.email}</p>
        <p><strong>Phone:</strong> {portfolioData.personalInfo.phone}</p>
        <p><strong>Location:</strong> {portfolioData.personalInfo.location}</p>
      </div>

      <div className="form-section">
        <h3 className="section-title">Skills</h3>
        <p><strong>Technical:</strong> {portfolioData.skills.technical?.join(', ') || 'None'}</p>
        <p><strong>Soft Skills:</strong> {portfolioData.skills.soft?.join(', ') || 'None'}</p>
        <p><strong>Languages:</strong> {portfolioData.skills.languages?.join(', ') || 'None'}</p>
      </div>

      <div className="form-section">
        <h3 className="section-title">Education</h3>
        <p>{portfolioData.education?.length || 0} entries</p>
      </div>

      <div className="form-section">
        <h3 className="section-title">Experience</h3>
        <p>{portfolioData.workExperience?.length || 0} entries</p>
      </div>

      <div className="form-section">
        <h3 className="section-title">Projects</h3>
        <p>{portfolioData.projects?.length || 0} entries</p>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return renderPersonalInfoForm();
      case 1:
        return renderSkillsForm();
      case 2:
        return renderEducationForm();
      case 3:
        return renderExperienceForm();
      case 4:
        return renderProjectsForm();
      case 5:
        return renderReviewForm();
      default:
        return renderPersonalInfoForm();
    }
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="form-page">
      <nav className="form-navbar">
        <div className="form-navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          PortfolioMaker
        </div>
        <div className="form-navbar-actions">
          <span>Career: <strong>{careerType}</strong></span>
          {isAuthenticated ? (
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn btn-secondary" onClick={() => navigate('/')}>
                <FaHome /> Home
              </button>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="btn btn-secondary" onClick={() => navigate('/')}>
              <FaHome /> Home
            </button>
          )}
        </div>
      </nav>

      <div className="form-progress-container">
        <div className="progress-wrapper">
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }} />
          </div>

          <div className="progress-steps">
            {steps.map((step) => {
              const completed = isStepCompleted(step.id);
              const visited = currentStep > step.id;
              
              return (
                <div
                  key={step.id}
                  className={`progress-step ${currentStep === step.id ? 'active' : ''} ${
                    visited && completed ? 'completed' : ''
                  } ${visited && !completed ? 'incomplete' : ''}`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div className="step-circle">
                    {currentStep === step.id ? (
                      step.id + 1
                    ) : visited ? (
                      completed ? <FaCheck /> : <FaTimes />
                    ) : (
                      step.id + 1
                    )}
                  </div>
                  <span className="step-label">{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="form-content-wrapper">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {renderCurrentStep()}

            <div className="form-navigation">
              {currentStep > 0 && (
                <button className="nav-button btn-prev" onClick={handlePrev}>
                  <FaArrowLeft /> Previous
                </button>
              )}

              <button className="nav-button btn-next" onClick={handleNext}>
                {currentStep === steps.length - 1 ? (
                  <>
                    Generate Portfolio <FaCheck />
                  </>
                ) : (
                  <>
                    Next <FaArrowRight />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FormPage;

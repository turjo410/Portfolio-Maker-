import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';
import './PortfolioTemplates.css';

// Student Template - Academic Focus
export const StudentTemplate = ({ data }) => (
  <div className="template student-template">
    <div className="student-header">
      {data.personalInfo.profileImage && (
        <div className="student-profile-image">
          <img src={data.personalInfo.profileImage} alt={data.personalInfo.fullName} />
        </div>
      )}
      <div className="student-info">
        <h1 className="student-name">{data.personalInfo.fullName || 'Your Name'}</h1>
        <p className="student-tagline">Student & Learner</p>
        <div className="student-contact">
          {data.personalInfo.email && <span><FaEnvelope /> {data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span><FaPhone /> {data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span><FaMapMarkerAlt /> {data.personalInfo.location}</span>}
        </div>
      </div>
    </div>

    {data.personalInfo.summary && (
      <div className="student-summary">
        <h2>About Me</h2>
        <p>{data.personalInfo.summary}</p>
      </div>
    )}

    {data.education?.length > 0 && (
      <div className="student-section">
        <h2 className="section-title">🎓 Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="student-card">
            <div className="card-header">
              <h3>{edu.degree} {edu.field && `in ${edu.field}`}</h3>
              <span className="year-badge">{edu.year}</span>
            </div>
            <p className="institution">{edu.institution}</p>
            {edu.description && <p className="description">{edu.description}</p>}
          </div>
        ))}
      </div>
    )}

    {(data.skills.technical?.length > 0 || data.skills.soft?.length > 0) && (
      <div className="student-section">
        <h2 className="section-title">💡 Skills</h2>
        <div className="skills-grid">
          {data.skills.technical?.length > 0 && (
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <div className="skill-tags">
                {data.skills.technical.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {data.skills.soft?.length > 0 && (
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                {data.skills.soft.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )}

    {data.projects?.length > 0 && (
      <div className="student-section">
        <h2 className="section-title">📚 Projects</h2>
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              {project.link && <a href={project.link} className="project-link">{project.link}</a>}
              {project.description && <p>{project.description}</p>}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// Teacher Template - Professional & Organized
export const TeacherTemplate = ({ data }) => (
  <div className="template teacher-template">
    <div className="teacher-header">
      <div className="teacher-profile-section">
        {data.personalInfo.profileImage && (
          <div className="teacher-profile-image">
            <img src={data.personalInfo.profileImage} alt={data.personalInfo.fullName} />
          </div>
        )}
        <div className="teacher-info">
          <h1>{data.personalInfo.fullName || 'Your Name'}</h1>
          <p className="teacher-title">Educator & Mentor</p>
          <div className="teacher-contact">
            {data.personalInfo.email && <div><FaEnvelope /> {data.personalInfo.email}</div>}
            {data.personalInfo.phone && <div><FaPhone /> {data.personalInfo.phone}</div>}
            {data.personalInfo.location && <div><FaMapMarkerAlt /> {data.personalInfo.location}</div>}
          </div>
        </div>
      </div>
    </div>

    {data.personalInfo.summary && (
      <div className="teacher-section summary-section">
        <h2>Professional Summary</h2>
        <p>{data.personalInfo.summary}</p>
      </div>
    )}

    {data.workExperience?.length > 0 && (
      <div className="teacher-section">
        <h2>Teaching Experience</h2>
        {data.workExperience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-header">
              <div>
                <h3>{exp.position}</h3>
                <p className="institution">{exp.company}</p>
              </div>
              <span className="duration">{exp.duration}</span>
            </div>
            {exp.description && <p className="exp-description">{exp.description}</p>}
          </div>
        ))}
      </div>
    )}

    {data.education?.length > 0 && (
      <div className="teacher-section">
        <h2>Academic Qualifications</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree} {edu.field && `in ${edu.field}`}</h3>
            <p>{edu.institution} • {edu.year}</p>
          </div>
        ))}
      </div>
    )}

    {(data.skills.technical?.length > 0 || data.skills.soft?.length > 0) && (
      <div className="teacher-section">
        <h2>Core Competencies</h2>
        <div className="competencies-grid">
          {[...(data.skills.technical || []), ...(data.skills.soft || [])].map((skill, idx) => (
            <div key={idx} className="competency-item">{skill}</div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// Designer Template - Creative & Visual
export const DesignerTemplate = ({ data }) => (
  <div className="template designer-template">
    <div className="designer-hero">
      {data.personalInfo.profileImage && (
        <div className="designer-profile-image">
          <img src={data.personalInfo.profileImage} alt={data.personalInfo.fullName} />
        </div>
      )}
      <div className="designer-intro">
        <h1 className="designer-name">{data.personalInfo.fullName || 'Your Name'}</h1>
        <p className="designer-role">Creative Designer</p>
        {data.personalInfo.summary && <p className="designer-bio">{data.personalInfo.summary}</p>}
        <div className="designer-links">
          {data.personalInfo.email && <a href={`mailto:${data.personalInfo.email}`}><FaEnvelope /></a>}
          {data.personalInfo.website && <a href={data.personalInfo.website}><FaGlobe /></a>}
          {data.personalInfo.linkedin && <a href={data.personalInfo.linkedin}><FaLinkedin /></a>}
        </div>
      </div>
    </div>

    {data.projects?.length > 0 && (
      <div className="designer-section">
        <h2 className="creative-title">Featured Work</h2>
        <div className="designer-portfolio-grid">
          {data.projects.map((project, index) => (
            <div key={index} className="designer-project-card">
              <div className="project-overlay">
                <h3>{project.name}</h3>
                {project.description && <p>{project.description}</p>}
                {project.link && <a href={project.link} className="view-project">View Project →</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {(data.skills.technical?.length > 0 || data.skills.tools?.length > 0) && (
      <div className="designer-section">
        <h2 className="creative-title">Tools & Skills</h2>
        <div className="designer-skills">
          {[...(data.skills.technical || []), ...(data.skills.tools || [])].map((skill, idx) => (
            <span key={idx} className="designer-skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    )}

    {data.workExperience?.length > 0 && (
      <div className="designer-section">
        <h2 className="creative-title">Experience</h2>
        {data.workExperience.map((exp, index) => (
          <div key={index} className="designer-exp-card">
            <h3>{exp.position}</h3>
            <p className="company">{exp.company} • {exp.duration}</p>
            {exp.description && <p className="desc">{exp.description}</p>}
          </div>
        ))}
      </div>
    )}
  </div>
);

// Architect Template - Structural & Professional
export const ArchitectTemplate = ({ data }) => (
  <div className="template architect-template">
    <div className="architect-header">
      <div className="architect-title-section">
        <h1>{data.personalInfo.fullName || 'Your Name'}</h1>
        <p className="architect-subtitle">Licensed Architect</p>
      </div>
      {data.personalInfo.profileImage && (
        <div className="architect-profile-image">
          <img src={data.personalInfo.profileImage} alt={data.personalInfo.fullName} />
        </div>
      )}
    </div>

    <div className="architect-contact-bar">
      {data.personalInfo.email && <span><FaEnvelope /> {data.personalInfo.email}</span>}
      {data.personalInfo.phone && <span><FaPhone /> {data.personalInfo.phone}</span>}
      {data.personalInfo.location && <span><FaMapMarkerAlt /> {data.personalInfo.location}</span>}
      {data.personalInfo.website && <span><FaGlobe /> {data.personalInfo.website}</span>}
    </div>

    {data.personalInfo.summary && (
      <div className="architect-section">
        <h2>Professional Profile</h2>
        <p className="architect-summary">{data.personalInfo.summary}</p>
      </div>
    )}

    {data.projects?.length > 0 && (
      <div className="architect-section">
        <h2>Portfolio of Projects</h2>
        <div className="architect-projects">
          {data.projects.map((project, index) => (
            <div key={index} className="architect-project">
              <div className="project-number">0{index + 1}</div>
              <div className="project-details">
                <h3>{project.name}</h3>
                {project.description && <p>{project.description}</p>}
                {project.link && <a href={project.link}>View Details →</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {data.workExperience?.length > 0 && (
      <div className="architect-section">
        <h2>Professional Experience</h2>
        <div className="architect-timeline">
          {data.workExperience.map((exp, index) => (
            <div key={index} className="timeline-entry">
              <div className="timeline-date">{exp.duration}</div>
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <p className="firm">{exp.company}</p>
                {exp.description && <p>{exp.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {data.education?.length > 0 && (
      <div className="architect-section">
        <h2>Education & Credentials</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="architect-education">
            <h3>{edu.degree} {edu.field && `in ${edu.field}`}</h3>
            <p>{edu.institution} • {edu.year}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

// Developer Template - Tech-Focused
export const DeveloperTemplate = ({ data }) => (
  <div className="template developer-template">
    <div className="developer-header">
      {data.personalInfo.profileImage && (
        <div className="developer-profile-image">
          <img src={data.personalInfo.profileImage} alt={data.personalInfo.fullName} />
        </div>
      )}
      <div className="developer-intro">
        <h1 className="developer-name">{data.personalInfo.fullName || 'Your Name'}</h1>
        <p className="developer-role">Software Developer</p>
        {data.personalInfo.summary && <p className="developer-bio">{data.personalInfo.summary}</p>}
        <div className="developer-social">
          {data.personalInfo.github && <a href={data.personalInfo.github}><FaGithub /> GitHub</a>}
          {data.personalInfo.linkedin && <a href={data.personalInfo.linkedin}><FaLinkedin /> LinkedIn</a>}
          {data.personalInfo.website && <a href={data.personalInfo.website}><FaGlobe /> Website</a>}
          {data.personalInfo.email && <a href={`mailto:${data.personalInfo.email}`}><FaEnvelope /> Email</a>}
        </div>
      </div>
    </div>

    {data.skills.technical?.length > 0 && (
      <div className="developer-section">
        <h2 className="code-title">{'<'} Technical Skills {'/>'}</h2>
        <div className="tech-stack">
          {data.skills.technical.map((skill, idx) => (
            <div key={idx} className="tech-badge">{skill}</div>
          ))}
        </div>
      </div>
    )}

    {data.projects?.length > 0 && (
      <div className="developer-section">
        <h2 className="code-title">{'<'} Projects {'/>'}</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="dev-project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              {project.link && <a href={project.link} className="repo-link">View Code →</a>}
            </div>
            {project.description && <p className="project-desc">{project.description}</p>}
          </div>
        ))}
      </div>
    )}

    {data.workExperience?.length > 0 && (
      <div className="developer-section">
        <h2 className="code-title">{'<'} Experience {'/>'}</h2>
        {data.workExperience.map((exp, index) => (
          <div key={index} className="dev-exp-card">
            <div className="exp-header">
              <h3>{exp.position}</h3>
              <span className="duration">{exp.duration}</span>
            </div>
            <p className="company">{exp.company}</p>
            {exp.description && <p>{exp.description}</p>}
          </div>
        ))}
      </div>
    )}
  </div>
);

// Professional/Business Template - Corporate
export const ProfessionalTemplate = ({ data }) => (
  <div className="template professional-template">
    <div className="professional-sidebar">
      {data.personalInfo.profileImage && (
        <div className="professional-profile-image">
          <img src={data.personalInfo.profileImage} alt={data.personalInfo.fullName} />
        </div>
      )}
      <div className="sidebar-contact">
        <h3>Contact</h3>
        {data.personalInfo.email && <p><FaEnvelope /> {data.personalInfo.email}</p>}
        {data.personalInfo.phone && <p><FaPhone /> {data.personalInfo.phone}</p>}
        {data.personalInfo.location && <p><FaMapMarkerAlt /> {data.personalInfo.location}</p>}
      </div>
      {(data.skills.technical?.length > 0 || data.skills.soft?.length > 0) && (
        <div className="sidebar-skills">
          <h3>Skills</h3>
          {[...(data.skills.technical || []), ...(data.skills.soft || [])].map((skill, idx) => (
            <div key={idx} className="skill-item">• {skill}</div>
          ))}
        </div>
      )}
    </div>

    <div className="professional-main">
      <div className="professional-header">
        <h1>{data.personalInfo.fullName || 'Your Name'}</h1>
        <p className="professional-title">Business Professional</p>
      </div>

      {data.personalInfo.summary && (
        <div className="professional-section">
          <h2>Executive Summary</h2>
          <p>{data.personalInfo.summary}</p>
        </div>
      )}

      {data.workExperience?.length > 0 && (
        <div className="professional-section">
          <h2>Professional Experience</h2>
          {data.workExperience.map((exp, index) => (
            <div key={index} className="pro-exp-item">
              <div className="exp-title-row">
                <h3>{exp.position}</h3>
                <span className="date">{exp.duration}</span>
              </div>
              <p className="company-name">{exp.company}</p>
              {exp.description && <p className="exp-desc">{exp.description}</p>}
            </div>
          ))}
        </div>
      )}

      {data.education?.length > 0 && (
        <div className="professional-section">
          <h2>Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="pro-edu-item">
              <h3>{edu.degree} {edu.field && `in ${edu.field}`}</h3>
              <p>{edu.institution} • {edu.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

// Photographer Template - Visual Portfolio
export const PhotographerTemplate = ({ data }) => (
  <div className="template photographer-template">
    <div className="photographer-hero">
      {data.personalInfo.profileImage && (
        <div className="photographer-profile">
          <img src={data.personalInfo.profileImage} alt={data.personalInfo.fullName} />
        </div>
      )}
      <h1 className="photographer-name">{data.personalInfo.fullName || 'Your Name'}</h1>
      <p className="photographer-tagline">Visual Storyteller & Photographer</p>
    </div>

    {data.personalInfo.summary && (
      <div className="photographer-about">
        <p>{data.personalInfo.summary}</p>
      </div>
    )}

    <div className="photographer-contact-strip">
      {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
      {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
      {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
    </div>

    {data.projects?.length > 0 && (
      <div className="photographer-section">
        <h2>Portfolio</h2>
        <div className="photographer-gallery">
          {data.projects.map((project, index) => (
            <div key={index} className="gallery-item">
              <h3>{project.name}</h3>
              {project.description && <p>{project.description}</p>}
              {project.link && <a href={project.link}>View Gallery →</a>}
            </div>
          ))}
        </div>
      </div>
    )}

    {data.workExperience?.length > 0 && (
      <div className="photographer-section">
        <h2>Experience</h2>
        {data.workExperience.map((exp, index) => (
          <div key={index} className="photo-exp">
            <h3>{exp.position}</h3>
            <p>{exp.company} • {exp.duration}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export const getTemplateByCareerType = (careerType, data) => {
  const templates = {
    student: StudentTemplate,
    teacher: TeacherTemplate,
    designer: DesignerTemplate,
    architect: ArchitectTemplate,
    developer: DeveloperTemplate,
    professional: ProfessionalTemplate,
    business: ProfessionalTemplate,
    photographer: PhotographerTemplate,
  };

  const TemplateComponent = templates[careerType] || ProfessionalTemplate;
  return <TemplateComponent data={data} />;
};

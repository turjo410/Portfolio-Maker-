import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({
  careerType: '',
  currentStep: 0,
  portfolioData: {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      location: '',
      website: '',
      linkedin: '',
      github: '',
      profileImage: '',
      summary: '',
    },
    skills: {
      technical: [],
      soft: [],
      languages: [],
      tools: [],
    },
    education: [
      {
        institution: '',
        degree: '',
        field: '',
        year: '',
        description: '',
      },
      {
        institution: '',
        degree: '',
        field: '',
        year: '',
        description: '',
      },
    ],
    workExperience: [
      {
        company: '',
        position: '',
        location: '',
        duration: '',
        description: '',
      },
    ],
    projects: [],
    publications: [],
    certifications: [],
    awards: [],
  },
  
  setCareerType: (type) => set({ careerType: type }),
  setCurrentStep: (step) => set({ currentStep: step }),
  updatePersonalInfo: (data) =>
    set((state) => ({
      portfolioData: { ...state.portfolioData, personalInfo: { ...state.portfolioData.personalInfo, ...data } },
    })),
  updateSkills: (data) =>
    set((state) => ({
      portfolioData: { ...state.portfolioData, skills: { ...state.portfolioData.skills, ...data } },
    })),
  addEducation: (data) =>
    set((state) => ({
      portfolioData: { ...state.portfolioData, education: [...state.portfolioData.education, data] },
    })),
  updateEducation: (index, data) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        education: state.portfolioData.education.map((item, i) => (i === index ? data : item)),
      },
    })),
  removeEducation: (index) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        education: state.portfolioData.education.filter((_, i) => i !== index),
      },
    })),
  addWorkExperience: (data) =>
    set((state) => ({
      portfolioData: { ...state.portfolioData, workExperience: [...state.portfolioData.workExperience, data] },
    })),
  updateWorkExperience: (index, data) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        workExperience: state.portfolioData.workExperience.map((item, i) => (i === index ? data : item)),
      },
    })),
  removeWorkExperience: (index) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        workExperience: state.portfolioData.workExperience.filter((_, i) => i !== index),
      },
    })),
  addProject: (data) =>
    set((state) => ({
      portfolioData: { ...state.portfolioData, projects: [...state.portfolioData.projects, data] },
    })),
  updateProject: (index, data) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        projects: state.portfolioData.projects.map((item, i) => (i === index ? data : item)),
      },
    })),
  removeProject: (index) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        projects: state.portfolioData.projects.filter((_, i) => i !== index),
      },
    })),
  addPublication: (data) =>
    set((state) => ({
      portfolioData: { ...state.portfolioData, publications: [...state.portfolioData.publications, data] },
    })),
  removePublication: (index) =>
    set((state) => ({
      portfolioData: {
        ...state.portfolioData,
        publications: state.portfolioData.publications.filter((_, i) => i !== index),
      },
    })),
  resetPortfolio: () =>
    set({
      careerType: '',
      currentStep: 0,
      portfolioData: {
        personalInfo: {
          fullName: '',
          email: '',
          phone: '',
          location: '',
          website: '',
          linkedin: '',
          github: '',
          profileImage: '',
          summary: '',
        },
        skills: {
          technical: [],
          soft: [],
          languages: [],
          tools: [],
        },
        education: [],
        workExperience: [],
        projects: [],
        publications: [],
        certifications: [],
        awards: [],
      },
    }),
}));

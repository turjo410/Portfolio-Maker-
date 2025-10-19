const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    careerType: {
      type: String,
      required: true,
      enum: ['student', 'teacher', 'designer', 'architect', 'developer', 'professional', 'business', 'photographer'],
    },
    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      dateOfBirth: String,
      location: String,
      website: String,
      linkedin: String,
      github: String,
      profileImage: String,
      summary: String,
    },
    skills: {
      technical: [String],
      soft: [String],
      languages: [String],
      tools: [String],
    },
    education: [
      {
        institution: String,
        degree: String,
        field: String,
        year: String,
        description: String,
      },
    ],
    workExperience: [
      {
        company: String,
        position: String,
        location: String,
        duration: String,
        description: String,
      },
    ],
    projects: [
      {
        name: String,
        link: String,
        description: String,
      },
    ],
    publications: [
      {
        title: String,
        publisher: String,
        year: String,
        link: String,
      },
    ],
    certifications: [
      {
        name: String,
        issuer: String,
        year: String,
        link: String,
      },
    ],
    awards: [
      {
        title: String,
        issuer: String,
        year: String,
        description: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);

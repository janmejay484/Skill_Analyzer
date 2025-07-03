# Skill Analyzer

Skill Analyzer is a full-stack React/Node.js application that helps users get personalized career guidance based on their LinkedIn/GitHub profiles and uploaded resume. Simply fill out a quick form, upload your resume, and let our AI-powered backend suggest:

- **Top 3 roles** that match your background  
- **Key skill gaps** and how to bridge them  
- **Recommended resources** and certifications  
- **Mini-projects** or portfolio ideas  

## 🔍 Features

- **Profile management** (create, edit, delete)  
- **Resume upload & parsing** (PDF/DOCX → text)  
- **AI-driven analysis** via GitHub’s gpt-4.1 model  
- **Downloadable report** of personalized advice  
- **Auth** with email/password and protected routes  
- **Responsive**, modern UI (React + CSS Modules)  

## 🚀 Tech Stack

- **Frontend:** React, React Router, Axios, CSS Modules  
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer  
- **AI:** GitHub Models “openai/gpt-4.1” endpoint  
- **Auth:** JWT stored in HTTP-only cookies  

## 💻 Getting Started

1. **Clone** this repo  
   ```bash
   git clone https://github.com/your-username/Skill_Analyzer.git
   cd Skill_Analyzer
**Server**
cd server
npm install
create a `.env` with your MongoDB URI and GITHUB_TOKEN
npm run dev

**Client**
cd client
npm install
npm run dev

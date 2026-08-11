import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsTerminal.css';

const projects = [
  
{
    id: 1,
    name: "AKI | Distributed Knowledge Processing & Retrieval System",
    description: "Built an RAG-based knowledge platform integrating 5+ data sources with scalable Kafka ingestion and hybrid retrieval for high-precision search.",
    stack: ["Python", "FastAPI", "React", "Kafka","LLM/RAG","Docker","Kubernetes"],
    builtIn: "1 month",
    githubUrl: "https://github.com/shubham5400E/AKI-Platform",
    pin: true,
  },  
{
    id: 2,
    name: "Violence Detection System",
    description: "Developed an end-to-end AI system for detecting violent activity in real time.",
    stack: ["TypeScript", "React", "Firebase", "OpenCV"],
    builtIn: "3 weeks",
    liveUrl: "https://violence-detector.vercel.app/",
    githubUrl: "https://github.com/shubham5400E/Real-time_Violence_detection",
    pin: true,
  },
  {
    id: 3,
    name: "Web3Quest",
    description: "Web3 Gamified Learning with Onchain Proofs.",
    stack: ["Blockchain", "React", "Vite", "Supabase", "Smart Contracts"],
    builtIn: "1 week",
    githubUrl: "https://github.com/shubham5400E/Hackathon_DevClash_web3quest",
    pin: true,
  },
  {
    id: 4,
    name: "Civic Issue Reporting System",
    description: "AI-powered grievance management system. Streamlines complaint filing and resolution tracking with intelligent categorization.",
    stack: ["TypeScript", "React Native", "Supabase", "React", "Tailwind"],
    builtIn: "2 weeks",
    githubUrl: "https://github.com/shubham5400E/Civic_Issue_Reporting_System",
    pin: true,
  },
  {
    id: 5,
    name: "College Finder",
    description: "Built a full-stack College Finder web application for personalized college search and exploration.",
    stack: ["TypeScript", "React", "Tailwind", "Vite"],
    builtIn: "1 week",
    liveUrl: "https://college-finder-rho.vercel.app/",
    githubUrl: "https://github.com/shubham5400E/College-Finder",
    pin: false,
  },
  {
    id: 6,
    name: "AI-Powered Gamified Financial Literacy Platform",
    description: "Developed a full-stack AI-powered financial literacy platform with personalized learning, budgeting simulations, quizzes, and progress analytics to promote smart financial habits among youth.",
    stack: ["TypeScript", "React", "Tailwind","Grok Api "],
    builtIn: "3 Days (Hackthon Project)",
    githubUrl: "https://github.com/shubham5400E/hashit",
    pin: false,
  },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...projects, ...projects];

const ProjectsTerminal = () => {
  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="projects-section__header-wrap">
        <motion.div
          className="projects-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num">03</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Things I've shipped into the world</p>
        </motion.div>
      </div>

      {/* Infinite horizontal scroll — LEFT TO RIGHT */}
      <div className="projects-marquee">
        <div className="projects-marquee__track">
          {marqueeItems.map((proj, idx) => (
            <div
              key={`${proj.id}-${idx}`}
              className={`project-card ${proj.pin ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__content">
                <div>
                  <h3 className="project-card__name">{proj.name}</h3>
                  <div className="project-card__divider"></div>
                  <p className="project-card__desc">{proj.description}</p>

                  <div className="project-card__meta">
                    <span>Built in: {proj.builtIn}</span>
                  </div>

                  <div className="project-card__stack">
                    {proj.stack.map(tech => (
                      <span key={tech} className="project-card__tech">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card__links">
                  {proj.liveUrl && (
                    <>
                      <a href={proj.liveUrl} className="project-card__link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                      <span className="project-card__link-separator">•</span>
                    </>
                  )}
                  <a href={proj.githubUrl} className="project-card__link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsTerminal;

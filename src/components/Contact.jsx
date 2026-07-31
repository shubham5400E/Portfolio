import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { SiBuymeacoffee, SiGoogle } from 'react-icons/si';
import { SiLeetcode } from "react-icons/si";
import './Contact.css';

const Contact = () => {
  const socials = [
    {
      name: 'Email',
      url: 'mailto:shubhamchaudhari2007@gmail.com',
      icon: <FiMail />,
      label: 'shubhamchaudhari2007@gmail.com',
      color: '#ea4335'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/shubham5400E',
      icon: <FiGithub />,
      label: 'github.com',
      color: 'var(--text)'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shubham-chaudhari-552a38306',
      icon: <FiLinkedin />,
      label: 'linkedin.com',
      color: '#0a66c2'
    },
    
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/u/shubham5400E/',
      icon: <SiLeetcode />,
      label: 'leetcode.com',
      color: '#FFDD00'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/shubham_7_7_2007',
      icon: <FiInstagram />,
      label: '@instagram',
      color: '#e1306c'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/100099081640530743',
      icon: <FaDiscord />,
      label: 'Discord',
      color: '#5865F2'
    }
  ];

  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="contact__inner"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="contact__header">
          <span className="section-num">05</span>
          <h2 className="contact__heading">
            Got an idea?<br />
            <span className="contact__heading-green">Let's connect.</span>
          </h2>
          <p className="contact__subtitle">Reach out via email or connect with me on any platform below.</p>
        </div>

        <div className="contact__links-grid">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target={social.name !== 'Email' ? '_blank' : undefined}
              rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="contact__link-card"
              style={{ '--brand-color': social.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="contact__link-icon" style={{ color: social.color }}>{social.icon}</span>
              <span className="contact__link-name">{social.name}</span>
              <span className="contact__link-label">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="contact__glow" />
    </motion.section>
  );
};

export default Contact;

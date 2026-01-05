import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Hero = () => {
  const { theme } = useTheme()
  const [viewWorkHovered, setViewWorkHovered] = useState(false)
  const [contactHovered, setContactHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  const SocialLink = ({ icon: Icon, href, label }) => {
    const [hovered, setHovered] = useState(false)
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? theme.accent : theme.textSecondary,
          transition: 'color 0.2s ease',
        }}
      >
        <Icon size={24} />
      </a>
    )
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 50px',
        position: 'relative',
        backgroundColor: theme.bgPrimary,
        transition: 'background-color 0.3s ease',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', zIndex: 2 }}
      >
        {/* Top Section - Headings (full width) */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(14px, 3vw, 16px)',
            color: theme.accent,
            marginBottom: '20px',
          }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: 700,
            color: theme.textPrimary,
            lineHeight: 1.1,
            marginBottom: '10px',
          }}
        >
          Mohamed Issa.
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: 'clamp(30px, 6vw, 60px)',
            fontWeight: 600,
            color: theme.textSecondary,
            lineHeight: 1.1,
            marginBottom: '40px',
          }}
        >
          I build secure systems & break insecure ones.
        </motion.h2>

        {/* Bottom Section - Text LEFT, Image RIGHT */}
        <div className="hero-bottom" style={{ display: 'flex', alignItems: 'stretch', gap: '50px' }}>
          {/* Left - Description & Buttons */}
          <motion.div variants={itemVariants} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p
              style={{
                maxWidth: '540px',
                fontSize: '1.1rem',
                color: theme.textSecondary,
                marginBottom: '40px',
                lineHeight: 1.6,
              }}
            >
              Computer Security student at York University, passionate about protecting digital systems
              and developing secure software. Currently focused on AI security research and threat analysis.
            </p>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                onMouseEnter={() => setViewWorkHovered(true)}
                onMouseLeave={() => setViewWorkHovered(false)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9rem',
                  color: theme.accent,
                  border: `1px solid ${theme.accent}`,
                  padding: '14px 28px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  backgroundColor: viewWorkHovered ? theme.accentTint : 'transparent',
                  transition: 'background-color 0.2s ease',
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                onMouseEnter={() => setContactHovered(true)}
                onMouseLeave={() => setContactHovered(false)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9rem',
                  color: contactHovered ? theme.accent : theme.textPrimary,
                  backgroundColor: theme.bgSecondary,
                  border: contactHovered ? `1px solid ${theme.accent}` : `1px solid ${theme.border}`,
                  padding: '14px 28px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
              >
                Contact Me
              </a>
            </div>

            <div style={{ display: 'flex', gap: '25px' }}>
              <SocialLink icon={Github} href="https://github.com/1IssaMohamed" label="GitHub" />
              <SocialLink icon={Linkedin} href="https://linkedin.com/in/mohamed-adel-issa" label="LinkedIn" />
              <SocialLink icon={Mail} href="mailto:m.ad.issa32@gmail.com" label="Email" />
            </div>
          </motion.div>

          {/* Right - Circle Profile Image */}
          <motion.div
            variants={itemVariants}
            className="hero-image"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                border: `2px solid ${theme.border}`,
                overflow: 'hidden',
                backgroundColor: theme.bgSecondary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Replace with your actual image */}
              {/* <img src="/your-photo.jpg" alt="Mohamed Issa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
              
              {/* Placeholder */}
              <div style={{ textAlign: 'center', color: theme.textMuted }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>👤</div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>Your photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}

export default Hero

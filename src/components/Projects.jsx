import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Shield, QrCode, Coffee, Play, X, ChevronRight, Zap, Target, Lightbulb, Code2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: 'MalShield',
    shortDesc: 'AI-powered threat detection tool',
    description:
      'A comprehensive threat detection tool that identifies potentially malicious URLs and phishing emails with 93% and 96% accuracy respectively. Features ML models trained with Random Forest (URLs) and SVM (emails), plus a Chrome extension for real-time protection.',
    tech: ['React', 'Python', 'Flask', 'Machine Learning', 'Chrome Extension'],
    github: 'https://github.com/1IssaMohamed',
    live: null,
    icon: Shield,
    featured: true,
    status: 'Completed',
    insights: {
      problem: 'Phishing attacks and malicious URLs are responsible for over 90% of data breaches. Traditional blacklist-based detection fails against new threats.',
      solution: 'Built a dual ML pipeline using Random Forest for URL classification (analyzing lexical & host-based features) and SVM for email detection (NLP-based content analysis).',
      impact: '93% URL detection accuracy, 96% email phishing detection, real-time Chrome extension protection',
      learned: 'Feature engineering for cybersecurity, ML model optimization, browser extension development, Flask API design',
    },
    highlights: [
      { icon: Target, label: 'Accuracy', value: '93-96%' },
      { icon: Zap, label: 'Detection', value: 'Real-time' },
      { icon: Code2, label: 'Models', value: '2 ML Pipelines' },
    ],
  },
  {
    title: 'Their Info Now',
    shortDesc: 'Emergency medical data via QR',
    description:
      'A medical data sharing application enabling quick emergency info access via QR codes, potentially saving critical response time. Built with secure, scalable backend services for patient data storage.',
    tech: ['React', 'Tailwind CSS', 'MongoDB', 'Express'],
    github: 'https://github.com/1IssaMohamed',
    live: null,
    icon: QrCode,
    featured: true,
    status: 'Completed',
    insights: {
      problem: 'In emergency situations, first responders often lack critical patient medical information, leading to delayed or potentially harmful treatment decisions.',
      solution: 'Created a secure QR-based system where patients can store vital medical info (allergies, conditions, medications) accessible via a simple scan.',
      impact: 'Potential to reduce emergency response decision time by providing instant access to critical health data',
      learned: 'Healthcare data security, QR code generation, responsive design for emergency scenarios, MongoDB schema design',
    },
    highlights: [
      { icon: Zap, label: 'Access', value: 'Instant' },
      { icon: Target, label: 'Storage', value: 'Secure' },
      { icon: Code2, label: 'Stack', value: 'MERN' },
    ],
  },
  {
    title: 'Nutrience Tracking App',
    shortDesc: 'Team-built nutrition tracker',
    description:
      'Led development of a Java nutrition tracker with a 4-member team. Features food logging, diet optimization, and real-time food swapping algorithms powered by a database of 5,000+ CNF entries. Applied 6 design patterns to reduce code complexity by 40%.',
    tech: ['Java', 'MySQL', 'Java Swing', 'JFreeChart'],
    github: 'https://github.com/1IssaMohamed',
    live: null,
    icon: Coffee,
    featured: false,
    status: 'Completed',
    insights: {
      problem: 'Tracking nutrition is tedious and most apps lack intelligent food alternatives suggestions based on dietary goals.',
      solution: 'Built a desktop app with smart food swapping algorithms that suggest healthier alternatives while meeting nutritional targets, backed by 5,000+ CNF database entries.',
      impact: '40% code complexity reduction through design patterns, team leadership experience, comprehensive nutrition database',
      learned: 'Design patterns (Factory, Strategy, Observer, etc.), team leadership, database optimization, data visualization with JFreeChart',
    },
    highlights: [
      { icon: Target, label: 'Database', value: '5,000+ entries' },
      { icon: Code2, label: 'Patterns', value: '6 Applied' },
      { icon: Zap, label: 'Complexity', value: '-40%' },
    ],
  },
  {
    title: 'International Football Sim',
    shortDesc: 'Data-driven tournament simulator',
    description:
      'A data-driven simulation program for international football tournaments including Euros and Copa América. Scraped 10,000+ real player and team statistics using BeautifulSoup & Selenium to generate realistic match outcomes.',
    tech: ['Python', 'BeautifulSoup', 'Selenium', 'Data Analysis'],
    github: 'https://github.com/1IssaMohamed',
    live: null,
    icon: Play,
    featured: false,
    status: 'Completed',
    insights: {
      problem: 'Football simulations often lack realism due to arbitrary stats. Wanted to create predictions based on actual current player performance data.',
      solution: 'Built a web scraping pipeline to collect real-time stats from multiple sources, then created weighted algorithms factoring in form, home advantage, and historical matchups.',
      impact: '10,000+ data points collected, realistic tournament simulations for Euros & Copa América',
      learned: 'Web scraping ethics and techniques, data cleaning pipelines, statistical modeling, handling anti-bot measures',
    },
    highlights: [
      { icon: Target, label: 'Data Points', value: '10,000+' },
      { icon: Code2, label: 'Tournaments', value: 'Euros & Copa' },
      { icon: Zap, label: 'Updates', value: 'Real-time' },
    ],
  },
]

// Project Detail Modal/Drawer Component
const ProjectModal = ({ project, isOpen, onClose, theme }) => {
  const Icon = project?.icon

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 1000,
            }}
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '600px',
              backgroundColor: theme.bgPrimary,
              zIndex: 1001,
              overflowY: 'auto',
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Header */}
            <div
              style={{
                position: 'sticky',
                top: 0,
                backgroundColor: theme.bgPrimary,
                borderBottom: `1px solid ${theme.border}`,
                padding: '20px 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    backgroundColor: `${theme.accent}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={24} style={{ color: theme.accent }} />
                </div>
                <div>
                  <h3 style={{ color: theme.textPrimary, fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>{project.title}</h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      color: theme.accent,
                      backgroundColor: `${theme.accent}15`,
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  color: theme.textMuted,
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.bgSecondary
                  e.currentTarget.style.color = theme.textPrimary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = theme.textMuted
                }}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: '30px' }}>
              {/* Quick Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '15px',
                  marginBottom: '30px',
                }}
              >
                {project.highlights.map((highlight) => {
                  const HighlightIcon = highlight.icon
                  return (
                    <div
                      key={highlight.label}
                      style={{
                        backgroundColor: theme.bgSecondary,
                        borderRadius: '12px',
                        padding: '20px 15px',
                        textAlign: 'center',
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      <HighlightIcon size={20} style={{ color: theme.accent, marginBottom: '8px' }} />
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem', fontWeight: 600, color: theme.textPrimary, margin: '0 0 4px 0' }}>
                        {highlight.value}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: theme.textMuted, margin: 0 }}>{highlight.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Description */}
              <div style={{ marginBottom: '30px' }}>
                <p style={{ fontSize: '1rem', color: theme.textSecondary, lineHeight: 1.7 }}>{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                  Tech Stack
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.8rem',
                        color: theme.accent,
                        backgroundColor: `${theme.accent}10`,
                        border: `1px solid ${theme.accent}30`,
                        padding: '6px 14px',
                        borderRadius: '20px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Insights Section */}
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                  Project Insights
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Problem */}
                  <div
                    style={{
                      backgroundColor: theme.bgSecondary,
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: `3px solid #ef4444`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Target size={18} style={{ color: '#ef4444' }} />
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary, margin: 0 }}>The Problem</h5>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: theme.textSecondary, lineHeight: 1.6, margin: 0 }}>{project.insights.problem}</p>
                  </div>

                  {/* Solution */}
                  <div
                    style={{
                      backgroundColor: theme.bgSecondary,
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: `3px solid ${theme.accent}`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Lightbulb size={18} style={{ color: theme.accent }} />
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary, margin: 0 }}>The Solution</h5>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: theme.textSecondary, lineHeight: 1.6, margin: 0 }}>{project.insights.solution}</p>
                  </div>

                  {/* Impact */}
                  <div
                    style={{
                      backgroundColor: theme.bgSecondary,
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: `3px solid #22c55e`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Zap size={18} style={{ color: '#22c55e' }} />
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary, margin: 0 }}>The Impact</h5>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: theme.textSecondary, lineHeight: 1.6, margin: 0 }}>{project.insights.impact}</p>
                  </div>

                  {/* What I Learned */}
                  <div
                    style={{
                      backgroundColor: theme.bgSecondary,
                      borderRadius: '12px',
                      padding: '20px',
                      borderLeft: `3px solid #8b5cf6`,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Code2 size={18} style={{ color: '#8b5cf6' }} />
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: theme.textPrimary, margin: 0 }}>What I Learned</h5>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: theme.textSecondary, lineHeight: 1.6, margin: 0 }}>{project.insights.learned}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  marginTop: '30px',
                  paddingTop: '30px',
                  borderTop: `1px solid ${theme.border}`,
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '14px 20px',
                    backgroundColor: theme.bgSecondary,
                    color: theme.textPrimary,
                    border: `1px solid ${theme.border}`,
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = theme.accent
                    e.currentTarget.style.color = theme.accent
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.border
                    e.currentTarget.style.color = theme.textPrimary
                  }}
                >
                  <Github size={18} />
                  View Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '14px 20px',
                      backgroundColor: theme.accent,
                      color: theme.bgPrimary,
                      border: 'none',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.9rem',
                    }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const ProjectCard = ({ project, index, theme, onClick }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [hovered, setHovered] = useState(false)
  const Icon = project.icon

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        backgroundColor: theme.bgPrimary,
        borderRadius: '6px',
        border: `1px solid ${hovered ? theme.accent : theme.border}`,
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        cursor: 'pointer',
      }}
    >
      {/* Project Visual */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.bgTertiary,
          minHeight: '160px',
          position: 'relative',
        }}
      >
        <div
          style={{
            color: hovered ? theme.accent : theme.textMuted,
            transition: 'color 0.2s ease',
          }}
        >
          <Icon size={48} strokeWidth={1.5} />
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: theme.accent,
              backgroundColor: `${theme.accent}15`,
              padding: '4px 10px',
              borderRadius: '4px',
              border: `1px solid ${theme.accent}30`,
            }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '25px' }}>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: hovered ? theme.accent : theme.textPrimary,
            marginBottom: '8px',
            transition: 'color 0.3s ease',
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: '0.9rem', color: theme.textMuted, marginBottom: '20px', lineHeight: 1.5 }}>{project.shortDesc}</p>

        {/* Tech Tags (limited) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: theme.textMuted,
                backgroundColor: theme.bgTertiary,
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: theme.textMuted,
                backgroundColor: theme.bgTertiary,
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* View Details CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '15px',
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: hovered ? theme.accent : theme.textMuted,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.3s ease',
            }}
          >
            View Deatils
            <ChevronRight
              size={16}
              style={{
                transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  const { theme } = useTheme()
  const ref = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProject = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProject = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projects" style={{ padding: '80px 0', backgroundColor: theme.bgSecondary, transition: 'background-color 0.3s ease' }}>
        <div ref={ref} style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 50px' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 32px)',
              fontWeight: 700,
              color: theme.textPrimary,
              marginBottom: '40px',
            }}
          >
            Projects
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} theme={theme} onClick={() => openProject(project)} />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProject} theme={theme} />
    </>
  )
}

export default Projects

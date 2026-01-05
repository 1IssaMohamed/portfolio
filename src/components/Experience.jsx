import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const experiences = [
  {
    title: 'Research Assistant',
    company: 'York University',
    date: 'May 2025 - Aug 2025',
    points: [
      'Conducted in-depth analysis of MITRE ATT&CK and ATLAS frameworks to analyze tactics targeting AI systems',
      'Created comprehensive diagram breaking down the NIST AI 100-2e2025 standard into attack types, techniques, timing, and objectives',
      'Mapped 100+ TTPs across Predictive and Generative AI case studies, surfacing 5+ key attack patterns',
      'Identified and ranked top 5 mitigation strategies per AI type from 26 techniques based on frequency and coverage',
    ],
  },
  {
    title: 'Frontend Development & UI/UX Intern',
    company: 'Riipen',
    date: 'Feb 2025 - Apr 2025',
    points: [
      'Conducted UI/UX research on matchmaking apps to identify best practices in layout, navigation & accessibility',
      'Designed wireframes and interactive UI mockups in Figma, translating UX goals into development roadmap',
      'Implemented responsive frontend components using React + MUI + Tailwind CSS for cross-device compatibility',
    ],
  },
  {
    title: 'IEEE Club Webmaster',
    company: 'York University',
    date: 'Sep 2025 - Present',
    points: [
      'Designed complete UI mockups in Figma and translated designs into production code',
      'Built responsive club website using React and Tailwind CSS',
      'Maintained and updated website content to keep students informed about IEEE events and opportunities',
    ],
  },
  {
    title: 'Student Representative',
    company: 'Science Curriculum Committee',
    date: 'Sep 2025 - Present',
    points: [
      'Represent 3,000+ EECS students on the 10-person committee, voicing student perspectives in curriculum decisions',
      'Collaborate with faculty to update courses, design new offerings, and ensure curricula stays relevant and rigorous',
    ],
  },
  {
    title: 'Electrical Appliance Service Person',
    company: 'St. James Town Community Corner',
    date: 'Jun 2022 - Sep 2022',
    points: [
      'Diagnosed and repaired 200+ devices including computers, consoles, and household items with 95%+ success rate',
      'Performed hardware repairs using soldering irons, voltmeters, and specialized tools',
      'Standardized intake/repair logging with a new workflow that improved tracking accuracy by 60%',
    ],
  },
]

const TimelineItem = ({ experience, index, theme }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{ position: 'relative', paddingLeft: '25px', paddingBottom: '30px' }}
    >
      {/* Timeline line */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          background: `linear-gradient(to bottom, ${theme.accent}, ${theme.border} 80%)`,
        }}
      />

      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: '-4px',
          top: '6px',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: theme.accent,
        }}
      />

      {/* Content Card */}
      <div
        style={{
          backgroundColor: theme.bgPrimary,
          padding: '20px',
          borderRadius: '6px',
          border: `1px solid ${theme.border}`,
          marginLeft: '15px',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
          <h3 style={{ color: theme.textPrimary, fontSize: '1.1rem', fontWeight: 600 }}>{experience.title}</h3>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: theme.accent, fontSize: '0.95rem' }}>
            @ {experience.company}
          </span>
        </div>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: theme.textMuted, marginBottom: '15px' }}>
          {experience.date}
        </p>
        <ul style={{ paddingLeft: '20px', listStyle: 'none' }}>
          {experience.points.map((point, i) => (
            <li key={i} style={{ position: 'relative', marginBottom: '10px', fontSize: '0.95rem', color: theme.textSecondary, paddingLeft: '5px' }}>
              <span style={{ position: 'absolute', left: '-15px', color: theme.accent }}>▹</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const { theme } = useTheme()
  const ref = useRef(null)

  return (
    <section id="experience" style={{ padding: '100px 0', backgroundColor: theme.bgSecondary, transition: 'background-color 0.3s ease' }}>
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto', padding: '0 50px' }}>
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 700,
            color: theme.textPrimary,
            marginBottom: '40px',
          }}
        >
          Experience
        </h2>

        <div style={{ position: 'relative' }}>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

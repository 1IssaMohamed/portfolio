import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { theme } = useTheme()
  const ref = useRef(null)

  return (
    <section id="about" style={{ padding: '100px 0', backgroundColor: theme.bgPrimary, transition: 'background-color 0.3s ease' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 50px' }}>
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 700,
            color: theme.textPrimary,
            marginBottom: '40px',
          }}
        >
          About Me
        </h2>

        <div className="about-grid" style={{ display: 'grid', gap: '40px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p style={{ fontSize: '1.05rem', color: theme.textSecondary, lineHeight: 1.7 }}>
              I'm a Computer Security student at <span style={{ color: theme.accent, fontWeight: 500 }}>York University</span> with a passion
              for understanding how systems break—and how to build them to be unbreakable. My journey in tech
              started with fixing electronics at a community repair shop, where I learned that security isn't
              just about code; it's about understanding systems at every level.
            </p>
            <p style={{ fontSize: '1.05rem', color: theme.textSecondary, lineHeight: 1.7 }}>
              Recently, I've been diving deep into <span style={{ color: theme.accent, fontWeight: 500 }}>AI security research</span>, analyzing
              how adversarial attacks target machine learning systems using frameworks like MITRE ATT&CK and ATLAS.
              I've also built tools like <span style={{ color: theme.accent, fontWeight: 500 }}>MalShield</span>, a malware detection system with 93%+ accuracy.
            </p>
            <p style={{ fontSize: '1.05rem', color: theme.textSecondary, lineHeight: 1.7 }}>
              When I'm not hunting vulnerabilities or writing code, you can find me representing 3,000+ students
              on York's Science Curriculum Committee or building web experiences as the IEEE Club Webmaster.
            </p>
          </div>

          <div
            style={{
              backgroundColor: theme.bgSecondary,
              borderRadius: '6px',
              padding: '25px',
              border: `1px solid ${theme.border}`,
            }}
          >
            <div style={{ color: theme.accent, marginBottom: '16px' }}>
              <GraduationCap size={28} />
            </div>
            <h3 style={{ color: theme.textPrimary, fontSize: '1.1rem', marginBottom: '6px' }}>York University</h3>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: theme.accent, fontSize: '0.85rem', marginBottom: '12px' }}>
              B.Sc. Hons. Computer Security
            </p>
            <p style={{ fontSize: '0.85rem', color: theme.textMuted }}>Sep 2022 - Apr 2027</p>
            <p style={{ fontSize: '0.85rem', color: theme.textMuted }}>Toronto, ON</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

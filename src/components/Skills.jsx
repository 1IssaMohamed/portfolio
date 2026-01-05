import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const skills = {
  Languages: ['Python', 'Java', 'C', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Bash'],
  'Frameworks & Libraries': ['React', 'Flask', 'Tailwind CSS', 'Framer Motion'],
  'Security Tools': ['Wireshark', 'Metasploit', 'Burp Suite', 'Nmap', 'Ghidra'],
  'Developer Tools': ['Git', 'Linux', 'VS Code', 'Docker', 'Postman'],
}

const Skills = () => {
  const { theme } = useTheme()
  const ref = useRef(null)

  return (
    <section id="skills" style={{ padding: '80px 0', backgroundColor: theme.bgPrimary, transition: 'background-color 0.3s ease' }}>
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto', padding: '0 50px' }}>
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 700,
            color: theme.textPrimary,
            marginBottom: '40px',
          }}
        >
          Skills
        </h2>

        {/* Skill Categories - 2x2 Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '25px',
          }}
        >
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div
              key={category}
              style={{
                backgroundColor: theme.bgSecondary,
                borderRadius: '6px',
                padding: '20px',
                border: `1px solid ${theme.border}`,
              }}
            >
              <h3 style={{ color: theme.textPrimary, fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px' }}>{category}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {categorySkills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.8rem',
                      color: theme.textSecondary,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

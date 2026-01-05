import { useRef } from 'react'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()
  const ref = useRef(null)

  return (
    <section id="contact" style={{ padding: '80px 0', backgroundColor: theme.bgSecondary, transition: 'background-color 0.3s ease' }}>
      <div ref={ref} style={{ maxWidth: '600px', margin: '0 auto', padding: '0 50px', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 700,
            color: theme.textPrimary,
            marginBottom: '20px',
          }}
        >
          Get In Touch
        </h2>

        <p
          style={{
            color: theme.textSecondary,
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '12px',
          }}
        >
          I'm currently looking for new opportunities in software development and cybersecurity. Whether you have a question, want to collaborate on
          a project, or just want to say hi, my inbox is always open!
        </p>

        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            color: theme.textMuted,
            fontSize: '0.9rem',
            marginBottom: '30px',
          }}
        >
          <MapPin size={14} />
          Toronto, ON
        </p>

        <a
          href="mailto:m.ad.issa32@gmail.com"
          style={{
            display: 'inline-block',
            color: theme.accent,
            border: `1px solid ${theme.accent}`,
            padding: '12px 28px',
            borderRadius: '4px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}
        >
          m.ad.issa32@gmail.com
        </a>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          <a
            href="https://github.com/1IssaMohamed"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.textMuted }}
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/mohamed-adel-issa"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.textMuted }}
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:m.ad.issa32@gmail.com"
            style={{ color: theme.textMuted }}
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

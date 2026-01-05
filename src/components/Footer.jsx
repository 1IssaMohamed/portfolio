import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer style={{ padding: '30px 0', backgroundColor: theme.bgSecondary, transition: 'background-color 0.3s ease' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 50px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            color: theme.textMuted,
            marginBottom: '8px',
          }}
        >
          Designed & Built by Mohamed Issa
        </p>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: theme.textMuted,
            opacity: 0.7,
          }}
        >
          Built with React & Vite
        </p>
      </div>
    </footer>
  )
}

export default Footer

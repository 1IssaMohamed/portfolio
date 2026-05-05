import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, themeName, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const NavLink = ({ name, href }) => {
    return (
      <li>
        <a
          href={href}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: theme.textPrimary,
            textDecoration: 'none',
          }}
        >
          {name}
        </a>
      </li>
    )
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        zIndex: 1000,
        backgroundColor: scrolled 
          ? (themeName === 'dark' ? 'rgba(28, 28, 28, 0.95)' : 'rgba(250, 250, 250, 0.95)') 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'background-color 0.2s',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 50px)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: theme.accent,
            letterSpacing: '2px',
            textDecoration: 'none',
          }}
        >
          {/* Logo removed */}
        </a>

        <ul className="nav-links" style={{ display: 'flex', gap: 'clamp(10px, 2vw, 30px)', listStyle: 'none', overflowX: 'auto', whiteSpace: 'nowrap', paddingBottom: '4px' }}>
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${themeName === 'dark' ? 'light' : 'dark'} mode`}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            color: theme.textSecondary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {themeName === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

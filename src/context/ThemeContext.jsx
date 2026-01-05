import { createContext, useContext, useState, useEffect } from 'react'

/**
 * THEME CONTEXT - Best Practice
 * 
 * WHY: Instead of passing theme props through every component (prop drilling),
 * we use React Context to make theme available anywhere in the app.
 * 
 * We also persist the user's choice in localStorage so it remembers
 * their preference when they return.
 */

const ThemeContext = createContext()

// Theme color definitions
export const themes = {
  dark: {
    name: 'dark',
    bgPrimary: '#1c1c1c',
    bgSecondary: '#252525',
    bgTertiary: '#333333',
    textPrimary: '#f5f5f5',
    textSecondary: '#a8a8a8',
    textMuted: '#6b6b6b',
    accent: '#d4a574',
    accentTint: 'rgba(212, 165, 116, 0.1)',
    border: '#333333',
  },
  light: {
    name: 'light',
    bgPrimary: '#fafafa',
    bgSecondary: '#ffffff',
    bgTertiary: '#f0f0f0',
    textPrimary: '#1a1a1a',
    textSecondary: '#4a4a4a',
    textMuted: '#888888',
    accent: '#b8864a',
    accentTint: 'rgba(184, 134, 74, 0.1)',
    border: '#e0e0e0',
  },
}

export const ThemeProvider = ({ children }) => {
  // Check localStorage first, then system preference, default to dark
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved && themes[saved]) return saved
      
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light'
      }
    }
    return 'dark'
  }

  const [themeName, setThemeName] = useState(getInitialTheme)
  const theme = themes[themeName]

  // Persist theme choice
  useEffect(() => {
    localStorage.setItem('portfolio-theme', themeName)
    
    // Update meta theme-color for mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.setAttribute('content', theme.bgPrimary)
    }
    
    // Update body background for smooth transitions
    document.body.style.backgroundColor = theme.bgPrimary
    document.body.style.color = theme.textSecondary
  }, [themeName, theme])

  const toggleTheme = () => {
    setThemeName(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook for easy access
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

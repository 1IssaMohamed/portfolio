import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const CursorGlow = () => {
  const { themeName } = useTheme()
  const glowRef = useRef(null)
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let animationId
    const targetPos = { x: -100, y: -100 }
    const currentPos = { x: -100, y: -100 }
    const ease = 0.08

    const handleMouseMove = (e) => {
      targetPos.x = e.clientX
      targetPos.y = e.clientY
      if (!isVisible) setIsVisible(true)
    }

    const animate = () => {
      currentPos.x += (targetPos.x - currentPos.x) * ease
      currentPos.y += (targetPos.y - currentPos.y) * ease
      
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.x - 200}px, ${currentPos.y - 200}px)`
      }
      
      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [isVisible])

  // More visible glow colors
  const glowColor = themeName === 'dark' 
    ? 'rgba(212, 165, 116, 0.15)' 
    : 'rgba(184, 134, 74, 0.12)'

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        background: `radial-gradient(
          circle at center,
          ${glowColor} 0%,
          transparent 60%
        )`,
        willChange: 'transform',
      }}
    />
  )
}

export default CursorGlow

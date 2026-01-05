import { Component } from 'react'

/**
 * Error Boundary Component
 * 
 * WHY: React errors in one component can crash the entire app.
 * Error boundaries catch JavaScript errors anywhere in their child
 * component tree, log those errors, and display a fallback UI.
 * 
 * BEST PRACTICE: Wrap your main app or critical sections with
 * error boundaries to prevent full app crashes.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1c1c1c',
            color: '#f5f5f5',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ color: '#d4a574', marginBottom: '20px' }}>
            Oops! Something went wrong.
          </h1>
          <p style={{ color: '#a8a8a8', marginBottom: '30px', maxWidth: '500px' }}>
            An unexpected error occurred. Please refresh the page or contact me if the problem persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              padding: '12px 24px',
              backgroundColor: 'transparent',
              border: '1px solid #d4a574',
              color: '#d4a574',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        VisionPath AI
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/assessment">
          Assessment
        </Link>

        <Link to="/roadmap">
          Roadmap
        </Link>

        <Link to="/resources">
          Resources
        </Link>

        <Link to="/assistant">
  AI Assistant
</Link>
      </div>

      <button
        className="nav-button"
        onClick={() => navigate('/assessment')}
      >
        Get Started
      </button>

    </nav>
  )
}

export default Navbar
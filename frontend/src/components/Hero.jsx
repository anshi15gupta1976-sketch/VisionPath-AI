import { useNavigate } from 'react-router-dom'
import './Hero.css'

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-tagline">
          AI-POWERED CAREER GUIDANCE
        </div>

        <h1>
          Discover Your
          <span> Perfect Career Path</span>
        </h1>

        <p className="hero-description">
          Get personalized career guidance powered by AI.
          Explore careers, build your roadmap, and start learning.
        </p>

        <button
          className="hero-button"
          onClick={() => navigate('/assessment')}
        >
          Start Career Assessment
        </button>

      </div>
    </section>
  )
}

export default Hero
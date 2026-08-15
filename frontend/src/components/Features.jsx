import { useNavigate } from 'react-router-dom'
import './Features.css'

function Features() {
  const navigate = useNavigate()

  const features = [
    {
      title: 'AI Career Assessment',
      description:
        'Discover careers that match your interests, skills, personality, and strengths.',
      icon: '🎯',
      path: '/assessment'
    },
    {
      title: 'Personalized Roadmap',
      description:
        'Get a step-by-step learning roadmap based on your selected career goal.',
      icon: '🗺️',
      path: '/roadmap'
    },
    {
      title: 'Learning Resources',
      description:
        'Find useful YouTube videos, courses, and learning resources for your journey.',
      icon: '📚',
      path: '/resources'
    },
    {
      title: 'AI Career Assistant',
      description:
        'Ask questions and get instant AI-powered guidance about your career.',
      icon: '🤖',
      path: '/assistant'
    }
  ]

  return (
    <section className="features-section">

      <div className="features-header">

        <span>FEATURES</span>

        <h2>
          Everything You Need to Build Your Career
        </h2>

        <p>
          From career discovery to learning and interview preparation,
          VisionPath AI helps you at every step.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <button
              onClick={() => navigate(feature.path)}
            >
              Explore →
            </button>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Features
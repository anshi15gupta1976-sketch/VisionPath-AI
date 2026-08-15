import { useNavigate } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="not-found-page">

      <div className="not-found-content">

        <div className="not-found-icon">
          🔍
        </div>

        <p className="not-found-tag">
          PAGE NOT FOUND
        </p>

        <h1>
          Oops! This page doesn't exist.
        </h1>

        <p>
          The page you're looking for may have been moved,
          deleted, or the URL may be incorrect.
        </p>

        <button onClick={() => navigate('/')}>
          ← Back to Home
        </button>

      </div>

    </section>
  )
}

export default NotFound
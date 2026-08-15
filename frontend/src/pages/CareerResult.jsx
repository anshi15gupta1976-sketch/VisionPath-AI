import { useLocation, useNavigate } from 'react-router-dom'
import './CareerResult.css'

function CareerResult() {
  const navigate = useNavigate()
  const location = useLocation()

  const answers = location.state?.answers || []

  let technical = 0
  let creative = 0
  let business = 0
  let data = 0

  answers.forEach((answer) => {
    if (
      answer === 'Solving technical problems' ||
      answer === 'Logical thinking' ||
      answer === 'Software and technology' ||
      answer === 'Independently' ||
      answer === 'Become a Software Engineer'
    ) {
      technical++
    }

    if (
      answer === 'Designing and creating things' ||
      answer === 'Creativity' ||
      answer === 'Design and media' ||
      answer === 'In a creative team' ||
      answer === 'Become a UI/UX Designer'
    ) {
      creative++
    }

    if (
      answer === 'Working with people' ||
      answer === 'Communication' ||
      answer === 'Business and management' ||
      answer === 'With customers or people' ||
      answer === 'Become a Business Professional'
    ) {
      business++
    }

    if (
      answer === 'Analyzing data and information' ||
      answer === 'Problem solving' ||
      answer === 'Research and analytics' ||
      answer === 'With data and systems' ||
      answer === 'Become a Data/AI Professional'
    ) {
      data++
    }
  })

  let recommendedCareer = 'Software Engineer'

  if (
    creative >= technical &&
    creative >= business &&
    creative >= data
  ) {
    recommendedCareer = 'UI/UX Designer'
  } else if (
    business >= technical &&
    business >= creative &&
    business >= data
  ) {
    recommendedCareer = 'Business Professional'
  } else if (
    data >= technical &&
    data >= creative &&
    data >= business
  ) {
    recommendedCareer = 'Data / AI Professional'
  }

  return (
    <section className="result-page">

      <div className="result-container">

        <p className="result-tagline">
          YOUR CAREER RESULT
        </p>

        <h1>Your Recommended Career</h1>

        <div className="career-card">

          <h2>{recommendedCareer}</h2>

          <p>
            Based on your assessment responses, {recommendedCareer}
            could be a strong career path for you. This recommendation
            is based on your interests, skills, and preferred way of working.
          </p>

          <h3>Why this career?</h3>

          <ul>

            {recommendedCareer === 'Software Engineer' && (
              <>
                <li>Strong problem-solving and logical thinking</li>
                <li>Interest in technology and software development</li>
                <li>Ability to work independently on technical problems</li>
                <li>Strong career growth in the technology industry</li>
              </>
            )}

            {recommendedCareer === 'UI/UX Designer' && (
              <>
                <li>Strong creativity and visual thinking</li>
                <li>Interest in design and user experiences</li>
                <li>Ability to understand and communicate user needs</li>
                <li>Growing opportunities in digital product design</li>
              </>
            )}

            {recommendedCareer === 'Business Professional' && (
              <>
                <li>Strong communication and interpersonal skills</li>
                <li>Interest in business and management</li>
                <li>Ability to work with people and teams</li>
                <li>Wide opportunities across different industries</li>
              </>
            )}

            {recommendedCareer === 'Data / AI Professional' && (
              <>
                <li>Strong analytical and problem-solving skills</li>
                <li>Interest in data, research, and technology</li>
                <li>Ability to work with data-driven systems</li>
                <li>High demand for AI and data professionals</li>
              </>
            )}

          </ul>

          <div className="result-actions">

            <button
              className="roadmap-btn"
              onClick={() =>
                navigate('/roadmap', {
                  state: {
                    career: recommendedCareer
                  }
                })
              }
            >
              View Career Roadmap →
            </button>

            <button
  className="resources-btn"
  onClick={() =>
    navigate('/resources', {
      state: {
        career: recommendedCareer
      }
    })
  }
>
  Explore Learning Resources →
</button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default CareerResult
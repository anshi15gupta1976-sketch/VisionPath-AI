import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Assessment.css'

function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const navigate = useNavigate()

  const questions = [
    {
      question: 'Which type of work do you enjoy the most?',
      options: [
        'Solving technical problems',
        'Designing and creating things',
        'Working with people',
        'Analyzing data and information'
      ]
    },
    {
      question: 'Which skill describes you best?',
      options: [
        'Logical thinking',
        'Creativity',
        'Communication',
        'Problem solving'
      ]
    },
    {
      question: 'What kind of projects interest you?',
      options: [
        'Software and technology',
        'Design and media',
        'Business and management',
        'Research and analytics'
      ]
    },
    {
      question: 'How do you prefer to work?',
      options: [
        'Independently',
        'In a creative team',
        'With customers or people',
        'With data and systems'
      ]
    },
    {
      question: 'What is your main career goal?',
      options: [
        'Become a Software Engineer',
        'Become a UI/UX Designer',
        'Become a Business Professional',
        'Become a Data/AI Professional'
      ]
    }
  ]

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers]
    updatedAnswers[currentQuestion] = option
    setAnswers(updatedAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
     
 navigate('/result', { state: { answers } })
}
    
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <section className="assessment">
      <div className="assessment-container">

        <div className="assessment-header">
          <span>AI CAREER ASSESSMENT</span>

          <h1>Discover Your Career Path</h1>

          <p>
            Answer a few questions and let VisionPath AI
            help you discover careers that match your strengths.
          </p>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>

        <p className="question-number">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <div className="question-card">

          <h2>
            {questions[currentQuestion].question}
          </h2>

          <div className="options">

            {questions[currentQuestion].options.map(
              (option, index) => (

                <button
                  key={index}
                  className={
                    answers[currentQuestion] === option
                      ? 'option selected'
                      : 'option'
                  }
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>

              )
            )}

          </div>

          <div className="assessment-buttons">

            <button
              className="previous-btn"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>

            <button
              className="next-btn"
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
            >
              {currentQuestion === questions.length - 1
                ? 'Finish Assessment'
                : 'Next →'}
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Assessment
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { askCareerAssistant } from '../api'
import './CareerAssistant.css'

function CareerAssistant() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleAsk = async () => {
    if (!question.trim() || loading) return

    const userQuestion = question.trim()

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        type: 'user',
        text: userQuestion
      }
    ])

    setQuestion('')
    setLoading(true)

    try {
      console.log('1. Sending request:', userQuestion)

      // IMPORTANT:
      // Uses the live backend URL from api.js
      const data = await askCareerAssistant(userQuestion)

      console.log('2. Backend response:', data)

      // Add empty AI message
      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          text: ''
        }
      ])

      const answer =
        data.answer || 'Sorry, I could not generate an answer.'

      // Typing effect
      let currentText = ''

      for (let i = 0; i < answer.length; i++) {
        currentText += answer[i]

        await new Promise((resolve) =>
          setTimeout(resolve, 8)
        )

        setMessages((prev) => {
          const updated = [...prev]

          updated[updated.length - 1] = {
            type: 'ai',
            text: currentText
          }

          return updated
        })
      }

      console.log('3. Answer displayed')

    } catch (error) {
      console.error('Career Assistant Error:', error)

      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          text:
            'Sorry, I could not connect to the AI server. Please try again.'
        }
      ])
    } finally {
      setLoading(false)
      console.log('4. Loading finished')
    }
  }

  // Suggested question
  const askSuggestedQuestion = (text) => {
    setQuestion(text)
  }

  // Clear chat
  const clearChat = () => {
    setMessages([])
    setQuestion('')
    setCopiedIndex(null)
  }

  // Copy AI answer
  const copyAnswer = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text)

      setCopiedIndex(index)

      setTimeout(() => {
        setCopiedIndex(null)
      }, 2000)

    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  return (
    <section className="assistant-page">

      {/* Header */}

      <div className="assistant-header">

        <span>AI CAREER ASSISTANT</span>

        <h1>
          Ask VisionPath
          <span> AI</span>
        </h1>

        <p>
          Get instant guidance about careers, skills,
          projects, interviews, and learning.
        </p>

      </div>


      {/* Chat Container */}

      <div className="chat-container">

        {/* Chat Messages */}

        <div className="chat-messages">

          {/* Welcome */}

          {messages.length === 0 && (
            <div className="welcome-message">

              <div className="assistant-icon">
                🤖
              </div>

              <h2>
                Hi! I'm your Career Assistant 👋
              </h2>

              <p>
                Ask me anything about your career journey.
              </p>

            </div>
          )}


          {/* Messages */}

          {messages.map((message, index) => (

            <div
              key={index}
              className={
                message.type === 'user'
                  ? 'message user-message'
                  : 'message ai-message'
              }
            >

              {message.type === 'ai' ? (

                <div className="ai-content">

                  <ReactMarkdown>
                    {message.text}
                  </ReactMarkdown>

                  {/* Copy button */}

                  {message.text && (
                    <button
                      className="copy-button"
                      onClick={() =>
                        copyAnswer(message.text, index)
                      }
                    >
                      {copiedIndex === index
                        ? '✓ Copied'
                        : '📋 Copy'}
                    </button>
                  )}

                </div>

              ) : (

                message.text

              )}

            </div>

          ))}


          {/* Thinking */}

          {loading && (
            <div className="message ai-message thinking">

              <span>Thinking</span>

              <span className="dots">
                ...
              </span>

            </div>
          )}

        </div>


        {/* Suggested Questions */}

        {messages.length === 0 && (

          <div className="suggested-questions">

            <p>Try asking:</p>

            <button
              onClick={() =>
                askSuggestedQuestion(
                  'How can I become a Software Engineer?'
                )
              }
            >
              Software Engineer roadmap
            </button>

            <button
              onClick={() =>
                askSuggestedQuestion(
                  'What skills do I need for an AI Engineer job?'
                )
              }
            >
              AI Engineer skills
            </button>

            <button
              onClick={() =>
                askSuggestedQuestion(
                  'How should I prepare for technical interviews?'
                )
              }
            >
              Interview preparation
            </button>

          </div>

        )}


        {/* Clear Chat */}

        {messages.length > 0 && !loading && (

          <div className="clear-chat">

            <button onClick={clearChat}>
              🗑️ Clear Chat
            </button>

          </div>

        )}


        {/* Input */}

        <div className="chat-input">

          <input
            type="text"
            placeholder="Ask about your career..."
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === 'Enter') {
                handleAsk()
              }

            }}
          />

          <button
            onClick={handleAsk}
            disabled={loading}
          >
            {loading
              ? 'Thinking...'
              : 'Ask →'}
          </button>

        </div>

      </div>

    </section>
  )
}

export default CareerAssistant
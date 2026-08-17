const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

// ================================
// HOME ROUTE
// ================================

app.get('/', (req, res) => {
  res.json({
    message: 'VisionPath AI Backend is running 🚀'
  })
})

// ================================
// TEST ROUTE
// ================================

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Backend connection successful!'
  })
})

// ================================
// AI CAREER ASSISTANT
// ================================

app.post('/api/career-assistant', async (req, res) => {
  console.log('REQUEST RECEIVED:', req.body)

  try {
    const { question } = req.body

    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a question.'
      })
    }

    console.log('Sending request to Groq...')

    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: `You are VisionPath AI, a professional and friendly career guidance assistant.

Help students and beginners with:
- Career choices
- Software Engineering
- Artificial Intelligence
- Machine Learning
- Data Science
- Web Development
- Programming
- UI/UX
- Projects
- Resumes
- Interviews
- Job preparation
- Learning roadmaps

Rules:
1. Give practical and beginner-friendly advice.
2. For roadmaps, divide the answer into clear stages or months.
3. Use headings and bullet points.
4. Give examples when useful.
5. Keep answers organized and easy to read.
6. Mention practical projects whenever relevant.
7. Explain a technology first, then explain how to learn it.
8. Be encouraging but realistic.
9. Do not claim personal information about the user unless provided.
10. Do not mention Groq, Ollama, or the underlying AI model.`
            },
            {
              role: 'user',
              content: question
            }
          ],
          temperature: 0.7,
          max_tokens: 1000
        })
      }
    )

    console.log('Groq status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Groq error:', errorText)

      throw new Error(`Groq returned status ${response.status}`)
    }

    const data = await response.json()

    const answer = data.choices?.[0]?.message?.content

    if (!answer) {
      throw new Error('No answer received from Groq')
    }

    console.log('Groq response received')

    res.json({
      success: true,
      answer: answer
    })

  } catch (error) {
    console.error('AI ERROR:', error)

    res.status(500).json({
      success: false,
      message: 'AI service failed.',
      error: error.message
    })
  }
})

// ================================
// START SERVER
// ================================

const PORT = 5000

app.listen(PORT, () => {
  console.log(
    `VisionPath backend running on http://localhost:${PORT}`
  )
})
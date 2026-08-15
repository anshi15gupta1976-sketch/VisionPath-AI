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

    console.log('Sending request to Ollama...')

    const response = await fetch(
      'http://127.0.0.1:11434/api/generate',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          model: 'qwen3:4b',

          prompt: `
You are VisionPath AI, a professional and friendly career guidance assistant.

Help students with:
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
- Give practical beginner-friendly answers.
- Use clear headings.
- Use bullet points.
- Use numbered steps when useful.
- For roadmaps, divide the answer into months or stages.
- Mention practical projects when relevant.
- Avoid unnecessary long paragraphs.
- Be encouraging and realistic.

User Question:
${question}
          `,

          stream: true
        })
      }
    )

    console.log('Ollama status:', response.status)

    if (!response.ok) {
      throw new Error(`Ollama returned status ${response.status}`)
    }

    let answer = ''

    const reader = response.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { value, done } = await reader.read()

      if (done) break

      const chunk = decoder.decode(value, {
        stream: true
      })

      const lines = chunk.split('\n')

      for (const line of lines) {
        if (!line.trim()) continue

        try {
          const json = JSON.parse(line)

          if (json.response) {
            answer += json.response
          }

          if (json.done) {
            console.log('Ollama response completed')
          }

        } catch (error) {
          // Ignore incomplete JSON chunks
        }
      }
    }

    console.log('Final answer received')

    res.json({
      success: true,
      answer: answer.trim()
    })

  } catch (error) {

    console.error('OLLAMA ERROR:', error)

    res.status(500).json({
      success: false,
      message: 'Local AI service failed.',
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
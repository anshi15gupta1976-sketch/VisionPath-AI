const API_URL = 'http://localhost:5000'

export const testBackend = async () => {
  const response = await fetch(`${API_URL}/api/test`)

  if (!response.ok) {
    throw new Error('Backend test failed')
  }

  const data = await response.json()
  return data
}

export const askCareerAssistant = async (question) => {
  const response = await fetch(`${API_URL}/api/career-assistant`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question: question
    })
  })

  if (!response.ok) {
    throw new Error('Career Assistant request failed')
  }

  const data = await response.json()
  return data
}
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Assessment from './pages/Assessment'
import CareerResult from './pages/CareerResult'
import CareerRoadmap from './pages/CareerRoadmap'
import LearningResources from './pages/LearningResources'
import CareerAssistant from './pages/CareerAssistant'
import NotFound from './pages/NotFound'

import { useEffect } from 'react'
import { testBackend } from './api'

function App() {

  useEffect(() => {
    testBackend()
      .then((data) => {
        console.log('Backend:', data)
      })
      .catch((error) => {
        console.error('Backend connection error:', error)
      })
  }, [])

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
            </>
          }
        />

        <Route
          path="/assessment"
          element={<Assessment />}
        />

        <Route
          path="/result"
          element={<CareerResult />}
        />

        <Route
          path="/roadmap"
          element={<CareerRoadmap />}
        />

        <Route
          path="/resources"
          element={<LearningResources />}
        />

        <Route
          path="/assistant"
          element={<CareerAssistant />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  )
}

export default App
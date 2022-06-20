import { createContext, useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProgressContext = createContext()

const StepReducer = ({ step, points }, { type }) => {
  switch (type) {
    case 'increment': {
      return { step: step + 1, points: points + 10 }
    }
    case 'update': {
      const storage = JSON.parse(localStorage.getItem('modulo1'))
      return { step: storage.step, points: storage.points }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

function ProgressProvider({ children }) {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(StepReducer, {
    step: 0,
    points: 0
  })

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('modulo1'))

    if (storage != '' && storage != null) {
      if (storage.step === 8) {
        localStorage.clear()
      }
    }
  }, [])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('modulo1'))) dispatch({ type: 'update' })
  }, [])

  useEffect(() => {
    if (state.step > 0) {
      localStorage.setItem('modulo1', JSON.stringify(state))
    }
  }, [state, navigate])

  const value = { state, dispatch }
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export { ProgressProvider, ProgressContext }

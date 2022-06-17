import './styles/transition.scss'
import Routes from './routes'
import { ProgressProvider } from './context/progress'
import { HashRouter } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <ProgressProvider>
          <Routes />
        </ProgressProvider>
      </HashRouter>
    </React.StrictMode>

  )
}

export default App

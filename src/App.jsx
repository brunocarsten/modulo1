import './styles/transition.scss'
import Routes from './routes'
import { ProgressProvider } from './context/progress'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <Routes />
      </ProgressProvider>
    </BrowserRouter>
  )
}

export default App

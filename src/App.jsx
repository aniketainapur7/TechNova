import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedLanding from './pages/AnimatedLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AnimatedLanding />
  )
}

export default App

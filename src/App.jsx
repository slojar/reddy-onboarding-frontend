import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameInput from './components/NameInput'
import Background from './Bubbles/Background'
import Leaderboard from './components/LeaderBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<>
          <Background/>
     <NameInput/>
        </>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        {/* <Route path="/leaderboard" element={<Dashboard/>} /> */}
        {/* Add more routes here */}
      </Routes>
    </Router>

    </>
  )
}

export default App

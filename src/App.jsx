import { useState } from 'react'
import ParticlesBackground from './components/background/Background'
import Welcome from './components/Welcome/Welcome'
import './index.css'
import WelcomePage from './pages/welcomePage'
import { Outlet } from 'react-router'

function App() {
  

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App

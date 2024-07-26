import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './components/menu'
import Hero from './components/hero'
import Card from './components/cards'
import CTA from './components/cta'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu/>
    <Hero/>
    <Card/>
    <CTA/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

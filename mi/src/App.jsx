import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className="container">
      <div className="left">
        <Formulario />
      </div>
      <div className="right">
        <Listado />
      </div>
    </div>
    </>
  )
}

export default App

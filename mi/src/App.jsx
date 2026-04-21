import { useEffect, useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  const [citas, setCitas] = useState(() => {
    return JSON.parse(localStorage.getItem("citas")) || [];
  });

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario setCitas={setCitas} citas={citas} />
          </div>
          <div className="one-half column">
            <Listado citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
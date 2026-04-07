import  {useState} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {  

  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: 'Bobby',
      propietario: 'Ana',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    },
    {
      id: 2,
      mascota: 'Luna',
      propietario: 'Carlos',
      fecha: '2021-09-10',
      hora: '10:00',
      sintomas: 'No come'
    }
  ])

  return (
    <>
    <Header />
    <div className="container">
      <div class="row">
        <div className="one-half column">
          <Formulario />
        </div>
        <div className="one-half column">
          <Listado citas={citas} />
        </div>
      </div>
    </div>
    </>
  )
}

export default App

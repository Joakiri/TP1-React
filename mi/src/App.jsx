import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {  

  return (
    <>
    <Header />
    <div className="container">
      <div class="row">
        <div className="one-half column">
          <Formulario />
        </div>
        <div className="one-half column">
          <Listado />
        </div>
      </div>
    </div>
    </>
  )
}

export default App

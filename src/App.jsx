import './App.css'
import logguito from './imagenes/marca-dario.png'
import Tarea from './componentes/Tarea'
import TareaFormulario from './componentes/TareaFormulario'

function App() {

   return (
      <div className="aplicacion-tareas">
         <div className="freecodecamp-logo-contenedor">
            <img src={logguito}
               alt="freecodecamp logo"
               className="freecodecamp-logo" />
         </div>
         <div className="tareas-lista-principal">
            <h1>Mis Tareas</h1>
            <Tarea texto='Aprender React' />
            <TareaFormulario className="tarea-formulario"/>
         </div>
      </div>
   )
}

export default App

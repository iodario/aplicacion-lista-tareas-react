import React from 'react';
import '../estilos/TareaFormulario.css'

function TareaFormulario(props) {
    return (
        <form className="tarea-formulario">
            <input
                type="text"
                className="tarea-input"
                placeholder="Escribe una tarea"
                name="texto"
            />
            <button className="tarea-boton">
                Agregar tarea
            </button>
        </form>
    )
}

export default TareaFormulario;
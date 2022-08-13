import React, { useState } from 'react';
import '../estilos/TareaFormulario.css'

//cuando el usuario esta escribiendo tenemos que manejar el cambio del formulario

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {  //funcion que define que hacer ante un cambio
        // console.log('Escribiendo...');
        // console.log(e.target.value);
        setInput(e.target.value);        
    }

    const manejarEnvio = e => {  //funcion que define que hacer ante el envio del formulario
        e.preventDefault();
        console.log("Enviando formulario");
        const tareaNueva = {
            id: '34545',
            texto: input,
            completada: false
        }
    }

    return (
        <form 
        className="tarea-formulario"
        onSubmit = { manejarEnvio }>
            <input
                type="text"
                className="tarea-input"
                placeholder="Escribe una tarea"
                name="texto"
                onChange= { manejarCambio}
            />
            <button className="tarea-boton">
                Agregar tarea
            </button>
        </form>
    )
}

export default TareaFormulario;
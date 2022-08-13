import React from 'react';
import '../estilos/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={ completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className="tarea-texto"
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}>
               <AiOutlineCloseCircle className='tarea-icono'/> 
            </div>
            
        </div>
    )
}


export default Tarea;


//estamos pasando ese className del componente AiOutlineCloseCircle como un prop
// {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}
// aqui utilizamos un op ternario para asignar, si completada es true DOS clases, si es false UNA clase

//tomamos un id como identificador de la tarea
//tenemos un texto, que es lo que se va a mostrar
//tenemos un condicional completada
//completarTarea es una funcion que nos permite pasar la tarea como completada
//eliminarTarea es una funcion que nos permite eliminar la tarea
// de esta forma el componente Tarea NOS QUEDA CON 5 PROPS

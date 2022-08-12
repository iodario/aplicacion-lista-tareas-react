import React from 'react';
import '../estilos/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada }) {
    return (
        <div className={ completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"> 
               <AiOutlineCloseCircle className='tarea-icono'/> 
            </div>
            
        </div>
    )
}


export default Tarea;


//estamos pasando ese className del componente AiOutlineCloseCircle como un prop
// {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}
// aqui utilizamos un op ternario para asignar, si completada es true DOS clases, si es false UNA clase


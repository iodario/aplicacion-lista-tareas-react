import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../estilos/ListaDeTareas.css'
import Tarea from './Tarea.jsx'

function ListaDeTareas() {
    // este componente va a tener un estado especifico, que va a ser un Array
    // con las tareas que hemos agregado hasta ese mommento
    // para ello utiizamos un hook, llamado useState
    // const [estado que queremos mantener , una funcion que utilizamos para actualizar ese estado]
    // [] valor inicial de tareas
    // como mostrar una lista de componentes renderizados 
    // creamos un arreglo de objetos

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        // console.log("Tarea agregada");
        // console.log(tarea);
        if (tarea.texto.trim()) {     //verificamos que la tarea no esta vacia
            tarea.texto = tarea.texto.trim();   //quitamos los espacios
            const tareasActualizadas = [tarea, ...tareas];  //agregamos la tarea nueva al principio
            setTareas(tareasActualizadas);   //actualizamos el estado
        }
    }

    const eliminarTarea = id => {
        const tareasFiltradas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasFiltradas);
    } 

    const completarTarea = id => {
        const tareasModificadas = tareas.map(tarea => {
            if ( tarea.id === id ){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasModificadas);
    }

    return (
        <>
            <TareaFormulario onSubmit={ agregarTarea } />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) => // cada tarea se va a representar como un objeto en el arreglo tareas, y para cada uno de ellos vamos a crear un componente <Tarea/>
                        <Tarea
                            //Warning: Each child in a list should have a unique "key" prop. https://reactjs.org/link/warning-keys 
                            key = {tarea.id}
                            id = {tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea = { eliminarTarea }
                            completarTarea = { completarTarea }
                        />
                    )
                }
            </div>
        </>
    );



}

export default ListaDeTareas;
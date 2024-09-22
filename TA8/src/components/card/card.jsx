import style from './card.module.css';
import PropTypes from 'prop-types';
import { CircleX, SquarePen } from 'lucide-react';
import { useState } from 'react';


export function Card({ tarea, eliminarTarea, actualizarTarea }) {
    const [editarTarea, setEditarTarea] = useState(false);
    const [tareaEditada, setTareaEditada] = useState('');

    const iniciarEdicion = () => {
        setTareaEditada(tarea);
        setEditarTarea(true);
    }

    const guardarTarea = () => {
        actualizarTarea(tareaEditada);
        console.log(`Tarea editada: ${tareaEditada}`)
        setEditarTarea(false);
    }

    return (
    <li className={style.taskCard}>
        {
            editarTarea ? (
                <>
                    <input type="text" value={tareaEditada} onChange={(e) => setTareaEditada(e.target.value)} className={style.taskInput}/>
                    <button onClick={guardarTarea}>Guardar</button>
                </>
            ) : (
                <>
                    {tarea}
                    <SquarePen className={`${style.iconoEditar} ${style.botonEnHover}`} onClick={iniciarEdicion}/>
                    <CircleX className={`${style.iconoEliminar} ${style.botonEnHover}`} onClick={eliminarTarea}/>
                </>
            )
        }   
    </li>
    )
};

Card.propTypes = {
    tarea: PropTypes.string.isRequired,
    eliminarTarea: PropTypes.func.isRequired,
    actualizarTarea: PropTypes.func.isRequired,
};
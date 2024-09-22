import './App.css';
import { Card } from './components/card/card.jsx';
import './components/card/card.module.css';
import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const addTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  }

  const actualizarTarea = (index, nuevaTarea) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index] = nuevaTarea;
    console.log(`Nueva tarea: ${nuevaTarea}`)
    setTareas(nuevasTareas);
  }

  return (
    <>
      <div>
        <form onSubmit={addTarea}>
          <input type="text" className="taskInput" id="taskInput" placeholder="Ingresa una tarea..." value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}></input>
          <button type="submit">Agregar</button>
        </form>
      </div>
      <div>
        <ul>
          {tareas.map((tarea, index) => (
            <Card key={index} tarea={tarea} eliminarTarea={() => eliminarTarea(index)} value={nuevaTarea} actualizarTarea={(nuevaTarea) => actualizarTarea(index, nuevaTarea)}/>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

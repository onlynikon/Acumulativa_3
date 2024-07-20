import { useState } from "react";
import { Card } from "./Card";

export const App = () => {
  const [tareas, setTareas] = useState([]);
  const [formObject, setformObject] = useState({
    titulo: '',
    descripcion: '',
    is_checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformObject((prevFormObject) => ({
      ...prevFormObject,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDelete = (index) => {
    const newTareas = tareas.filter((_, i) => i !== index);
    setTareas(newTareas);
  };

  const save_submit = (e) => {
    e.preventDefault();
    setTareas([...tareas, formObject]);
    setformObject({
      titulo: '',
      descripcion: '',
      is_checked: false,
    });
    console.log(tareas);
  };

  return (
    <div className="container">
      <h1>POST It Simulator!</h1>
      <div>
        <form onSubmit={save_submit} style={{ width: '100%', display: 'flex', gap: '5rem' }}>
          <div>
            <input
              type="text"
              placeholder="Título"
              value={formObject.titulo}
              name="titulo"
              onChange={handleChange}
              id="titulo"
            />
          </div>
          <div>
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción"
              required
              value={formObject.descripcion}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="is_checked"
              name="is_checked"
              checked={formObject.is_checked}
              onChange={handleChange}
            />
            <label htmlFor="is_checked">Importante!</label>
          </div>
          <button
            type="submit"
            style={{ backgroundColor: '#111', color: 'white', fontWeight: 'bold' }}
          >
            AGREGAR
          </button>
        </form>
      </div>
      <div>
        <h2>LISTADO COMPLETO</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {tareas.map((task, index) => (
            <Card key={index} tarea={task} index={index} handleDelete={handleDelete}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;

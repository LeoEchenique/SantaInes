import './App.css';
import React, { useState } from 'react';

export default function App() {

  const [alumno, setAlumno] = useState({
    alumno: "",
    nivel: ""
  })

  function onChange(e) {

    if (e.target.name === "alumno") {
      setAlumno({
        ...alumno,
        alumno: e.target.value,
      })
    }
    else {
      setAlumno({
        ...alumno,
        nivel: e.target.value,
      })
    }
  }

  return (
    <div className="App">
      <h1>saffsfafs</h1>

      <div>
        <ul>
          <label>Alumno: </label>
          <input type="text" value={alumno.alumno} name="alumno" onChange={(e) => onChange(e)}></input>
          <label>Nivel: </label>

          <input type="text" value={alumno.nivel} onChange={(e) => onChange(e)}></input>
        </ul>
        <select name="selectLevel">
          <option>Select</option>
          <option>Juniors 1</option>
        </select>
      </div>

    </div>
  );
}



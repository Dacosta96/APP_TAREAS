import React from "react";
import logo1 from "../img/logoOK.png";
import logo2 from "../img/logo X.png";

function Tareas(props) {
  return (
    <li className="listaTareas">
      <p className={`tarea ${props.completed ? "tareasubrayada" : ""}`}>
        {props.text}
      </p>

      <img
        className={`tareaCompletada ${
          props.completed && "tareaCompletada-marcada"
        }`}
        src={logo1}
        alt="OK"
        onClick={props.onComplete}
      />
      <img
        className={`eliminarTarea ${
          props.completed ? "" : "eliminarTarea-marcada"
        }`}
        src={logo2}
        alt="Borrar"
        onClick={props.delateTarea}
      />
    </li>
  );
}

export { Tareas };

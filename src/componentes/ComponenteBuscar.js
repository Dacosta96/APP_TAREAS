import React from "react";
import "../estilos.css";

function ComponenteBuscar({ textoBuscador, settextoBuscador }) {
  return (
    <div className="buscador">
      <input
        onChange={(event) => {
          settextoBuscador(event.target.value);
        }}
        type="text"
        placeholder="Buscar tarea"
      />
    </div>
  );
}

export { ComponenteBuscar };

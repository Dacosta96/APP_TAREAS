import React from "react";
import "../estilos.css";
import ReactDOM from "react-dom";

function ComponenteModal({ setOpenModal, addTarea }) {
  const [agregarTarea, setagregarTarea] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (agregarTarea.length > 0) {
      addTarea(agregarTarea);
      setOpenModal(false);
    }
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setagregarTarea(event.target.value);
  };
  return ReactDOM.createPortal(
    <div className="componenteModal">
      <form onSubmit={onSubmit}>
        <h1 className="tituloForm"> Crea tu nueva tarea </h1>
        <textarea
          className="form"
          placeholder="Ej: preparar el almuerzo"
          value={agregarTarea}
          onChange={onChange}
        />

        <div className="botones">
          <button className="botoncancelar" type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button className="botonagregar" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("modal")
  );
}

export { ComponenteModal };

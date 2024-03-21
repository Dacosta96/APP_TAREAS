import "../estilos.css";

function ComponenteTitulo(props) {
  let textoBienvenida = "";

  if (props.totaltareas === 0) {
    textoBienvenida = "Comienza por agregar una tarea";
  } else if (props.totaltareas > 0 && props.totaltareas !== props.ntareas) {
    textoBienvenida =
      "Has completado " +
      props.ntareas +
      " de " +
      props.totaltareas +
      " tareas";
  } else {
    textoBienvenida = "Felicidades completaste todas tus tareas";
  }

  return <h1 className="titulo">{textoBienvenida}</h1>;
}

export { ComponenteTitulo };

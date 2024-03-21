import React from "react";
import "./estilos.css";
import { Tareas } from "./componentes/Tareas";
import { ComponenteTitulo } from "./componentes/ComponenteTitulo";
import { ComponenteBuscar } from "./componentes/ComponenteBuscar";
import { ComponenteLista } from "./componentes/ComponenteLista";
import { ComponenteBoton } from "./componentes/ComponenteBoton";
import { ComponenteTituloPrincipal } from "./componentes/ComponenteTituloPrincipal";
import img1 from "./img/img inicio.png";
import imgLogo from "./img/loading-loader.gif";
import { ComponenteModal } from "./componentes/ComponenteModal";
import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {
  const [contandorTareas, setcontandoTareas, loading, error] = useLocalStorage(
    "tareas_v1",
    []
  ); // contador tareas
  const [textoBuscador, settextoBuscador] = React.useState(""); // lee estados-eventos, recibe lo escrito por el usuario

  const tareasCompletas = contandorTareas.filter(
    (tarea) => tarea.completed
  ).length; // contar numero de tareas existentes
  const buscarTareas = contandorTareas.filter((tarea) =>
    tarea.text.toLowerCase().includes(textoBuscador.toLowerCase())
  ); // filtrar tareas

  const completarTarea = (text) => {
    // cambiar estados de completado al hacer clik en OK
    const nuevasTarea = [...contandorTareas]; // crear copia del array de tareas
    const tareaid = nuevasTarea.findIndex(
      // crear identificador ID
      (contandorTareas) => contandorTareas.text === text // comparar ID
    );
    nuevasTarea[tareaid].completed = true; // realizar cambio de estado
    setcontandoTareas(nuevasTarea);
  };

  const borrarTarea = (text) => {
    const nuevasTarea = [...contandorTareas];
    const tareaid = nuevasTarea.findIndex(
      (contandorTareas) => contandorTareas.text === text
    );
    nuevasTarea.splice(tareaid, 1); // borrar tarea
    setcontandoTareas(nuevasTarea);
  };

  const addTarea = (text) => {
    const nuevasTarea = [...contandorTareas];
    nuevasTarea.push({
      text,
      completed: false,
    });
    setcontandoTareas(nuevasTarea);
  };

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <React.Fragment>
      <div className="body1">
        <div className="encabezado">
          <ComponenteTituloPrincipal />
          <ComponenteTitulo
            ntareas={tareasCompletas}
            totaltareas={contandorTareas.length}
          />
        </div>
        <ComponenteBuscar
          textoBuscador={textoBuscador}
          settextoBuscador={settextoBuscador}
        />
        <div className="container">
          <ComponenteLista>
            <div className="efectosCargar">
              {loading && (
                <img className="loading" src={imgLogo} alt="LOADING" />
              )}
              {error && <h1> Error indesperado!! </h1>}
            </div>
            {buscarTareas.map((todo) => (
              <Tareas
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completarTarea(todo.text)}
                delateTarea={() => borrarTarea(todo.text)}
              />
            ))}
          </ComponenteLista>
          <div className="container2">
            <img className="imginicio" src={img1} alt="imagen" />

            <ComponenteBoton setOpenModal={setOpenModal} />
            {openModal && (
              <ComponenteModal
                setOpenModal={setOpenModal}
                addTarea={addTarea}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

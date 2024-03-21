import "../estilos.css";

function ComponenteLista(props) {
  return <ul className="lista">{props.children}</ul>;
}

export { ComponenteLista };

import { useEffect, useState } from "react";

function ListaDinamica() {
  const [lista, setLista] = useState(["Perro", "Gato", "Leon"]);
  const [nuevoElemento, setNuevoElemento] = useState("");
  const [mensaje, setMensaje] = useState("");

  //useEfect para mostrar un mensaje cuando la lista cambia
  useEffect(() => {
    if (lista.length === 0) {
      setMensaje("La lista esta vacia.");
    } else {
      setMensaje(`La lista ahora tiene ${lista.length} elementos.`);
    }

    //limpiamos el mensaje despues de 3 segundos
    const timer = setTimeout(() => {
      setMensaje("");
    }, 3000);

    return () => clearTimeout(timer); //Limpiar el temporizador al desmontar el componente
  }, [lista]);

  //funcion para agregar un nuevo elemento
  const agregarElemento = () => {
    if (nuevoElemento.trim() !== "" && !lista.includes(nuevoElemento)) {
      setLista([...lista, nuevoElemento]); //agrega el nuevo elemento
      setNuevoElemento(""); //limpia el input
    } else {
      alert("El elemento ya existe o esta vacio");
    }
  };

  const eliminarElemento = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index); //filtra para eliminar el elemento por indece
    setLista(nuevaLista);
  };

  return (
    <>
      <div>
        <h1>Lista Dinamica</h1>
        {mensaje && <p>{mensaje}</p>}
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              {item}
              {""}
              <button onClick={() => eliminarElemento(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Agrega un elemento"
          value={nuevoElemento}
          onChange={(e) => setNuevoElemento(e.target.value)}
        />

        <button onClick={agregarElemento}> Agregar</button>
      </div>
    </>
  );
}

export default ListaDinamica;

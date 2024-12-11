import { useEffect, useState } from "react";

function BuscardorDinamico() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [elementos, setElementos] = useState([
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Vite",
    "Node.js",
  ]);
  const [nuevoElemento, setNuevoElemento] = useState("");

  useEffect(() => {
    if (busqueda === "") {
      setResultados(elementos);
    } else {
      const filtrados = elementos.filter((elemento) =>
        elemento.toLowerCase().includes(busqueda.toLowerCase())
      );
      setResultados(filtrados);
    }
  }),
    [busqueda, elementos];

  //funcion para agregar nuevas palabras a la lista
  const agregarElemento = () => {
    if (nuevoElemento.trim() !== "" && !elementos.includes(nuevoElemento)) {
      setElementos([...elementos, nuevoElemento]); //agrega nueva palabra
      setNuevoElemento(""); //limpiar el campo de texto
    } else {
      alert("El elemento ya existe o esta vacio");
    }
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Buscador Dinamico</h1>
        <input
          type="text"
          placeholder="Escribe para buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16",
            marginBottom: "20px",
            width: "250px",
          }}
        />
        {/*Mostrar resultados */}
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {resultados.length > 0 ? (
            resultados.map((resultado, index) => (
              <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
                {resultado}
              </li>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </ul>

          {/*Campo para agregar nuevas palabras */}
        <div style={{marginTop: "20px"}}>
          <input 
          type="text"
          placeholder="Nueva Palabra"
          value={nuevoElemento}
          onChange={(e) => setNuevoElemento(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
          />

          <button 
          onClick={agregarElemento}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
}

export default BuscardorDinamico;

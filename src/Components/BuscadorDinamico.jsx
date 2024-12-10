import { useEffect, useState } from "react";

function BuscardorDinamico() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  const elementos = ["React", "JavaScript", "CSS", "HTML", "Vite", "Node.js"];

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
    [busqueda];

  return (
    <>
      <div>
        <h1>Buscador Dinamico</h1>
        <input
          type="text"
          placeholder="Escribe para buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <ul>
          {resultados.length > 0 ? (
            resultados.map((resultado, index) => (
              <li key={index}>{resultado}</li>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default BuscardorDinamico;

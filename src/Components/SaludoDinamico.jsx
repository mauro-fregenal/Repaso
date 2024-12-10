import { useEffect, useState } from "react";
import Contador from "./Contador";

function SaludoDinamico() {
  const [saludo, setSaludo] = useState(""); 

  useEffect(() => {
    document.title = saludo ? `Hola, ${saludo}` : "Ingresa tu nombre";
  }, [saludo]);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", color: "red" }}>Saludo Dinamico</h1>
        <input
          type="text"
          placeholder="Ingresa tu Nombre"
          onChange={(e) => setSaludo(e.target.value)}
        />
        <h2>Hola, {saludo}</h2>
        {saludo.length > 5 && <p>Tu nombre es muy largo</p>}
      </div>
    </>
  );
}
export default SaludoDinamico;


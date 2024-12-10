import { useEffect, useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

 useEffect (() => {
    if (contador === 10) {
        alert("El contador llego a 10")
    }
 }, [contador]) 
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Contador</h1>
        <h2>El Conteo va en: {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        <button onClick={() => setContador(0)}>Restablecer</button>
      </div>
    </>
  );
}

export default Contador;

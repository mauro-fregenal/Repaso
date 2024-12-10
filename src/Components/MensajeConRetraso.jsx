import { useEffect, useState } from "react";

function MensajeConRetraso() {
  const [mensaje, setMensaje] = useState("¡Bienvenido a mi Sitio Web!");

  const [tiempo, setTiempo] = useState(0);
  const [temporizadorActivo, setTemporazidoActivo] = useState(false);

  useEffect(() => {
    let timer;
    if (temporizadorActivo) {
      timer = setTimeout(() => {
        setMensaje(`¡Han pasado ${tiempo} `);
        setTemporazidoActivo(false); //Detener temporizador al completar
      }, tiempo * 1000);
    }
    return () => clearTimeout(timer);
  }, [temporizadorActivo, tiempo]); // se ejecuta cuando cambian TemporizadorActivo o tiempo

  const manejarInicio = () => {
    setMensaje("¡Esperando...!");
    setTemporazidoActivo(true);
  };

  const manejarReinicio = () => {
    setMensaje("¡Biemvenio a mi sitio!");
    setTemporazidoActivo(false);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>{mensaje}</h1>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "10px" }}>
            Tiempo de espera (segundos):
          </label>
          <input
            type="number"
            value={tiempo}
            onChange={(e) => setTiempo(Number(e.target.value))}
            min="1"
            style={{ padding: "8px", fontSize: "16px", width: "60px" }}
          />
        </div>
        <button
          onClick={manejarInicio}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Iniciar
        </button>

        <button
          onClick={manejarReinicio}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reiniciar
        </button>
      </div>
    </>
  );
}

export default MensajeConRetraso;

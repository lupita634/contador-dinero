import { useState } from "react";
import "./App.css";

export default function ContadorDinero2() {
  const [monedas, setMonedas] = useState({
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
  });

  const [billetes, setBilletes] = useState({
    20: 0,
    50: 0,
    100: 0,
    200: 0,
    500: 0,
    1000: 0,
  });

  const handleChange = (tipo, valor, cantidad) => {
    if (tipo === "monedas") {
      setMonedas({ ...monedas, [valor]: Number(cantidad) });
    } else {
      setBilletes({ ...billetes, [valor]: Number(cantidad) });
    }
  };

  const totalMonedas = Object.entries(monedas).reduce(
    (acc, [valor, cantidad]) => acc + valor * cantidad,
    0
  );

  const totalBilletes = Object.entries(billetes).reduce(
    (acc, [valor, cantidad]) => acc + valor * cantidad,
    0
  );

  const totalGeneral = totalMonedas + totalBilletes;

  const reiniciar = () => {
    setMonedas({ 1: 0, 2: 0, 5: 0, 10: 0, 20: 0 });
    setBilletes({ 20: 0, 50: 0, 100: 0, 200: 0, 500: 0, 1000: 0 });
  };

  return (
    <div className="app-container">
      <h1 className="titulo">💰 Programa Contabilizador</h1>

      <div className="contenedor">
        {/* MONEDAS */}
        <div className="seccion">
          <h2>🪙 Contador de Monedas</h2>
          {Object.keys(monedas).map((valor) => (
            <div key={valor} className="fila">
              <label>${valor}</label>
              <input
                type="number"
                min="0"
                value={monedas[valor]}
                onChange={(e) =>
                  handleChange("monedas", valor, e.target.value)
                }
              />
              <span>= ${valor * monedas[valor]}</span>
            </div>
          ))}
          <h3>Total Monedas: ${totalMonedas}</h3>
        </div>

        {/* BILLETES */}
        <div className="seccion">
          <h2>💵 Contador de Billetes</h2>
          {Object.keys(billetes).map((valor) => (
            <div key={valor} className="fila">
              <label>${valor}</label>
              <input
                type="number"
                min="0"
                value={billetes[valor]}
                onChange={(e) =>
                  handleChange("billetes", valor, e.target.value)
                }
              />
              <span>= ${valor * billetes[valor]}</span>
            </div>
          ))}
          <h3>Total Billetes: ${totalBilletes}</h3>
        </div>
      </div>

      <div className="total-general">
        💲 Total General: ${totalGeneral}
      </div>

      <button className="btn-reiniciar" onClick={reiniciar}>
        🔄 Reiniciar
      </button>
    </div>
  );
}

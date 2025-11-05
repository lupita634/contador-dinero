import React, { useState } from 'react'
import './App.css'

const ContadorDinero: React.FC = () => {
  // Estado para monedas y billetes
  const [monedas, setMonedas] = useState({
    1: 0, 2: 0, 5: 0, 10: 0, 20: 0
  })
  const [billetes, setBilletes] = useState({
    20: 0, 50: 0, 100: 0, 200: 0, 500: 0, 1000: 0
  })

  // Cálculos
  const totalMonedas = Object.entries(monedas).reduce(
    (acc, [den, cant]) => acc + Number(den) * cant, 0
  )
  const totalBilletes = Object.entries(billetes).reduce(
    (acc, [den, cant]) => acc + Number(den) * cant, 0
  )
  const totalGeneral = totalMonedas + totalBilletes

  return (
    <div className="contenedor">
      <h1 className="titulo">💰 Programa Contabilizador</h1>

      <div className="tablas">
        {/* Contador de Monedas */}
        <div className="caja">
          <h2>🪙 Contador de Monedas</h2>
          {Object.keys(monedas).map((den) => (
            <div key={den} className="fila">
              <label>${den}:</label>
              <input
                type="number"
                min="0"
                value={monedas[den as keyof typeof monedas]}
                onChange={(e) =>
                  setMonedas({
                    ...monedas,
                    [den]: parseInt(e.target.value || '0'),
                  })
                }
              />
              <span>= ${Number(den) * monedas[den as keyof typeof monedas]}</span>
            </div>
          ))}
          <p className="total">Total Monedas: ${totalMonedas}</p>
        </div>

        {/* Contador de Billetes */}
        <div className="caja">
          <h2>💵 Contador de Billetes</h2>
          {Object.keys(billetes).map((den) => (
            <div key={den} className="fila">
              <label>${den}:</label>
              <input
                type="number"
                min="0"
                value={billetes[den as keyof typeof billetes]}
                onChange={(e) =>
                  setBilletes({
                    ...billetes,
                    [den]: parseInt(e.target.value || '0'),
                  })
                }
              />
              <span>= ${Number(den) * billetes[den as keyof typeof billetes]}</span>
            </div>
          ))}
          <p className="total">Total Billetes: ${totalBilletes}</p>
        </div>
      </div>

      <h2 className="total-general">💸 Total General: ${totalGeneral}</h2>
    </div>
  )
}

export default ContadorDinero

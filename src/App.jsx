import { useState } from 'react'
import './App.css'

function App() {
  const monedas = [1, 2, 5, 10, 20]
  const billetes = [20, 50, 100, 200, 500, 1000]

  const [cantidadesMonedas, setCantidadesMonedas] = useState(Array(monedas.length).fill(0))
  const [cantidadesBilletes, setCantidadesBilletes] = useState(Array(billetes.length).fill(0))

  const handleChangeMoneda = (index, value) => {
    const nuevas = [...cantidadesMonedas]
    nuevas[index] = parseInt(value) || 0
    setCantidadesMonedas(nuevas)
  }

  const handleChangeBillete = (index, value) => {
    const nuevas = [...cantidadesBilletes]
    nuevas[index] = parseInt(value) || 0
    setCantidadesBilletes(nuevas)
  }

  const totalMonedas = monedas.reduce((acc, val, i) => acc + val * cantidadesMonedas[i], 0)
  const totalBilletes = billetes.reduce((acc, val, i) => acc + val * cantidadesBilletes[i], 0)
  const totalGeneral = totalMonedas + totalBilletes

  return (
    <div className="app-container">
      <h1 className="titulo">💰 Programa Contabilizador 💰</h1>

      <div className="contenedor">
        {/* Contador de Monedas */}
        <div className="card">
          <h2>Contador de Monedas</h2>
          {monedas.map((valor, i) => (
            <div key={i} className="fila">
              <span>${valor}</span>
              <input
                type="number"
                min="0"
                value={cantidadesMonedas[i]}
                onChange={(e) => handleChangeMoneda(i, e.target.value)}
              />
              <span className="igual">=</span>
              <span className="resultado">${valor * cantidadesMonedas[i]}</span>
            </div>
          ))}
          <div className="total">Total: ${totalMonedas}</div>
        </div>

        {/* Contador de Billetes */}
        <div className="card">
          <h2>Contador de Billetes</h2>
          {billetes.map((valor, i) => (
            <div key={i} className="fila">
              <span>${valor}</span>
              <input
                type="number"
                min="0"
                value={cantidadesBilletes[i]}
                onChange={(e) => handleChangeBillete(i, e.target.value)}
              />
              <span className="igual">=</span>
              <span className="resultado">${valor * cantidadesBilletes[i]}</span>
            </div>
          ))}
          <div className="total">Total: ${totalBilletes}</div>
        </div>
      </div>

      <div className="total-general">
        <h3>Total General: ${totalGeneral}</h3>
      </div>
    </div>
  )
}

export default App

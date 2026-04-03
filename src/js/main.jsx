import React from 'react';
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

//setInterval() -Codigo se repetirá en un lapso de tiempo definido
// const intervalo = setIntervalo(funcionAEjecutar, milisegundos)
//                                                 1000ms = 1 seg

let contador = 0
setInterval(() => {
  
  let One = Math.floor((contador/1)%10) //Math floor lo que hace es redondear el valor y quitar decimales
  // %10 dame solo lo que sobra despues de dividir entre 10, el resultado será un valor entre 0 y 9

  let Two = Math.floor((contador/10)%10)

  let Three = Math.floor((contador/100)%10) 

  let Four = Math.floor((contador/1000)%10)

  let Five = Math.floor((contador/10000)%10)

  let Six = Math.floor((contador/100000)%10)

  contador++

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Home digSix={Six} digFive={Five} digFour={Four} digThree={Three} digTwo={Two} digOne={One} />
  </React.StrictMode>,

  
)

}, 1000)
import './App.css';
import {useState} from "react";
import Plano from "./plano.js";

function App() {
  const [Equipo1, Agregar_Equipo1] = useState("");
  const [Equipo2, Agregar_Equipo2] = useState("");
  const [CantidadDeGoles1, CambiarGol1] = useState();
  const [CantidadDeGoles2, CambiarGol2] = useState();
  const [Resultado, elegirUnGanador] = useState("");

  const set_Equipo1 = (event) => {
    Agregar_Equipo1(event.target.value);
  }

  const setEquipo2 = (event) => {
    Agregar_Equipo2(event.target.value);
  }

  const addGoles1 = (event) => {
    CambiarGol1(event.target.value);
  }

  const addGoles2 = (event) => {
    CambiarGol2(event.target.value);
  }

  const game = () => {
    if(CantidadDeGoles1 === CantidadDeGoles2){
      elegirUnGanador(" EMPATE ");
    } else if(CantidadDeGoles1 > CantidadDeGoles2){
      elegirUnGanador(Equipo1);
    } else {
      elegirUnGanador(Equipo2);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>JORNADA DEPORTIVA 2023</h1>
        <div>
          <select onChange={set_Equipo1}>
            <option>Renault</option>
            <option>Dante Alighieri</option>
            <option>Monjas Azules</option>
          </select>
          <select onChange={setEquipo2}>
            <option>Jesus Maria</option>
            <option>Don Orione</option>
            <option>Vocos Lescano</option>
          </select>
        </div>
        <p>Partido De Hoy: {Equipo1} Vs {Equipo2}</p>
        <p>Goles Del {Equipo1}: </p><input type="number" onChange={addGoles1}></input> 
        <p>Goles Del {Equipo2}: </p><input type="number" onChange={addGoles2}></input><br></br> 
        <button onClick={game}>Mostrar Ganador</button>
        <p>El Partido Salio: {CantidadDeGoles1} a {CantidadDeGoles2}</p>
        <p>El Ganador Del Encuentro Fue: {Resultado} !! </p>
        <Plano/>
      </header>
    </div>
  );


}

export default App;

//perdon profe
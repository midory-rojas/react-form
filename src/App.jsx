import './App.css'
import { useState } from 'react';



function App() {
  const [compito, setCompito] = useState(["Fare la spesa", "Fare Crossfit", "Leggere un libro", "Fare meditazione"]);
  const [nuovoCompito, setNuovoCompito] = useState(" ");

  function submitHandler(event) {
    event.preventDefault();
    console.log("SUBMIT", nuovoCompito);
    const nuovoCompitos = [...compito, nuovoCompito];
    setCompito(nuovoCompitos);
    setNuovoCompito(" ");
  }
  
  return (
    <>
    <header>
      <h1>La mia lista - Promemoria</h1>
    </header>
    <main>
      <p>
        {JSON.stringify(compito)}
        {nuovoCompito}
      </p>
      <form onSubmit= {submitHandler}>
        <input type="text" value={nuovoCompito}
        onChange={(event) => {
          setNuovoCompito(event.target.value)
          }}/>
        <button type="subtmit">Aggiungi nuovo compito</button>
      </form>
      <ul>
        {compito.map((compi, index) =>{
          return (
            <li key={index}>
              <span>{compi}</span>
              <button>Rimuovi</button>
            </li>
          )
        })}
      </ul>
    </main>
    </>
  )
}

export default App

import { useState } from 'react';
import imgLibro from "../assets/img/imagelibro.jpg";


export default function Lista() {
    const [articoli, setArticoli] = useState(["La procrastinazione", "Il trauma dell'ataccamento: in che modo influenza corpo e mente?", "Disturbi dell'umore", "Tipi di fobia", "Fattori psicologici e scelte alimentari"]);
    const [nuovoArticolo, setNuovoArticolo] = useState(" ");

    function submitHandler(event) {
        event.preventDefault();
        console.log("SUBMIT", nuovoArticolo);
        const nuovoArticol = [...articoli, nuovoArticolo];
        setArticoli(nuovoArticol);
        setNuovoArticolo(" ");
    }

    return (
        <>
            <div className='container d-flex flex-column align-items-center py-4'>
                <header className='d-flex justify-content-center align-items-center'>
                    <h1>Articoli di Psicologia</h1>
                    <img src={imgLibro}>
                    </img>
                </header>
                <main className=''>
                    <p>
                        {/*{JSON.stringify(articoli)}
                        {nuovoArticolo}*/}
                    </p>
                    <form onSubmit={submitHandler}>
                        <input type="text" value={nuovoArticolo}
                            onChange={(event) => {
                                setNuovoArticolo(event.target.value)
                            }} />
                        <button className="btn btn-secondary ms-2" type="subtmit">Aggiungi un nuovo articolo</button>
                    </form>
                    <ul>
                        {articoli.map((articol, index) => {
                            return (
                                <li key={index}>
                                    <span>{articol}</span>
                                    <button className='btn btn-info ms-2 my-2' onClick={() => {
                                        const nuovoArticoloRimosso = articoli.filter((articFilter, articFilterIndex) => {
                                            return articFilterIndex != index;
                                        });
                                        {/*console.log(nuovoArticoloRimosso)*/ }
                                        setArticoli(nuovoArticoloRimosso);

                                    }}>Rimuovi</button>
                                </li>
                            )
                        })}
                    </ul>
                </main>
            </div >
        </>
    )
}

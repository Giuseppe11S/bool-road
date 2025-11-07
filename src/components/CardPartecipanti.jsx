import styles from './CardPartecipanti.module.css'      
import { useState } from 'react';

const CardPartecipanti = () => {

    // Simuilazione array oggetti che contiene la risposta dell'API
    const partecipante = 
        { id: 1, nome: "Luca", cognome: "Rossi", email: "luca.rossi@example.com", telefono: "3331112222", codiceFiscale: "RSSLCU90A01H501Z" }

    /***********
        HOOK
    ***********/
    const [isOpen, setIsOpen] = useState(false);     // Variabile di stato utilizzata per gestire apertura/chiusura accordion

    /***************
        RENDERING
    ***************/
    return (
        <div className={styles.prova}>
            <h1> Viaggio a Roma </h1>
            <h2> Elenco partecipanti: </h2>

            {/* Accordion */}
            <div>

                {/* Titolo Accordion */}
                <div>
                    <h3> {partecipante.nome} {partecipante.cognome} </h3>               {/* Nome e cognome partecipanti */}
                    <span onClick={toggleAccordion}> {isOpen ? '-' : '+'} </span>       {/* Icona apertura/chiusura accordion */}
                </div>

                {/* Info partecipanti */}
                    { isOpen &&
                        <address>
                            <span> {partecipante.codiceFiscale} </span>
                            <span> {partecipante.telefono} </span>
                            <span> {partecipante.email} </span>
                        </address>
                    }
            </div>
        </div>
    )

    /***************
        FUNZIONE
    ***************/
    // Funzione che al click inverte lo stato dell'accordion (aperto/chiuso)
    function toggleAccordion() {
        setIsOpen(!isOpen);         
    }
}

export default CardPartecipanti;

<<<<<<< HEAD
import { useState } from 'react';

const CardPartecipanti = ({ partecipante, isOpen, onToggle }) => {

    /***************
        RENDERING
    ***************/
    return (

        <div className='partecipante-card'>

                {/* Header Accordion */}
                <div className="partecipante-header" onClick={onToggle}>
                    <h3> {partecipante.nome} {partecipante.cognome} <span>{isOpen ? '−' : '+'}</span> </h3>
                </div>

                {/* Dettagli partecipanti (visibili solo se la card è aperta) */}
                {isOpen &&
                <address className="partecipante-details">
                    <p><strong>Codice Fiscale:</strong> {partecipante.cf}</p>
                    <p><strong>Telefono:</strong> {partecipante.telefono}</p>
                    <p><strong>Email:</strong> {partecipante.email}</p>
                </address>
                }
            </div>
    )
}

export default CardPartecipanti;
=======
// props per Singoli viaggi
>>>>>>> Giuseppe11s

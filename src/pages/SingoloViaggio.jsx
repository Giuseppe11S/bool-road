import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { viaggi } from "../data/data";
import CardPartecipanti from '../components/CardPartecipanti';

const SingoloViaggio = () => {

  const { id } = useParams()

  /***********
      HOOK
  ***********/
  const [openAccordion, setOpenAccordion] = useState(null)    // Variabile di stato che tiene traccia di quale partecipante ha aperto l'accordion

  /*******************
    RICERCA VIAGGIO
  ********************/
  const viaggio = viaggi.find((viaggio) => viaggio.id === parseInt(id));

  if (!viaggio) {
    return (
      <div className="container">
        <h2>Viaggio non trovato!</h2>
      </div>
    )
  }

  /**************
      FUNZIONE
  ***************/
  // Gestisce l’apertura e chiusura di una sola card alla volta
  const toggleAccordion = (partecipanteId) => {
    setOpenAccordion(openAccordion === partecipanteId ? null : partecipanteId)
  }

  /****************
      RENDERING
  *****************/
  return (
    <div className="singolo-viaggio-container">

      {/* --- HEADER VIAGGIO --- */}
      <div className="viaggio-header">
        <h1>Destinazione: {viaggio.destinazione}</h1>
        <div className="viaggio-date">
          <p><strong>Data Inizio:</strong> {new Date(viaggio.dataInizio).toLocaleDateString('it-IT')}</p>
          <p><strong>Data Fine:</strong> {new Date(viaggio.dataFine).toLocaleDateString('it-IT')}</p>
        </div>
      </div>

      {/* --- SEZIONE PARTECIPANTI --- */}
      <div className="partecipanti-section">
        <h2>Partecipanti ({viaggio.partecipanti.length})</h2>

        <div className="partecipanti-list">

          {/* Ciclo che genera una card per ogni partecipante */}
          { viaggio.partecipanti.map ( (partecipante) => (
            <CardPartecipanti
              key={partecipante.id}
              partecipante={partecipante} // Passaggio dell'intero oggetto come props
              isOpen={openAccordion === partecipante.id}
              onToggle={() => toggleAccordion(partecipante.id)}
            />
          ))} 

        </div>
      </div>
    </div>
  ) 
}

export default SingoloViaggio
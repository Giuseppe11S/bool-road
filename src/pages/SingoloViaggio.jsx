import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import viaggi from '../data/data'

const SingoloViaggio = () => {
  const { id } = useParams()
  const [openAccordion, setOpenAccordion] = useState(null)

  const viaggio = viaggi[parseInt(id)]

  if (!viaggio) {
    return (
      <div className="container">
        <h2>Viaggio non trovato</h2>
      </div>
    )
  }

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="singolo-viaggio-container">
      <div className="viaggio-header">
        <h1>Destinazione: {viaggio.destinazione}</h1>
        <div className="viaggio-date">
          <p><strong>Data Inizio:</strong> {new Date(viaggio.dataInizio).toLocaleDateString('it-IT')}</p>
          <p><strong>Data Fine:</strong> {new Date(viaggio.dataFine).toLocaleDateString('it-IT')}</p>
        </div>
      </div>

      <div className="partecipanti-section">
        <h2>Partecipanti ({viaggio.partecipanti.length})</h2>

        <div className="partecipanti-list">
          {viaggio.partecipanti.map((partecipante, index) => (
            <div key={index} className="partecipante-card">
              <div
                className="partecipante-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{partecipante.nome} {partecipante.cognome}</h3>
                <span className={`accordion-icon ${openAccordion === index ? 'open' : ''}`}>
                  ▼
                </span>
              </div>

              {openAccordion === index && (
                <div className="partecipante-details">
                  <p><strong>Email:</strong> {partecipante.email}</p>
                  <p><strong>Telefono:</strong> {partecipante.telefono}</p>
                  <p><strong>Codice Fiscale:</strong> {partecipante.cf}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingoloViaggio
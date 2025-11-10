import { useParams } from "react-router-dom";
import { viaggi } from "../data/data";
import SearchBar from "../components/SearchBar";
import React, { useState } from "react";
import CardPartecipanti from "../components/CardPartecipanti";

const SingoloViaggio = () => {
  const { id } = useParams();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [search, setSearch] = useState("");

  const viaggio = viaggi.find((viaggio) => viaggio.id === parseInt(id));

  if (!viaggio) {
    return (
      <div className="container">
        <h2>Viaggio non trovato!</h2>
      </div>
    );
  }

  // 🔍 Filtra i partecipanti in base al termine cercato
  const partecipantiFiltrati = viaggio.partecipanti.filter(
    (p) =>
      p.nome.toLowerCase().includes(search.toLowerCase()) ||
      p.cognome.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAccordion = (partecipanteId) => {
    setOpenAccordion(openAccordion === partecipanteId ? null : partecipanteId);
  };

  return (
    <div className="main-container-sv">
      <div className="searchbar">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="singolo-viaggio-container">
        {/* --- HEADER VIAGGIO --- */}
        <div className="viaggio-header">
          <h1>{viaggio.destinazione}</h1>
          <img
            src={viaggio.image}
            alt={viaggio.destinazione}
            className="viaggio-img"
          />
          <div className="viaggio-date">
            <p>
              <strong>Data Inizio:</strong>{" "}
              {viaggio.dataInizio}
            </p>
            <p>
              <strong>Data Fine:</strong>{" "}
              {viaggio.dataFine}
            </p>
          </div>
        </div>

        {/* --- SEZIONE PARTECIPANTI --- */}
        <div className="partecipanti-section">
          <h2>{partecipantiFiltrati.length} Partecipanti</h2>

          <div className="partecipanti-list">
            {partecipantiFiltrati.map((partecipante) => (
              <CardPartecipanti
                key={partecipante.id}
                partecipante={partecipante}
                isOpen={openAccordion === partecipante.id}
                onToggle={() => toggleAccordion(partecipante.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingoloViaggio;

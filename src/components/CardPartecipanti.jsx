import { useState } from "react";

const CardPartecipanti = ({ partecipante, isOpen, onToggle }) => {
    /***************
          RENDERING
      ***************/
    return (
        <div className={`partecipante-card ${isOpen ? "active" : ""}`}>
            <div className="partecipante-header" onClick={onToggle}>
                <img src={partecipante.image} alt="" className="img-partecipante" />
                <h3>
                    {partecipante.nome} {partecipante.cognome}{" "}
                    <span className="open-closed">{isOpen ? " ︿" : " ﹀"}</span>
                </h3>
            </div>

            {isOpen && (
                <address className="partecipante-details">
                    <hr />
                    <p><strong>Codice Fiscale:</strong> {partecipante.cf}</p>
                    <p><strong>Telefono:</strong> {partecipante.telefono}</p>
                    <p><strong>Email:</strong> {partecipante.email}</p>
                </address>
            )}
        </div>
    );
};

export default CardPartecipanti;

import { useParams } from "react-router-dom";
import { viaggi } from "../data/data";

import React from "react";

const SingoloViaggio = () => {
  const { id } = useParams();

  const viaggio = viaggi.find((viaggio) => viaggio.id === parseInt(id));

  if (!viaggio) {
    return <p>Viaggio non trovato</p>;
  }
  return viaggio;
};

export default SingoloViaggio;

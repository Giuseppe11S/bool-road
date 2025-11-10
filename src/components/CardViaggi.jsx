// props per HomePage.jsx

export default function CardViaggi({
  id,
  destinazione,
  dataInizio,
  dataFine,
  image,
}) {
  return (
    <>
      <img src={image} alt={destinazione} className="card-image" />
      <h2>{destinazione}</h2>
      <span className="data-viaggio">
        dal <strong>{dataInizio}</strong>
      </span>
      <br />
      <span className="data-viaggio">
        fino al <strong>{dataFine}</strong>
      </span>
    </>
  );
}

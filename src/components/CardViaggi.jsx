// props per HomePage.jsx

export default function CardViaggi({id, destinazione, dataInizio, dataFine}) {

  return (
    <>
      <h2>{destinazione}</h2>
       <span>{dataInizio}</span>
       <span>{dataFine}</span>
    </>
  )
}
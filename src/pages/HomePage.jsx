import CardViaggi from "../components/CardViaggi"
import { viaggi } from "../data/data"

const HomePage = () => {
  const fetchViaggi = viaggi.map((viaggio) => (
    <div className="card-viaggio" key={viaggio.id}>
      <CardViaggi
       destinazione={viaggio.destinazione}
       dataInizio={viaggio.dataInizio}
       dataFine={viaggio.dataFine}
      />
    </div>
  ))
  return (
    <>
     {fetchViaggi}
    </>
  )
}

export default HomePage

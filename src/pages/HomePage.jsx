import CardViaggi from "../components/CardViaggi"
import { viaggi } from "../data/data"
import { Link } from "react-router-dom"

const HomePage = () => {
  const fetchViaggi = viaggi.map((viaggio) => (
    <Link to={`/${viaggio.id}`}>
      <div className="card-viaggio" key={viaggio.id}>
        <CardViaggi
          destinazione={viaggio.destinazione}
          dataInizio={viaggio.dataInizio}
          dataFine={viaggio.dataFine}
        />
      </div>
     </Link>
  ))
  
  return (
    <>
      {fetchViaggi}
    </>
  )
}

export default HomePage
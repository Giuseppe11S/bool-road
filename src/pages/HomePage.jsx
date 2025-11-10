import CardViaggi from "../components/CardViaggi";
import { viaggi } from "../data/data";
import { Link } from "react-router-dom";

const HomePage = () => {
  const fetchViaggi = viaggi.map((viaggio) => (
    <Link to={`/${viaggio.id}`}>
      <div className="card-viaggio" key={viaggio.id}>
        <CardViaggi
          image={viaggio.image}
          destinazione={viaggio.destinazione}
          dataInizio={viaggio.dataInizio}
          dataFine={viaggio.dataFine}
        />
      </div>
    </Link>
  ));

  return <div className="cards-container">{fetchViaggi}</div>;
};

export default HomePage;

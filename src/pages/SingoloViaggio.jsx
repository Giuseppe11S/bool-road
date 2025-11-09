
import { useParams } from "react-router-dom";
import { viaggi } from "../data/data";
import SearchBar from "../components/SearchBar";

const SingoloViaggio = () => {
  const { id } = useParams();
  const viaggio = viaggi.find((v) => v.id === parseInt(id));

  if (!viaggio) return <p>Viaggio non trovato</p>;

  return (
    <>
      <div>
        {/* La search bar */}
        <SearchBar data={viaggio.partecipanti} />
      </div>

      <div>
        {/* card partecipanti */}
      </div>
    </>
  );
};

export default SingoloViaggio;

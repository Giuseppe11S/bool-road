import { useState } from "react";

const SearchBar = ({ data }) => {
    const [search, setSearch] = useState("");


    const filtrati = data.filter(
        (p) =>
            p.nome.toLowerCase().includes(search.toLowerCase()) ||
            p.cognome.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Cerca partecipante..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div>
                {filtrati.map((p) => (
                    <div key={p.id}>
                        {p.nome} {p.cognome}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;

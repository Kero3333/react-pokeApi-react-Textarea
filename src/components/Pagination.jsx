import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Pagination = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pokemonsTotal, setPokemonsTotal] = useState(0);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1}`)
      .then((res) => res.json())
      .then((data) => setPokemonsTotal(data.count))
      .catch((err) => console.log(err));
  }, []);

  const totalPages = Math.round(pokemonsTotal / 20);

  const nbPage = location.search.includes("page=")
    ? parseInt(location.search.split("page=")[1].split("&")[0])
    : 1;
  if (nbPage > totalPages) navigate(`/pokemon?page=1`);

  const [page, setPage] = useState(!isNaN(nbPage) ? nbPage : 1);

  const update = (nb) => {
    if (page + nb >= 1 && page + nb <= totalPages) {
      setPage(page + nb);
      navigate(`/pokemon?page=${page + nb}`);
    }
  };
  return (
    <div className="pagination">
      <button onClick={() => update(-1)}>{"<"}</button>
      <span>{page}</span>
      <button onClick={() => update(1)}>{">"}</button>
    </div>
  );
};

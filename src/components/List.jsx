import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const location = useLocation();
  const nbPage = location.search.includes("page=")
    ? parseInt(location.search.split("page=")[1].split("&")[0])
    : 1;

  const page = !isNaN(nbPage) ? nbPage : 1;

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
    )
      .then((res) => res.json())
      .then((data) => setPokemons(data.results))
      .catch((err) => console.log(err));
  }, [page]);

  const update = (e) => {
    const search = e.target.value;
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemons(
          data.results.filter((pokemon) => pokemon.name.includes(search))
        );
      })
      .catch((err) => console.log(err));
  };

  const listUrlPicture = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
  ];

  const getPicture = (e, id, index = 0) => {
    fetch(`${listUrlPicture[index]}${id}.png`)
      .then((res) => {
        e.target.src = `${listUrlPicture[index]}${id}.png`;
      })
      .catch((err) => {
        console.log(err);
        if (index + 1 < listUrlPicture.length) getPicture(e, id, index + 1);
      });
  };

  return (
    <>
      <input type="search" onChange={(e) => update(e)}></input>
      <div className="pokemons">
        {pokemons.map((pokemon, index) => {
          return (
            <Link to={"/pokemon/" + pokemon.name} key={index}>
              <div className="pokemon" key={index}>
                <div className="pokemon-info">
                  <h2>{pokemon.name}</h2>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                      pokemon.url.split("/")[6]
                    }.svg`}
                    onError={(e) => getPicture(e, pokemon.url.split("/")[6])}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

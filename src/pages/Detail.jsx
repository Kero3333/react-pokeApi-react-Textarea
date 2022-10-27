import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div className="pokemon">
      <h1>{pokemon.name}</h1>
      <div className="pokemon-details">
        <img src={pokemon.sprites?.other["official-artwork"].front_default} />
        <div className="general-info">
          <h2>General informations</h2>
          <span>Height : {pokemon.height / 10} m</span>
          <span>Weight : {pokemon.weight / 10} kg</span>
          <div className="type">
            <h3>Types : </h3>
            <div className="type-list">
              {pokemon.types?.length > 1 ? (
                pokemon.types.map((type) => {
                  return <span>{type.type.name}</span>;
                })
              ) : (
                <span>{pokemon.types?.[0].type.name}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="back" onClick={(e) => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

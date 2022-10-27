import { List } from "../components/List";
import { Pagination } from "../components/Pagination";

export const Pokemon = () => {
  return (
    <>
      <h1>PokeApi</h1>
      <div className="pokemon-list">
        <h2>Liste des pokemons</h2>
        <List />
        <Pagination />
      </div>
    </>
  );
};

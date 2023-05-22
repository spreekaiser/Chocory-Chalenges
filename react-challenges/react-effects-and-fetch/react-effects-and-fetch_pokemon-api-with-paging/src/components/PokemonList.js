import { useEffect, useState } from "react";

export default function PokemonList({ object }) {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  async function handlePrevPage() {
    if (page > 0) {
      console.log("inside PrevPage");
      setPage(page - 1);
      console.log(page);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
  }
  console.log(pokemon);
  async function handleNextPage() {
    if (page < 20) {
      console.log("inside NextPage");
      setPage(page + 1);
      console.log(page);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [object]);

  return (
    <main>
      <button type="button" onClick={handlePrevPage}>
        {/* <button type="button" onClick={() => setPage(page - 1)}> */}
        Previous Page
      </button>

      {/* <button type="button" onClick={handleNextPage}> */}
      <button
        type="button"
        onClick={() => {
          setPage(page + 1);
          handleNextPage();
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

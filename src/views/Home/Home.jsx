import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPokemon } from '../../services/fetch';
import PokeCard from '../../components/PokeCard/PokeCard';
import './Home.css';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const resp = await fetchPokemon();
        setPokemon(resp);
      } catch (e) {
        setError(e.message);
      }
    };
    getPokemon();
  }, []);

  if (error) {
    return (
      <>
        <h1>Shucks, there was an error</h1>
        <p>{error}</p>
      </>
    );
  }
  return (
    <>
      <h1>Pokemon Compendium</h1>
      <div className="list-container">
        {pokemon.map((item) => (
          <PokeCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

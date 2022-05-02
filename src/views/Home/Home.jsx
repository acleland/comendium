import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPokemon } from '../../services/fetch';
import PokeCard from '../../components/PokeCard/PokeCard';
import styles from './Home.css';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h1>Pokemon Compendium</h1>
      <input
        type={'text'}
        value={search}
        placeholder={'Search'}
        onChange={handleChange}
      />
      <div className={styles['list-container']}>
        {pokemon.map((item) => (
          <PokeCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

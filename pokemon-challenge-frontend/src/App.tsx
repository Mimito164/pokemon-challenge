import { useEffect, useState } from 'react';
import type Pokemon from './interfaces/pokemon';
import { PokemonCard } from './components/PokemonCard';
import DetailedPokemonCard from './components/DetailedPokemonCard';
import { Button, Typography } from '@mui/material';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedChallenger, setSelectedChallenger] = useState<Pokemon | null>(
    null
  );

  const [selectedRival, setSelectedRival] = useState<Pokemon | null>(null);

  const handleStartBattle = async () => {
    const rivals = pokemons.filter(
      (pokemon) => pokemon._id != selectedChallenger?._id
    );
    const rival = rivals[Math.floor(Math.random() * rivals.length)];
    setSelectedRival(rival);

    try {
      const data = await fetch('http://localhost:3000/api/battles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          challengerId: selectedChallenger?._id,
          rivalId: rival._id,
        }),
      });
      const winner_res = (await data.json()) as {
        message: string;
        winner: Pokemon;
      };
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/pokemons')
      .then((res) => res.json())
      .then((res: Pokemon[]) => {
        setPokemons(res);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Typography variant="h3">Battle of Pokemon</Typography>
      <Typography variant="h4">Select your Pokemon</Typography>
      <div id="card-selector" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemons.map((pokemon: Pokemon) => {
          return (
            <PokemonCard
              pokemon={pokemon}
              selected={pokemon._id === selectedChallenger?._id}
              handleClick={setSelectedChallenger}
              key={pokemon._id}
            />
          );
        })}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <DetailedPokemonCard pokemon={selectedChallenger} />
        <div>
          <Button
            variant="contained"
            color="success"
            onClick={handleStartBattle}
            disabled={!selectedChallenger}
          >
            Start Battle
          </Button>
        </div>
        <DetailedPokemonCard pokemon={selectedRival} />
      </div>
    </>
  );
}

export default App;

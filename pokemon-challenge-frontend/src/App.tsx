import { useEffect, useState } from 'react';
import type Pokemon from './interfaces/pokemon';
import { PokemonCard } from './components/PokemonCard';
import DetailedPokemonCard from './components/DetailedPokemonCard';
import { Box, Button, Collapse, Container, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [selectedChallenger, setSelectedChallenger] = useState<Pokemon | null>(
    null
  );
  const [selectedRival, setSelectedRival] = useState<Pokemon | null>(null);

  const [winner, setWinner] = useState<Pokemon | null>(null);

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
      setWinner(winner_res.winner);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/pokemons');
        const response_json = (await response.json()) as Pokemon[];
        setPokemons(response_json);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchPokemons();
  }, []);

  useEffect(() => {
    setWinner(null);
    setSelectedRival(null);
  }, [selectedChallenger]);

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          Battle of Pokemon
        </Typography>
        <Typography variant="h4">Select your Pokemon</Typography>
        <div
          id="card-selector"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: '1rem',
            justifyContent: 'space-between',
          }}
        >
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
        <Collapse in={winner != null}>
          <Box
            sx={{
              outlineWidth: 2,
              outlineStyle: 'solid',
              backgroundColor: blue[100],
              borderRadius: 1,
              marginBottom: 3,
              padding: 2,
              boxShadow: 5,
            }}
          >
            <Typography variant="h4">{winner?.name} is the winner!</Typography>
          </Box>
        </Collapse>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
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
              sx={{
                textTransform: 'none',
                paddingLeft: 3,
                paddingRight: 3,
                paddingTop: 1,
                paddingBottom: 1,
                marginTop: 2,
              }}
            >
              <Typography variant="h6">Start Battle</Typography>
            </Button>
          </div>
          <DetailedPokemonCard pokemon={selectedRival} />
        </div>
      </Container>
    </>
  );
}

export default App;

import { green } from '@mui/material/colors';
import type Pokemon from '../interfaces/pokemon';
import { Card, CardMedia, Typography } from '@mui/material';

export const PokemonCard = ({
  pokemon,
  selected,
  handleClick,
}: {
  pokemon: Pokemon;
  selected: boolean;
  handleClick: React.Dispatch<React.SetStateAction<Pokemon | null>>;
}) => {
  return (
    <>
      <Card
        variant="outlined"
        data-active={selected ? '' : undefined}
        sx={{
          padding: 1,
          boxShadow: 5,
          borderRadius: 2,
          marginTop: 3,
          '&:hover': { cursor: 'pointer' },
          '&[data-active]': {
            outlineColor: green[300],
            outlineWidth: 2,
            outlineStyle: 'solid',
          },
        }}
        onClick={() => {
          handleClick(pokemon);
        }}
      >
        <CardMedia
          image={pokemon.imageUrl}
          sx={{ height: 130, width: 130, margin: 'auto' }}
        />
        <Typography variant="h6">{pokemon.name}</Typography>
      </Card>
    </>
  );
};

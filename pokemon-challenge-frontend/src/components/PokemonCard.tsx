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
          width: 150,
          padding: 1,
          boxShadow: 5,
          borderRadius: 2,
          margin: 1,
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
          sx={{ height: 100, width: 100, margin: 'auto' }}
        />
        <Typography variant="h6">{pokemon.name}</Typography>
      </Card>
    </>
  );
};

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import Pokemon from '../interfaces/pokemon';
import { LabeledProgressBar } from './LabeledProgressBar';

export default function DetailedPokemonCard({
  pokemon,
}: {
  pokemon: Pokemon | null;
}) {
  return (
    <>
      {pokemon ? (
        <Card
          variant="outlined"
          sx={{ width: 300, boxShadow: 5, marginTop: 2 }}
        >
          <CardMedia
            image={pokemon.imageUrl}
            sx={{ margin: 'auto', width: 200, height: 200 }}
          />
          <CardHeader
            title={pokemon.name}
            sx={{ padding: '0em 1em 0em 1em' }}
          />
          <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <hr />
            <Stack gap={1.5}>
              <LabeledProgressBar label="HP" progressValue={pokemon.hp} />
              <LabeledProgressBar
                label="Attack"
                progressValue={pokemon.attack}
              />
              <LabeledProgressBar
                label="Defense"
                progressValue={pokemon.defense}
              />
              <LabeledProgressBar label="Speed" progressValue={pokemon.speed} />
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <>
          <Box
            sx={{
              outlineWidth: 1,
              outlineStyle: 'solid',
              borderRadius: 1,
              color: 'lightgray',
              height: 440,
              boxShadow: 5,
            }}
          >
            <Skeleton
              variant="rounded"
              width={300}
              height={200}
              sx={{ borderRadius: 1 }}
            />
            <Typography variant="h3" sx={{ paddingLeft: 1, paddingRight: 1 }}>
              <Skeleton variant="text" />
            </Typography>
            <Stack gap={1.5}>
              <Skeleton
                variant="rectangular"
                width={100}
                height={18}
                sx={{ marginLeft: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width={180}
                height={18}
                sx={{ marginLeft: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width={50}
                height={18}
                sx={{ marginLeft: 2 }}
              />
            </Stack>
          </Box>
        </>
      )}
    </>
  );
}

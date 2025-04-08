import { LinearProgress } from '@mui/material';

export function LabeledProgressBar({
  progressValue,
  label,
}: {
  progressValue: number;
  label: string;
}) {
  return (
    <div>
      <label>{label}</label>
      <LinearProgress
        variant="determinate"
        value={progressValue * (100 / 6)}
        sx={{
          marginTop: 0.5,
          height: 10,
          borderRadius: 2,
          '& .MuiLinearProgress-bar1Determinate': {
            backgroundColor: '#32CD32',
          },
        }}
      />
    </div>
  );
}

import { Box, Button } from '@mui/material'

interface StopwatchControlsProps {
  isRunning: boolean
  onStart: () => void
  onStop: () => void
  onReset: () => void
  onLap: () => void
}

export const StopwatchControls = ({
  isRunning,
  onStart,
  onStop,
  onReset,
  onLap
}: StopwatchControlsProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 3, flexWrap: 'wrap' }}>
      {!isRunning ? (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={onStart}
          size="large"
        >
          Старт
        </Button>
      ) : (
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={onStop}
          size="large"
        >
          Стоп
        </Button>
      )}
      <Button 
        variant="outlined" 
        onClick={onReset}
        size="large"
      >
        Сброс
      </Button>
      <Button 
        variant="outlined" 
        onClick={onLap} 
        disabled={!isRunning}
        size="large"
      >
        Круг
      </Button>
    </Box>
  )
}

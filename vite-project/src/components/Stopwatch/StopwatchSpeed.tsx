import { Box, Button, Chip } from '@mui/material'

interface StopwatchSpeedProps {
  speed: number
  onSpeedUp: () => void
  onSpeedDown: () => void
}

export const StopwatchSpeed = ({ speed, onSpeedUp, onSpeedDown }: StopwatchSpeedProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
        <Button 
          variant="outlined" 
          onClick={onSpeedUp}
          disabled={speed >= 2}
          size="medium"
        >
          Ускорить x2
        </Button>
        <Button 
          variant="outlined" 
          onClick={onSpeedDown}
          disabled={speed <= 0.5}
          size="medium"
        >
          Замедлить x2
        </Button>
      </Box>
      <Chip 
        label={`Скорость: ${speed}x`} 
        color="primary" 
        sx={{ fontSize: '0.9rem' }}
      />
    </Box>
  )
}

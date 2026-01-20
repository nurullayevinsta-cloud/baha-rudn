import { Typography } from '@mui/material'
import { formatTime } from '../../utils/timeFormatter'

interface StopwatchTimerProps {
  time: number
}

export const StopwatchTimer = ({ time }: StopwatchTimerProps) => {
  return (
    <Typography 
      variant="h2" 
      component="div" 
      sx={{ 
        mb: 3, 
        fontFamily: 'monospace',
        fontSize: { xs: '2rem', sm: '3rem' },
        fontWeight: 'bold'
      }}
    >
      {formatTime(time)}
    </Typography>
  )
}

import { Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import { formatTime } from '../../utils/timeFormatter'

interface LapsListProps {
  laps: number[]
}

export const LapsList = ({ laps }: LapsListProps) => {
  if (laps.length === 0) {
    return null
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
        Круги:
      </Typography>
      <List sx={{ maxHeight: '300px', overflow: 'auto' }}>
        {laps.map((lap, index) => (
          <ListItem 
            key={index}
            sx={{ 
              borderBottom: '1px solid #e0e0e0',
              '&:last-child': { borderBottom: 'none' }
            }}
          >
            <ListItemText 
              primary={`Круг ${index + 1}`}
              secondary={formatTime(lap)}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

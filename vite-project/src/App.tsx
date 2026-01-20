import { Container, Typography, Box } from '@mui/material'
import { Stopwatch } from './components/Stopwatch/Stopwatch'
import './App.css'

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Секундомер
        </Typography>
        <Stopwatch />
      </Box>
    </Container>
  )
}

export default App

export const stopwatchStyles = {
  paper: {
    p: 4,
    mt: 3,
    width: '100%',
    textAlign: 'center' as const,
    borderRadius: 2
  },
  timer: {
    mb: 3,
    fontFamily: 'monospace',
    fontSize: { xs: '2rem', sm: '3rem' },
    fontWeight: 'bold'
  },
  controlsBox: {
    display: 'flex',
    gap: 2,
    justifyContent: 'center',
    mb: 3,
    flexWrap: 'wrap' as const
  },
  speedBox: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    mb: 2
  },
  lapsList: {
    maxHeight: '300px',
    overflow: 'auto' as const
  }
}

import { useState, useEffect, useRef } from 'react'
import { Paper } from '@mui/material'
import { StopwatchTimer } from './StopwatchTimer'
import { StopwatchControls } from './StopwatchControls'
import { StopwatchSpeed } from './StopwatchSpeed'
import { LapsList } from './LapsList'

export const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [laps, setLaps] = useState<number[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + (1 * speed))
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, speed])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setTime(0)
    setIsRunning(false)
    setLaps([])
    setSpeed(1)
  }

  const handleLap = () => {
    if (isRunning) {
      setLaps([...laps, time])
    }
  }

  const handleSpeedUp = () => {
    if (speed < 2) {
      setSpeed(speed * 2)
    }
  }

  const handleSpeedDown = () => {
    if (speed > 0.5) {
      setSpeed(speed / 2)
    }
  }

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        mt: 3, 
        width: '100%', 
        textAlign: 'center',
        borderRadius: 2
      }}
    >
      <StopwatchTimer time={time} />
      <StopwatchControls
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        onLap={handleLap}
      />
      <StopwatchSpeed
        speed={speed}
        onSpeedUp={handleSpeedUp}
        onSpeedDown={handleSpeedDown}
      />
      <LapsList laps={laps} />
    </Paper>
  )
}

import React from 'react'
import { useTimersContext } from '../store/TimersContext'
import Button from './UI/Button';

const Header = () => {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>React Timer</h1>
      <Button as="button" onClick={timersCtx.isRunning ? timersCtx.stopTImers : timersCtx.startTimers}>
        {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
      </Button>
    </header>
  )
}

export default Header

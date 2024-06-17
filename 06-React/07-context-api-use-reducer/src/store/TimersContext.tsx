import { ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name: string,
  duration: number; // in seconds
}

type TimersState = {
  isRunning: boolean,
  timers: Timer[]
}

type TimersContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  startTimers: () => void;
  stopTImers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProvider = {
  children: ReactNode
}


// useReducer
const initialStateReducer: TimersState = {
  isRunning: true,
  timers: [],
}

type StartTimersAction = {
  type: 'START_TIMERS'
}

type StopTimersAction = {
  type: 'STOP_TIMERS'
}

type AddTimerAction = {
  type: 'ADD_TIMER',
  payload: Timer
}
type Action = StartTimersAction | StopTimersAction | AddTimerAction;

const timersReducer = (state: TimersState, action: Action) => {
  switch (action.type) {
    case 'START_TIMERS': {
      return {
        ...state,
        isRunning: true
      }
    }

    case 'STOP_TIMERS': {
      return {
        ...state,
        isRunning: false
      }
    }

    case 'ADD_TIMER': {
      return {
        ...state,
        timers: [...state.timers, action.payload]
      }
    }
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTimersContext = () => {
  const timersContext = useContext(TimersContext);
  if (timersContext) {
    return timersContext
  }
  throw new Error('Error found, Timers is not available !!');
}

// Main context function
const TimersContextProvider = ({ children }: TimersContextProvider) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialStateReducer);

  const tcv: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timer: Timer) {
      dispatch({ type: 'ADD_TIMER', payload: timer })
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' })
    },
    stopTImers() {
      dispatch({ type: 'STOP_TIMERS' })
    }
  }

  return (
    <TimersContext.Provider value={tcv} >
      {children}
    </TimersContext.Provider>
  )
}

export default TimersContextProvider

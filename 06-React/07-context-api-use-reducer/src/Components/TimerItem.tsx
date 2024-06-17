import { useEffect, useRef, useState } from "react";
import { Timer, useTimersContext } from "../store/TimersContext"

type TimerItemProps = {
  timer: Timer;
}

const TimerItem = ({ timer }: TimerItemProps) => {
  const { isRunning } = useTimersContext();
  const intervalRef = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(timer.duration * 1000);

  if (remainingTime <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setRemainingTime(prevTime => Math.max(0, prevTime - 50));
      }, 50)
      intervalRef.current = intervalId;
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <div className="timer" >
      <h2>{timer.name}</h2>
      <p>
        <progress max={timer.duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </div>
  )
}

export default TimerItem

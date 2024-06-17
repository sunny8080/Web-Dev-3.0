import { useTimersContext } from "../store/TimersContext"
import TimerItem from "./TimerItem";

const TimersList = () => {
  const { timers } = useTimersContext();

  return (
    <div>
      <h2>All Timers</h2>
      {
        timers && timers.length > 0 ?
          (
            <ul>
              {
                timers.map((timer, ind) => {
                  return <TimerItem key={ind} timer={timer} />
                })
              }
            </ul>
          )
          :
          (
            <p>No timers found !!</p>
          )
      }
    </div>
  )
}

export default TimersList

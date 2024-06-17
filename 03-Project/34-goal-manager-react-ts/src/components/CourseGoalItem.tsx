import { FC, type PropsWithChildren, type ReactNode } from "react"
import { type CourseGoal } from "../App"

// 2 ways when we are using children as props

/**
 * 1st way - when we are using children as props
 * 
 * type CourseGoalItemProps2 = {
 *    goal: CourseGoal,
 *    onDeleteGoal: (id: number) => void,
 *    children: ReactNode
 * }
 * 
 */

/**
 * 2nd way - when we are using children as props
 * 
 * type CourseGoalProps3 = PropsWithChildren<{
 *    goal: CourseGoal,
 *    onDeleteGoal: (id: number) => void,
 * }>
 * 
 */



// 2 Ways to define component props, by using type and by using interface
// type CourseGoalItemProps = {
//   goal: CourseGoal,
//   onDeleteGoal: (id: number) => void
// }


interface CourseGoalItemProps {
  goal: CourseGoal,
  onDeleteGoal: (id: number) => void
}

// 2 Ways to specify component prop type
// const CourseGoalItem = ({ goal, onDeleteGoal }: CourseGoalItemProps) => {
const CourseGoalItem: FC<CourseGoalItemProps> = ({ goal, onDeleteGoal }) => {
  return (
    <div className="course-goal-item">
      <div>
        <h2>{goal.goal}</h2>
        <p>{goal.detail}</p>
      </div>
      <button onClick={() => onDeleteGoal(goal.id)} >Delete</button>
    </div>
  )
}

export default CourseGoalItem

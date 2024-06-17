import { ReactNode } from "react";
import { type CourseGoal } from "../App"
import InfoBox from "./InfoBox";
import CourseGoalItem from "./CourseGoalItem";

interface CourseGoalListProps {
  goals: CourseGoal[],
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {

  let warningBox: ReactNode;
  if (goals.length >= 5) {
    warningBox = (
      <InfoBox mode="warning" severity="medium" >
        You're collecting a lot of goals. Don't put too much on your plate !
      </InfoBox>
    )
  }


  return (
    <div className="course-goal-list">
      {warningBox}
      {
        goals.length === 0 ?
          (
            <div>
              <InfoBox mode="hint">
                You have no course goals yet. Start adding some!
              </InfoBox>
            </div>
          )
          :
          (
            <div>
              <ul>
                {
                  goals.map((goal) => (
                    <CourseGoalItem key={goal.id} goal={goal} onDeleteGoal={onDeleteGoal} />
                  ))
                }
              </ul>
            </div>
          )
      }
    </div>
  )
}

export default CourseGoalList

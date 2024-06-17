import { FormEvent, useRef } from "react";

type GoalFormProps = {
  onAddGoal: (goal: string, detail: string) => void;
}

const GoalForm = ({ onAddGoal }: GoalFormProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const detailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const goal = goalRef.current?.value;
    const detail = detailRef.current?.value;
    if (goal && detail) {
      onAddGoal(goal, detail);
      e.currentTarget.reset();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="goal">Your Goal</label>
          <input type="text" id="goal" ref={goalRef} />
        </div>
        <div className="form-input">
          <label htmlFor="detail">Short Description</label>
          <input type="text" id="detail" ref={detailRef} />
        </div>

        <div>
          <button type="submit">Add Goal</button>
        </div>
      </form>
    </div>
  )
}

export default GoalForm

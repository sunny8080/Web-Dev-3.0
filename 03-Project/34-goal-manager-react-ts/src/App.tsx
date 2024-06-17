import { useState } from 'react'
import './App.css'
import goalsImage from './assets/goals.jpg'
import Header from './components/Header'
import GoalForm from './components/GoalForm'
import CourseGoalList from './components/CourseGoalList'


export type CourseGoal = {
  id: number;
  goal: string,
  detail: string
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, detail: string) => {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.floor(Math.random() * 100000),
        goal,
        detail
      }
      return [...prevGoals, newGoal]
    })
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }


  return (
    <div className='app'>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }} >
        <h1 className='header--title'>Your Course Goals</h1>
      </Header>

      <GoalForm onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />

    </div>
  )
}

export default App

import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <p>Welcome to App</p>

      <p>
        <Link to="/about">Go to about page</Link>
      </p>
      <p>
        <Link to="/dashboard">Go to dashboard</Link>
      </p>
      <p>
        <Link to="/dashboard/my-profile">Go to my profile</Link>
      </p>
      <p>
        <Link to="/dashboard/my-courses">Go to courses</Link>
      </p>
      <p>
        <Link to="/dashboard/course/5">Go to course with id 5</Link>
      </p>
      <p>
        <Link to="/dashboard/course/5/lecture/10">Go to course with id 5 and lecture 10</Link>
      </p>
    </div>
  )
}

export default App

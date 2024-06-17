import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Dashboard

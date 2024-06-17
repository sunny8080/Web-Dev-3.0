import { Navigate, Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import Dashboard from "../Components/Dashboard";
import MyProfile from "../Components/MyProfile";
import MyCourses from "../Components/MyCourses";
import Course from "../Components/Course";
import Root from "../Components/Root";

// createBrowserRouter supports new Data APIs like loader, action


// Use plain objects // Preferred
export const router1 = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: (
      <div>
        <p>In About route page</p>
      </div>
    )
  },
  {
    // Nested routes
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Navigate to={'my-profile'} />
      },
      { path: 'my-profile', element: <MyProfile /> },
      { path: '/dashboard/my-courses', element: <MyCourses /> },
      { path: 'course/:courseId', element: <Course /> },
      { path: 'course/:courseId/lecture/:lectureNo', element: <Course /> }
    ]
  },
  {
    path: '*',
    element: (
      <div>
        Page not found
      </div>
    )
  },
]);

// or use Configure nested routes with JSX // can be write easily
export const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route path="/" element={<App />} />
      <Route path="/about" element={
        <div>
          <p>In About route page</p>
        </div>
      } />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to={'my-profile'} />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="/dashboard/my-courses" element={<MyCourses />} />
        <Route path="course/:courseId" element={<Course />} />
        <Route path="course/:courseId/lecture/:lectureNo" element={<Course />} />
      </Route>
      <Route path="*" element={<div>Page not found</div>} />
    </Route>
  )
);

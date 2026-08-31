import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aboutme from './components/Aboutme'
import Home from './components/Home'
import Login from './components/Login'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/aboutme",
      element: <><Navbar /><Aboutme /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home/Home"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    }
  ])
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

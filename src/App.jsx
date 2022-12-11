import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Blog from "./pages/Blog/Blog"
import Home from "./pages/Home/Home"
import Details from "./pages/Home/Project/Details"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/details/:id',
          element:<Details></Details>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
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

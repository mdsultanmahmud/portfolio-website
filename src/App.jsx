import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Blog from "./pages/Blog/Blog"
import Home from "./pages/Home/Home"
import Details from "./pages/Home/Project/Details"
import AOS from "aos"
function App() {
  AOS.init()
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
          element:<Details></Details>,
          loader:({params}) => fetch(`https://portfolio-server-psi.vercel.app/projects/${params.id}`)
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

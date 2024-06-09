import { createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Feed from './Feed'
import Profile from './Profile'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            children:[
                {
                    path:'/home',
                    element:<Feed/>
                },
                {
                    path:'/profile',
                    element:<Profile/>,
                }
            ]
        },
        {
            path: '/login',
            element: <Login/>,
        },
        
    ])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
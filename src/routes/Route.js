
import Laptop from '../Laptop'
import Home from '../pages/Home'
import Auto from '../pages/Auto'
import Contact from '../pages/Contact'

import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'


export const route = [
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/register",
            element:<Register />
        },
        {
            path:"/auto",
            element:<Auto/>
        },
        {
            path:"*",
            element:<NotFound/>
        },
        {
            path:"/laptop",
            element:<Laptop/>
        },

    ];
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Pets_Supplies from '../Pages/Pets_Supplies';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/home',
                Component:Home
            },
            {
                path:'/pets_supplies',
                Component:Pets_Supplies
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            }
        ],
    }
]);

export default router;
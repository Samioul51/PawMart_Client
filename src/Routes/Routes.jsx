import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Pets_Supplies from '../Pages/Pets_Supplies';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../Pages/ErrorPage';
import MyListings from '../Pages/MyListings';
import AddListings from '../Pages/AddListings';
import MyOrders from '../Pages/MyOrders';
import PublicRoute from '../Provider/PublicRoute';
import PrivateRoute from '../Provider/PrivateRoute';
import Profile from '../Pages/Profile';

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
                element:<PublicRoute>
                    <Login></Login>
                </PublicRoute>
            },
            {
                path:'/register',
                element:<PublicRoute>
                    <Register></Register>
                </PublicRoute>
            },
            {
                path:'/add_listings',
                element:<PrivateRoute>
                    <AddListings></AddListings>
                </PrivateRoute>
            },
            {
                path:'/my_listings',
                element:<PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>
            },
            {
                path:'/my_orders',
                element:<PrivateRoute>
                    <MyOrders></MyOrders>
                </PrivateRoute>
            },
            {
                path:'/profile',
                element:<PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            }
        ],
    },
    {
        path:'*',
        Component:ErrorPage
    }
]);

export default router;
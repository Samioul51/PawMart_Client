import { createBrowserRouter, Navigate } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Pets_Supplies from '../Pages/Pets_Supplies';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../Pages/ErrorPage';
import MyListings from '../Pages/MyListings';
import MyOrders from '../Pages/MyOrders';
import PublicRoute from '../Provider/PublicRoute';
import PrivateRoute from '../Provider/PrivateRoute';
import CategoryWiseListings from '../Pages/CategoryWiseListings';
import ListingDetailsPage from '../Pages/ListingDetailsPage';
import AddListing from '../Pages/AddListing';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Dashboard from '../Layouts/Dashboard';
import UserProfile from '../Pages/UserProfile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/home',
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/pets_supplies',
                Component: Pets_Supplies
            },
            {
                path: '/login',
                element: <PublicRoute>
                    <Login></Login>
                </PublicRoute>
            },
            {
                path: '/register',
                element: <PublicRoute>
                    <Register></Register>
                </PublicRoute>
            },
            {
                path: '/add_listings',
                element: <PrivateRoute>
                    <AddListing></AddListing>
                </PrivateRoute>
            },
            {
                path: '/my_listings',
                element: <PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>
            },
            {
                path: '/my_orders',
                element: <PrivateRoute>
                    <MyOrders></MyOrders>
                </PrivateRoute>
            },
            {
                path: '/category/:category',
                Component: CategoryWiseListings,
                loader: () => fetch("https://paw-mart-server-seven.vercel.app/listings")
            },
            {
                path: '/listings/:id',
                element: <ListingDetailsPage>
                </ListingDetailsPage>,
                loader: ({ params }) => fetch(`https://paw-mart-server-seven.vercel.app/listings/${params.id}`)
            },
        ],
    },
    {
        path: '*',
        Component: ErrorPage
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard/profile" />
            },
            {
                path: "/dashboard/profile",
                element: <UserProfile></UserProfile>
            },
        ]
    }
]);

export default router;
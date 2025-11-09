import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet className='bg-[#6897ff]'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
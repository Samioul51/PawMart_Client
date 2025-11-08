import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet className='bg-[#ADD8E6]'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
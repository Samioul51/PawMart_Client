import React, { use } from 'react';
import { NavLink, Outlet } from 'react-router';
import logo from "../assets/PetMart.png"
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {
    const { user } = use(AuthContext);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <nav className="navbar w-full bg-[#1ca9c9]">
                    <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost lg:hidden">
                        {/* icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            className="size-6 text-black">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </label>
                    <div className="px-4 font-bold text-black">My Dashboard</div>
                </nav>

                <div className="p-4 bg-[#F5F5F5]">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                <ul className="bg-[#1ca9c9] menu p-4 w-64 min-h-full">
                    <li>
                        <NavLink to="/"><img src={logo} alt="PawMart" className='w-full max-w-[100px] h-auto cursor-pointer' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" className={({ isActive }) => `font-bold text-black text-#1ca9c9 text-[16px] ${isActive ? "bg-[#99a1af]" : "hover:bg-gray-400"} transition-colors ease-in-out duration-500`}>
                            My Profile
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/add-listing" className={({ isActive }) => `font-bold text-black text-#1ca9c9 text-[16px] ${isActive ? "bg-[#99a1af]" : "hover:bg-gray-400"} transition-colors ease-in-out duration-500`}>
                            Add Listing
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/my-orders" className={({ isActive }) => `font-bold text-black text-[16px] ${isActive ? "bg-[#99a1af]" : "hover:bg-gray-400"} transition-colors ease-in-out duration-500`}>
                            My Orders
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/my-listings" className={({ isActive }) => `font-bold text-black text-[16px] ${isActive ? "bg-[#99a1af]" : "hover:bg-gray-400"} transition-colors ease-in-out duration-500`}>
                            My Listings
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/" className={({ isActive }) => `font-bold text-black text-[16px] ${isActive ? "bg-[#99a1af]" : "hover:bg-gray-400"} transition-colors ease-in-out duration-500`}>
                            Back to Home
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
import React, { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/PetMart.png';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = use(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleOpenModal = () => document.getElementById("my_modal_5").showModal();
    const handleCloseModal = () => document.getElementById("my_modal_5").close();

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    }

    const handleLogout = () => {
        logout().then(() => {
            toast.success("Logged out Successfully!");
            handleCloseModal();
        }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
            handleCloseModal();
        })
    }

    const activeClass = "text-[#D84437]";
    const normalClass = "bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500";

    return (
        <nav className='shadow-lg sticky top-0 z-50 bg-white inter'>
            <div className='max-w-[1440px] mx-auto flex flex-wrap items-center justify-between py-4 px-6 lg:px-0'>

                {/* Logo */}
                <NavLink to='/' className='flex items-center'>
                    <img src={logo} className='w-[100px] h-[100px]' />
                </NavLink>

                {/* Hamburger */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative"
                    onClick={toggleMenu}
                >
                    <span
                        className={`block w-6 h-0.5 bg-black rounded transform transition-all duration-300 origin-center
            ${menuOpen ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""}`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-black rounded my-1 transition-all duration-300
            ${menuOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-black rounded transform transition-all duration-300 origin-center
            ${menuOpen ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""}`}
                    ></span>
                </button>


                {/* Links + User */}
                <div className={`w-full lg:w-auto flex flex-col lg:flex-row gap-4 lg:gap-[30px] mt-4 lg:mt-0 
                    ${menuOpen ? "flex" : "hidden"} lg:flex items-center`}>

                    {/* Navigation Links */}
                    <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-[30px] mt-2 lg:mt-0'>
                        <NavLink to='/home' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>About</NavLink>
                        <NavLink to='/pets_supplies' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>Pets & Supplies</NavLink>
                        {user && <>
                            <NavLink to='/add_listings' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>Add Listing</NavLink>
                            <NavLink to='/my_listings' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>My Listings</NavLink>
                            <NavLink to='/my_orders' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>My Orders</NavLink>
                        </>}
                        <NavLink to='/contact' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>Contact Us</NavLink>
                    </div>

                    {/* User and Theme */}
                    <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-[30px]'>
                        {
                        user ? (
                            <>
                                <img src={user.photoURL} className="w-10 h-10 rounded-full" />
                                <button onClick={handleOpenModal} className='font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Logout</button>
                            </>
                        ) : (
                            <>
                                <NavLink to='/login' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>Login</NavLink>
                                <NavLink to='/register' className={({ isActive }) => `font-bold ${isActive ? activeClass : normalClass}`}>Register</NavLink>
                            </>
                        )
                        }

                        {/* Theme Toggle */}
                        <label className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"} className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                    </div>
                </div>
            </div>

            {/* Logout Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className="py-4">Are you sure you want to logout?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleLogout} className="btn">Yes</button>
                            <button onClick={handleCloseModal} className="btn">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </nav>
    );
};

export default Navbar;
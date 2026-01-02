import React, { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/PetMart.png';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = use(AuthContext);

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

    return (
        <div className='flex flex-col items-center lg:justify-between lg:flex-row px-[40px] gap-[20px] lg:gap-0 py-[20px] box-border inter shadow-lg sticky top-0 z-50 bg-white'>
            <div>
                <NavLink to='/'>
                    <img src={logo} className='w-[100px] h-[100px]' />
                </NavLink>
            </div>
            <div className='flex flex-col lg:flex-row gap-[20px]  lg:gap-[30px]'>
                <NavLink to='/home' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Home</NavLink>
                <NavLink to='/pets_supplies' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Pets & Supplies</NavLink>
                {
                    user ? (
                        <>
                            <NavLink to='/add_listings' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Add Listing</NavLink>
                            <NavLink to='/my_listings' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>My Listings</NavLink>
                            <NavLink to='/my_orders' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>My Orders</NavLink>
                        </>
                    ) : (
                        <>

                        </>
                    )
                }
            </div>
            <div className='flex flex-col items-center lg:gap-[30px] lg:flex-row gap-[20px]'>
                {
                    user ? (
                        <>
                            <NavLink><img src={user.photoURL} className="w-[40px] h-[40px] rounded-[50%]" /></NavLink>
                            <NavLink onClick={handleOpenModal} className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Logout</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to='/login' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Login</NavLink>
                            <NavLink to='/register' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Register</NavLink>
                        </>
                    )
                }
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
            {/* Modal for logout */}

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
        </div>

    );
};

export default Navbar;
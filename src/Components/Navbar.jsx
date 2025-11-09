import React, { use } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/PetMart.png';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = use(AuthContext);

    const handleOpenModal = () => document.getElementById("my_modal_5").showModal();
    const handleCloseModal = () => document.getElementById("my_modal_5").close();

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
        <div className='flex flex-col items-center lg:justify-between lg:flex-row px-[30px] gap-[10px] lg:gap-0 py-[20px] box-border inter shadow-lg'>
            <div>
                <NavLink to='/'>
                    <img src={logo} className='w-[100px] h-[100px]' />
                </NavLink>
            </div>
            <div className='flex flex-col lg:flex-row gap-[30px]'>
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
            <div className='flex flex-col items-center lg:flex-row gap-[30px]'>
                {
                    user ? (
                        <>
                            <NavLink to="/profile"><img src={user.photoURL} className="w-[40px] h-[40px] rounded-[50%]" /></NavLink>
                            <NavLink onClick={handleOpenModal} className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Logout</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to='/login' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Login</NavLink>
                            <NavLink to='/register' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Register</NavLink>
                        </>
                    )
                }

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
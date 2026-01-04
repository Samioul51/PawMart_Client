import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { motion, useScroll } from "framer-motion"

const UserProfile = () => {
    const { user, logout } = use(AuthContext);
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const handleOpenModal = () => document.getElementById("my_modal_5").showModal();
    const handleCloseModal = () => document.getElementById("my_modal_5").close();

    const handleLogout = () => {
        handleCloseModal();
        navigate("/", { replace: true });
        logout().then(() => {
            toast.success("Logged out successfully!");
        }).catch((error) => {
            toast.error(error.message);
            handleCloseModal();
        })
    }

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#545454",
                    zIndex: 9999
                }}
            />
            <div className='py-5 px-3 mx-5 mt-5 flex flex-col items-center bg-white-bg inter'>
                <title>{`PawMart | My Profile`}</title>
                <img src={user.photoURL} className='w-[150px] h-[150px] rounded-[50%] mb-10 border border-black' />
                <p className='tf_heading font-playfair font-bold text-xl lg:text-[40px] text-black text-center mb-10'>{user?.displayName?.toUpperCase()}</p>
                <div className="w-full max-w-[600px] self-center divider divider-neutral"></div>
                <div className='w-full max-w-[600px]'>
                    <div className='text-[12px] lg:text-[16px] flex justify-between mb-5'>
                        <p className='   font-bold text-black'>FULL NAME</p>
                        <p className='font-medium    text-[#666]'>{user?.displayName?.toUpperCase()}</p>
                    </div>
                    <div className="divider divider-neutral mb-5"></div>
                </div>
                <div className='w-full max-w-[600px]'>
                    <div className='text-[12px] lg:text-[16px] flex justify-between mb-5'>
                        <p className='   font-bold text-black'>EMAIL</p>
                        <p className='font-medium    text-[#666]'>{user.email}</p>
                    </div>
                    <div className="divider divider-neutral mb-5"></div>
                </div>
                 <button className='btn btn-neutral border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500' onClick={handleOpenModal}>Logout</button>
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
        </>
    );
};

export default UserProfile;
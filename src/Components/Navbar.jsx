import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/PetMart.png';

const Navbar = () => {
    return (
        <div className='flex flex-col items-center lg:justify-between lg:flex-row px-[30px] gap-[10px] lg:gap-0 py-[20px] box-border inter shadow-lg'>
            <div>
                <NavLink to='/'>
                <img src={logo} className='w-[100px] h-[100px]'/>
                </NavLink>
            </div>
            <div className='flex flex-col lg:flex-row gap-[10px]'>
                <NavLink to='/home' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Home</NavLink>
                <NavLink to='/pets_supplies' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Pets & Supplies</NavLink>
            </div>
            <div className='flex flex-col lg:flex-row gap-[10px]'>
                <NavLink to='/login' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Login</NavLink>
                <NavLink to='/register' className='text-center font-bold bg-linear-to-r from-[#0047ab] to-[#1ca9c9] bg-clip-text text-transparent hover:text-[#D84437] ease duration-500'>Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
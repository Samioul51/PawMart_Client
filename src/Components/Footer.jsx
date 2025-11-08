import React from 'react';
import logo from '../assets/PetMart.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer
                className="w-full bg-[#003d3d] flex flex-col h-auto items-center bottom-0">
                <div className="w-full max-w-[1440px] flex flex-col h-auto items-center gap-[50px] lg:flex-row lg:justify-between lg:gap-0 lg:items-start py-[80px] box-border">
                    <div>
                        <NavLink to='/'> 
                            <img src={logo} className='w-[100px] h-[100px]'/></NavLink>
                    </div>
                    <ul className="flex flex-col gap-[16px]">
                        <li className="text-[20px] font-medium text-white text-center lg:text-start">Company</li>
                        <li className="text-[#A1A1AA] cursor-pointer text-center lg:text-start">About Us</li>
                        <li className="text-[#A1A1AA] cursor-pointer text-center lg:text-start">Our Mission</li>
                        <li className="text-[#A1A1AA] cursor-pointer text-center lg:text-start">Contact Sales</li>
                    </ul>

                    <ul className="flex flex-col gap-[16px]">
                        <li className="text-[20px] font-medium text-white text-center lg:text-start">Services</li>
                        <li className="text-[#A1A1AA] cursor-pointer text-center lg:text-start">Products & Services</li>
                        <li className="text-[#A1A1AA] cursor-pointer text-center lg:text-start">Customer Stories</li>
                    </ul>

                    <ul className="flex flex-col gap-[16px]">
                        <li className="text-[20px] font-medium text-white text-center lg:text-start">Information</li>
                        <li className="text-[#A1A1AA] cursor-pointer text-center lg:text-start">Privacy Policy</li>
                        <li className="text-[#A1A1AA] cursor-pointer text-center lg:text-start">Terms & Conditions</li>
                        <li className="text-[#A1A1AA] cursor-pointer text-center lg:text-start">Join Us</li>
                    </ul>

                    <ul className="flex flex-col h-auto gap-[16px]">
                        <li className="text-[20px] font-medium text-white text-center lg:text-start">Social Links</li>
                        <li className="text-[#A1A1AA] cursor-pointer flex items-center gap-[8px]"><FaXTwitter className="w-[20px] h-[20px] mx-auto" /></li>
                        <li className="text-[#A1A1AA] cursor-pointer flex items-center gap-[8px]"><FaLinkedin className="w-[20px] h-[20px] mx-auto" /></li>
                        <li className="text-[#A1A1AA] cursor-pointer flex items-center gap-[8px]"><FaFacebook className="w-[20px] h-[20px] mx-auto" /></li>
                    </ul>
                </div>

                <div className="w-full max-w-[1440px] h-px bg-[#E5E7EB] mb-[30px]"></div>

                <p className="text-center text-[#FAFAFA] mb-[30px]">Copyright &copy; 2025. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;
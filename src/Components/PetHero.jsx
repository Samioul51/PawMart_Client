import React from 'react';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import { motion } from 'motion/react';

const PetHero = () => {
    return (
        <div className='w-full max-w-[1440px] mx-auto h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px] pb-[50px] box-border'>
            <motion.div
                whileHover={{ scale: 1.05 }}
            >
                <div className='flex flex-col p-[16px] box-border bg-white inter rounded-[8px] shadow-lg'>
                    <img src={user1} className='w-full h-[285px] rounded-[8px] mb-[16px] border border-gray-500' />
                    <p className='text-[16px] font-medium text-[#001931] mb-[16px]'><span className='font-bold'>Name    : </span>Sarah Johnson</p>
                    <p className='text-[16px] font-medium text-[#001931] mb-[16px]'><span className='font-bold'>Location: </span>New York, USA</p>
                </div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
            >
                <div className='flex flex-col p-[16px] box-border bg-white inter rounded-[8px] shadow-lg'>
                    <img src={user2} className='w-full h-[285px] rounded-[8px] mb-[16px] border border-gray-500' />
                    <p className='text-[16px] font-medium text-[#001931] mb-[16px]'><span className='font-bold'>Name    : </span>Sydney Sweeney</p>
                    <p className='text-[16px] font-medium text-[#001931] mb-[16px]'><span className='font-bold'>Location: </span>Sydney, Australia</p>
                </div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
            >
                <div className='flex flex-col p-[16px] box-border bg-white inter rounded-[8px] shadow-lg'>
                    <img src={user3} className='w-full h-[285px] rounded-[8px] mb-[16px] border border-gray-500' />
                    <p className='text-[16px] font-medium text-[#001931] mb-[16px]'><span className='font-bold'>Name    : </span>Arif Rahman</p>
                    <p className='text-[16px] font-medium text-[#001931] mb-[16px]'><span className='font-bold'>Location: </span>Dhaka, Bangladesh</p>
                </div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
            >
                <div className='flex flex-col p-[16px] box-border bg-white inter rounded-[8px] shadow-lg'>
                    <img src={user4} className='w-full h-[285px] rounded-[8px] mb-[16px] border border-gray-500' />
                    <p className='text-[16px] font-medium text-[#001931] mb-[16px]'><span className='font-bold'>Name    : </span>Salman Khan</p>
                    <p className='text-[16px] font-medium text-[#001931] mb-[16px]'><span className='font-bold'>Location: </span>Mumbai, India</p>
                </div>
            </motion.div>
        </div>
    );
};

export default PetHero;
import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router';

const Listing = ({item}) => {
    const {image,name,category,price,location}=item;
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <div className='flex flex-col p-[16px] box-border bg-white inter rounded-[8px] shadow-lg'>
                <img src={image} className='w-full h-[285px] rounded-[8px] mb-[16px] border border-gray-500' />
                <p className='font-medium text-[#001931] mb-[10px]'><span className='font-bold'>Name: </span>{name}</p>
                <div className='w-full max-w-full flex justify-between mb-[10px]'>
                    <p className='bg-amber-300 px-[10px] box-border rounded-[10px] text-gray-800'>{category}</p>
                    <p className='font-bold'>
                        {
                            price==0?"Free for adoption":`৳ ${price}`
                        }
                    </p>
                </div>
                <p className='font-medium text-[#001931] mb-[10px]'><span className='font-bold'>Location: </span>{location}</p>
                <Link to='/' className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">SEE DETAILS</Link>
            </div>
        </motion.div>
    );
};

export default Listing;
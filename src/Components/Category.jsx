import { motion } from 'motion/react';
import React from 'react';

const Category = ({ cat }) => {
    const { category, img } = cat;
    console.log(cat);
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <div className='flex flex-col p-[16px] box-border bg-white inter rounded-[8px] shadow-lg cursor-pointer'>
                <img src={img} className='w-full h-[285px] rounded-[8px] mb-[16px] border border-gray-500' />
                <p className='text-[16px] text-center font-bold text-[#001931] mb-[16px]'>{category}</p>
            </div>
        </motion.div>
    );
};

export default Category;
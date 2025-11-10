import { motion } from 'motion/react';
import React from 'react';
import Category from './Category';

const Categories = ({ category }) => {
    // console.log(category);
    const data = category.data;
    console.log(data);
    return (
        <div className='w-full max-w-full h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px] px-[40px] pb-[50px] box-border'>

            {
                data.map(cat => (
                    <Category key={cat._id} cat={cat}></Category>
                ))
            }


        </div>
    );
};

export default Categories;
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Listing from '../Components/Listing';

const CategoryWiseListings = () => {
    const { category } = useParams();
    const listings=useLoaderData();

    const filteredData=listings.data.filter(item=>item.category===category);
    return (
        <div className='bg-[#6897ff] py-[50px]'>
            <title>{`PawMart | ${category}`}</title>
            <p className='text-center text-[32px] font-bold mb-[30px]'>{category}</p>
            <div className='w-full max-w-[1440px] h-auto grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-[50px] px-[40px] pb-[50px] box-border'>

                    {
                        filteredData.map(item => (
                            <Listing key={item._id} item={item}></Listing>
                        ))
                    }
                </div>
        </div>
    );
};

export default CategoryWiseListings;
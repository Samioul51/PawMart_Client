import React from 'react';

const Statistics = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='w-full max-w-[1440px] mx-auto h-auto mb-10 py-[50px]'>
                <div className='grid grid-cols-1 lg:grid-cols-4 px-4 gap-4 auto-rows-fr'>
                    <div className='w-full flex flex-col justify-center items-center p-[2rem] border-2 border-solid border-[#e0e0e0] text-center'>
                        <p className='text-[3rem] mb-[1rem] text-black font-bold'>500+</p>
                        <p className='text-[#666]'>Happy Users</p>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center p-[2rem] border-2 border-solid border-[#e0e0e0] text-center'>
                        <p className='text-[3rem] mb-[1rem] text-black font-bold'>300+</p>
                        <p className='text-[#666]'>Pets Listed for Adoption</p>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center p-[2rem] border-2 border-solid border-[#e0e0e0] text-center'>
                        <p className='text-[3rem] mb-[1rem] text-black font-bold'>200+</p>
                        <p className='text-[#666]'>Pet Products Available</p>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center p-[2rem] border-2 border-solid border-[#e0e0e0] text-center'>
                        <p className='text-[3rem] mb-[1rem] text-black font-bold'>150+</p>
                        <p className='text-[#666]'>Verified Sellers & Breeders</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Statistics;
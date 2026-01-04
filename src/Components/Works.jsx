import React from 'react';

const Works = () => {

    const steps = [
        {
            title: "Browse or List",
            desc: "Explore pets and products or list your own easily."
        },
        {
            title: "Connect Directly",
            desc: "Chat with sellers, breeders, or adopters instantly."
        },
        {
            title: "Adopt or Purchase",
            desc: "Finalize adoption or order with full transparency."
        },
        {
            title: "Care & Community",
            desc: "Join a trusted community that loves and protects pets."
        }
    ];

    return (
        <div className='bg-[#F5F5F5]'>
            <div className='w-full max-w-[1440px] mx-auto h-auto mb-10 py-[50px]'>
                <div className='grid grid-cols-1 lg:grid-cols-4 px-4 gap-4 auto-rows-fr'>
                    {
                        steps.map(step => <div key={step.title} className='w-full flex flex-col justify-center items-center p-[2rem] border-2 border-solid border-[#e0e0e0] text-center'>
                            <p className='text-[1rem] mb-[1rem] text-black font-bold'>{step.title}</p>
                            <p className='text-[#666]'>{step.desc}</p>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Works;
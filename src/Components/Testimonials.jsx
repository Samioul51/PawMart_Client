import React from 'react';
import Marquee from "react-fast-marquee";

const Testimonials = () => {
    const reviews = [
        {
            name: "Rakib Hasan",
            review: "PawMart helped me find the perfect pet quickly. Very reliable platform!"
        },
        {
            name: "Nusrat Jahan",
            review: "Loved the adoption process. The pets are well-cared for and listings are clear."
        },
        {
            name: "Shakib Chowdhury",
            review: "Easy to browse and contact sellers. A trustworthy community for pet lovers."
        },
        {
            name: "Tania Akter",
            review: "Great experience! Found a lovely puppy and the seller was verified."
        },
        {
            name: "Fahim Mahmud",
            review: "The platform is well-organized and safe. Highly recommended for adopters and buyers."
        }
    ];

    return (
            <div className='bg-[#F5F5F5]'>
                <div className='w-full max-w-[1440px] mx-auto h-auto mb-10 py-[50px]'>
                    <Marquee pauseOnHover gradient={false}>
                    {
                        reviews.map(review => 
                            <div key={review.name} className='min-w-[280px] max-w-[300px] flex flex-col justify-center items-center p-[2rem] border-2 border-solid border-[#e0e0e0] text-center mr-6'>
                                <p className="text-gray-700 text-base mb-4">{review.review}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <p className="font-semibold text-black">{review.name}</p>
                                </div>
                            </div>
                        )
                    }
                    </Marquee>
                </div>
            </div>
    );
};

export default Testimonials;
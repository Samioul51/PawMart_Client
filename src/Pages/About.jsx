import React from 'react';
import { motion, useScroll } from 'motion/react';

const About = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <title>{`PawMart | About`}</title>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                    zIndex: 9999
                }}
            />
            <div className='bg-[#F5F5F5]'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col items-center gap-[50px] '>
                 <div className='bg-[url("/about.jpg")] bg-cover bg-center bg-no-repeat w-full h-[400px] flex flex-col justify-center mb-5'>
                     <p className='font-bold text-3xl lg:text-[40px] mb-[5px] text-white text-center'>ABOUT US</p>
                 </div>
                 <div className='mx-auto mb-10 px-[40px]'>
                    <p className='text-[#666666] text-justify'>PawMart is a community-driven marketplace designed to connect pet owners, breeders, and pet shops with people looking to adopt pets or purchase quality pet-related products. The platform allows users to easily list pets for adoption, showcase animals for responsible sale, and sell essential pet items such as food, toys, and accessories. Buyers and adopters can browse detailed listings, communicate directly with sellers or owners, and place orders with confidence. By bringing the pet community together in one trusted space, PawMart promotes responsible pet ownership, simplifies pet adoption, and makes pet care more accessible and convenient.</p>
                 </div>
            </div>
            </div>
        </>
    );
};

export default About;
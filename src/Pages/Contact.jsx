import React from 'react';
import { motion, useScroll } from 'motion/react';

const Contact = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <title>{`PawMart | Contact Us`}</title>
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
            <div className='w-full max-w-[1440px] mx-auto flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-between gap-[50px]'>
                
            </div>
        </>
    );
};

export default Contact;
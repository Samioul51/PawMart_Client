import React from 'react';
import { motion, useScroll } from 'motion/react';

const MyOrders = () => {
    const {scrollYProgress}=useScroll();
    
    return (
        <>
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
        <div className='bg-[#6897ff]'>
            <title>{`PawMart | My Orders`}</title>
        </div>
        </>
    );
};

export default MyOrders;
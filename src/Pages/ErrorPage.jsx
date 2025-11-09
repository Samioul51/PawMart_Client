import React from 'react';
import ErrorImg from '../assets/error.jpg'
import { Link } from 'react-router';
import Button from '../Components/Button';
import { motion, useScroll } from 'motion/react';

const ErrorPage = () => {
    const { scrollYProgress } = useScroll();

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
            <div className='flex flex-col gap-[10px] justify-center items-center min-h-screen bg-[#6897ff]'>
                <title>{`404 Not Found`}</title>
                <img src={ErrorImg} className='w-full max-w-[500px] h-auto' />
                <Link to='/home'><Button>Back to Home</Button></Link>
            </div>
        </>
    );
};

export default ErrorPage;
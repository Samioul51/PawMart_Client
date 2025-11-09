import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import { motion, useScroll } from 'motion/react';
import Awareness from '../Components/Awareness';

const Home = () => {

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
            <title>{`PawMart | Home`}</title>
            <div className='mb-[50px]'>
                <Swiper
                    autoHeight={true}
                    spaceBetween={20}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500, 
                        disableOnInteraction: false, 
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={slide1} className='w-full max-w-full h-auto'/></SwiperSlide>
                    <SwiperSlide><img src={slide2} className='w-full max-w-full h-auto'/></SwiperSlide>
                    <SwiperSlide><img src={slide3} className='w-full max-w-full h-auto'/></SwiperSlide>
                </Swiper>
            </div>

            {/* Why Adopt from PawMart Section */}

            <Awareness></Awareness>
        </div>
        </>
    );
};

export default Home;
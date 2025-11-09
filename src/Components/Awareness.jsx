import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import cat from '../assets/cat.jpg'

const Awareness = () => {
    return (
        <div className='w-full max-w-full h-auto bg-[#36454F] flex flex-col lg:flex-row lg:justify-between items-center p-[20px] box-border gap-[20px] mb-[50px]'>
            <img src={cat} className='w-full max-w-[800px] h-auto rounded-[10px]' />
            <div className='w-full max-w-[50%] flex flex-col items-center gap-[20px] h-auto'>
                <p className='text-white font-bold text-4xl inter'>Why Adopt From PawMart?</p>
                <p className='text-[#FDFBD4] text-xl text-justify w-full max-w-[500px]'>
                    <Typewriter
                        words={[
                            'Adopting from PawMart means giving a loving home to a pet in need while supporting ethical and responsible pet care. Each animal is health-checked, vaccinated, and ready to become part of your family. Plus, your adoption helps PawMart continue rescuing and rehoming more animals in need.'
                        ]}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={40}
                        deleteSpeed={0}
                        delaySpeed={1000}
                    />
                    </p>

            </div>

        </div>
    );
};

export default Awareness;
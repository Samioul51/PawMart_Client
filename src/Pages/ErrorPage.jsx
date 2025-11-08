import React from 'react';
import ErrorImg from '../assets/error.jpg'
import { Link } from 'react-router';
import Button from '../Components/Button';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-[10px] justify-center items-center min-h-screen bg-[#6897ff]'>
            <img src={ErrorImg} className='w-full max-w-[500px] h-auto'/>
            <Link to='/home'><Button>Back to Home</Button></Link>
        </div>
    );
};

export default ErrorPage;
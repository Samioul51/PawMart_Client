import React, { use, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Listing from '../Components/Listing';

const listingsPromise = fetch("https://paw-mart-server-seven.vercel.app/listings").then(res => res.json());

const Pets_Supplies = () => {
    const { scrollYProgress } = useScroll();

    const listings = use(listingsPromise);
    // console.log(category.data);
    const listingData = listings.data;

    const [filter,setFilter]=useState("ALL");
    const [search,setSearch]=useState("");

    const filteredData=listingData.filter(item=>{
        const matchCat= filter==="ALL" || item.category.toUpperCase()===filter;
        const matchSer= item.name.toUpperCase().includes(search.toUpperCase());
        return matchCat && matchSer;        
    });

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
            <div className='bg-[#6897ff] py-[50px]'>
                <title>{`PawMart | Pets & Supplies`}</title>
                <p className='text-center text-[32px] font-bold mb-[30px]'>ALL PETS & PRODUCTS</p>
                <div className='flex items-center justify-between mx-auto max-w-[1440px] mb-[50px] px-[40px]'>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1"><IoIosArrowDropdownCircle /> {filter}
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {
                                ["ALL","PETS (ADOPTION)","PET FOOD","ACCESSORIES","PET CARE PRODUCTS"].map((category)=>(
                                    <li key={category}><a onClick={()=>setFilter(category)}>{category}</a></li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
                <div className='w-full max-w-[1440px] h-auto grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-[50px] px-[40px] pb-[50px] box-border'>

                    {
                        filteredData.map(item => (
                            <Listing key={item._id} item={item}></Listing>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Pets_Supplies;
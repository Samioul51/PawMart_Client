import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Listing from '../Components/Listing';
import Loading from '../Components/Loading'

const Pets_Supplies = () => {
    const { scrollYProgress } = useScroll();

    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit] = useState(12);

    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const fetchListings = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit,
                category,
                search,
                sort
            });
            const res = await fetch(`https://paw-mart-server-seven.vercel.app/listings?${params.toString()}`);
            const data = await res.json();
            if (data.success) {
                setListings(data.data);
                setTotalPages(data.totalPages);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        setPage(1);
    }, [category, search, sort]);

    useEffect(() => {
        fetchListings();
    }, [page, category, search, sort, limit]);

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
            <div className='bg-[#F5F5F5] px-[40px] py-[50px]'>
                <title>{`PawMart | Pets & Supplies`}</title>
                <p className='text-center text-[32px] font-bold mb-[30px]'>ALL PETS & PRODUCTS</p>
                <div className='flex flex-col items-start justify-between mb-8 gap-4'>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />

                    <div className="flex gap-8">
                        {/* Category */}
                        <div className="bg-white dropdown dropdown-hover">
                            <div tabIndex={0} className="btn flex items-center gap-2">
                                <IoIosArrowDropdownCircle /> {category}
                            </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
                                {["All", "Pets (Adoption)", "Pet Food", "Accessories", "Pet Care Products"]
                                    .map(cat => (
                                        <li key={cat}><a onClick={() => setCategory(cat)}>{cat}</a></li>
                                    ))}
                            </ul>
                        </div>

                        {/* Sort */}
                        <div className="bg-white dropdown dropdown-hover">
                            <div tabIndex={0} className="btn flex items-center gap-2">
                                <IoIosArrowDropdownCircle /> Sort
                            </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
                                <li><a onClick={() => setSort("price_asc")}>Price: Low to High</a></li>
                                <li><a onClick={() => setSort("price_desc")}>Price: High to Low</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {
                    loading ? (
                        <Loading></Loading>
                    ) : listings.length === 0 ? (
                        <p className="text-center text-xl font-medium mb-8">NO ITEM FOUND</p>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8'>
                            {listings.map(item => <Listing key={item._id} item={item} />)}
                        </div>
                    )
                }

                <div className='flex justify-center gap-3'>
                    <button
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className='btn btn-sm'
                    >Prev</button>

                    <span className='flex items-center justify-center px-4'>{page} / {totalPages}</span>

                    <button
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                        className='btn btn-sm'
                    >Next</button>
                </div>
            </div>
        </>
    );
};

export default Pets_Supplies;
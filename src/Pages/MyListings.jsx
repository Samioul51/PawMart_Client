import React, { use,useEffect, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyListings = () => {
    const { scrollYProgress } = useScroll();
    const { user } = use(AuthContext);
    const [listings,setListings]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch("http://localhost:3000/listings")
        .then(res=>res.json())
        .then(data=>{
            setListings(data.data);
            setLoading(false);
        })
        .catch(error=>{
            setLoading(false);
        })
    },[]);
    const myData = listings.filter(list => list.uid === user.uid);
    // console.log(myData);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/listings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your listing has been deleted.",
                                icon: "success"
                            });

                            const remaining=listings.filter(list=>list._id!==_id);
                            setListings(remaining);
                        }
                    })
            }
        });
    }

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
                <title>{`PawMart | My Listings`}</title>
                <p className='text-center text-[32px] font-bold mb-[10px]'>MY LISTINGS</p>
                <div className='w-full max-w-[1440px] h-auto mx-auto bg-white p-[50px] rounded-[10px]'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Product/Pet Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Location</th>
                                    <th>Description</th>
                                    <th>Pick-up Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myData.map((list, index) => (
                                        <tr key={list._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={list.image}
                                                                alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {list.name}
                                            </td>
                                            <td>
                                                {list.category}
                                            </td>
                                            <td>{list.price}</td>
                                            <td>{list.location}</td>
                                            <td>{list.description}</td>
                                            <td>{list.date}</td>
                                            <td className='flex flex-col'>
                                                <button type="submit" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">
                                                    Edit
                                                </button>
                                                <button onClick={() => handleDelete(list._id)} type="submit" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyListings;
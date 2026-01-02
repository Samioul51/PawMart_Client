import React, { use, useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyListings = () => {
    const { scrollYProgress } = useScroll();
    const { user } = use(AuthContext);
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingListing, setEditingListing] = useState(null);
    const orderModalRef = useRef(null);

    const [category, setCategory] = useState("");
    const [formPrice, setFormPrice] = useState("");

    useEffect(() => {
        fetch("https://paw-mart-server-seven.vercel.app/listings")
            .then(res => res.json())
            .then(data => {
                setListings(data.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            })
    }, []);
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

                fetch(`https://paw-mart-server-seven.vercel.app/listings/${_id}`, {
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

                            const remaining = listings.filter(list => list._id !== _id);
                            setListings(remaining);
                        }
                    })
            }
        });
    }

    const handleModalOpen = (list) => {
        setEditingListing(list);
        setCategory(list.category);
        setFormPrice(list.price);
        orderModalRef.current.showModal();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedData = {
            name: form.name.value,
            location: form.location.value,
            price: form.price.value,
            description: form.description.value,
            image: form.image.value,
            date: form.date.value
        }

        fetch(`https://paw-mart-server-seven.vercel.app/listings/${editingListing._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire({
                        title: "Updated!",
                        text: data.message,
                        icon: "success"
                    });

                    const updatedListings = listings.map(list => list._id === editingListing._id ? { ...list, ...updatedData } : list);
                    setListings(updatedListings);
                    orderModalRef.current.close();
                }
            })
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
            <div className='bg-[#F5F5F5] py-[50px]'>
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
                                                <button onClick={() => handleModalOpen(list)} type="submit" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">
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
                <dialog ref={orderModalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Place Your Order</h3>
                        <form onSubmit={handleSubmit}>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={editingListing?.name}
                                    name="name"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={editingListing?.category}
                                    readOnly
                                    name="category"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    value={category==="Pets (Adoption)"?"0":formPrice}
                                    readOnly={category==="Pets (Adoption)"}
                                    name="price"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={editingListing?.location}
                                    name="location"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={editingListing?.description}
                                    name="description"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={editingListing?.image}
                                    name="image"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Owner Name</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={editingListing?.ownerName}
                                    readOnly
                                    name="ownerName"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Owner Email</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={editingListing?.ownerEmail}
                                    readOnly
                                    name="ownerEmail"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Pick-up Date</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={editingListing?.date}
                                    readOnly
                                    name="date"
                                    className="input input-bordered w-full"
                                />
                            </div>


                            <div className="modal-action justify-between">
                                <button
                                    type="button" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500"
                                    onClick={() => orderModalRef.current.close()}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    );
};

export default MyListings;
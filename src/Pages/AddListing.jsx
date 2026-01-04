import { motion, useScroll } from 'motion/react';
import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
const AddListing = () => {
    const { scrollYProgress } = useScroll();
    const { user } = use(AuthContext);
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();

    const navigate = useNavigate();
    const userID = user.uid;
    console.log(userID)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const category = form.category.value;
        const price = Number(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;

        const newListing = {
            name: productName,
            category: category,
            price: price,
            location: location,
            description: description,
            image: image,
            ownerEmail: email,
            ownerName:user.displayName,
            date: date,
            uid:userID
        }

        fetch("https://paw-mart-server-seven.vercel.app/listing", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newListing)
        }).then(res => res.json()).then(data => {
            navigate("/");
            toast.success("Listing added successfully!");
        });
    }

    const handleCategoryChange = (e) => {
        const selected = e.target.value;
        setCategory(selected);
        if (selected === "Pets (Adoption)")
            setPrice(0);
        else
            setPrice("");
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
            <div className='w-full bg-[#F5F5F5] py-[50px]'>
                <title>{`PawMart | Add Listing`}</title>
                <p className='text-center text-[32px] font-bold mb-[10px]'>ADD LISTING</p>
                <form className='w-full max-w-[1440px] h-auto mx-auto bg-white p-[50px] rounded-[10px]' onSubmit={handleSubmit}>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Product/Pet Name</span>
                        </label>
                        <input
                            type="text"
                            name="productName"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category"
                            className="select select-bordered w-full"
                            value={category}
                            onChange={handleCategoryChange}
                            required
                        >
                            <option value="" hidden>Select a category</option>
                            <option value="Pets (Adoption)">PETS</option>
                            <option value="Pet Food">PET FOOD</option>
                            <option value="Pet Care Products">PET CARE PRODUCT</option>
                            <option value="Accessories">ACCESSORIES</option>

                        </select>
                    </div>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            readOnly={category === "Pets (Adoption)"}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            type="text"
                            name="location"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            type="text"
                            name="description"
                            className="input input-bordered w-full resize-none"
                            required
                        ></textarea>
                    </div>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="text"
                            name="image"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Pick-up Date</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            readOnly
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className='w-full flex justify-center'>
                        <button type="submit" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default AddListing;
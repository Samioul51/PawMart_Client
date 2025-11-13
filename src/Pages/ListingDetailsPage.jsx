import React, { use, useRef } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const ListingDetailsPage = () => {
    const data = useLoaderData();
    const {user}=use(AuthContext);
    
    const navigate=useNavigate();

    const { _id,name, image, location, category, ownerEmail, description, price } = data.data;
    
    const buyerUID=user.UID;
    const orderModalRef = useRef(null);

    const handleModalOpen = () => {
        orderModalRef.current.showModal();
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=e.target;
        const productId=form.productId.value;
        const productName=form.productName.value;
        const buyerName=form.buyerName.value;
        const email=form.email.value;
        const quantity=form.quantity.value;
        const price=form.price.value;
        const address=form.address.value;
        const phone=form.phone.value;
        const date=form.date.value;
        const additionalNotes=form.additionalNotes.value;

        const newOrder={
            productId:productId,
            productName:productName,
            buyerName:buyerName,
            email:email,
            quantity:quantity,
            price:price,
            address:address,
            phone:phone,
            date:date,
            additionalNotes:additionalNotes,
            uid:buyerUID
        }

        fetch("http://localhost:3000/order",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newOrder)
        }).then(res=>res.json()).then(data=>{
            orderModalRef.current.close()
            navigate("/");
            toast.success("Order completed successfully!");
        });
        
    }

    // console.log(user);
    // console.log(data);
    return (
        <div className='bg-[#6897ff] py-[50px]'>
            <title>{`PawMart | ${name}`}</title>
            <div className='w-full max-w-[1440px] mx-auto flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-between gap-[50px]'>

                <img src={image} className='w-full max-w-[500px] h-auto rounded-[10px]' />

                <div className='w-full max-w-[60%] flex flex-col justify-center p-[30px] bg-white rounded-[10px] shadow-lg'>

                    <p className='text-2xl font-extrabold mb-[10px] text-gray-900'>{name.toUpperCase()}</p>

                    <p className='w-[180px] bg-amber-300 px-[10px] box-border rounded-[10px] text-gray-800 text-center mb-[50px]'>{category.toUpperCase()}</p>

                    <p className='font-bold border-b-2 border-gray-300 pb-2 mb-[16px]'>DESCRIPTION:</p>
                    <p className='font-medium text-justify mb-[50px]'>{description.toUpperCase()}</p>


                    <p className='font-bold border-b-2 border-gray-300 pb-2 mb-[16px]'>CONTACT DETAILS:</p>
                    <div className='bg-gray-100 p-[8px] rounded-lg mb-[50px]'>
                        <p className='font-medium'>OWNER's EMAIL: {ownerEmail}</p>
                        <p className='font-medium'>LOCATION: {location.toUpperCase()}</p>

                    </div>
                    <div>
                        <p className='font-bold text-xl text-green-700 mb-[8px]'>PRICE: {
                            price === 0 ? "FREE" : `৳ ${price}`
                        }</p>
                        <button onClick={handleModalOpen} className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">
                            {
                                price === 0 ? "ADOPT NOW" : "ORDER NOW"
                            }
                        </button>
                    </div>

                </div>
            </div>
            <dialog ref={orderModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Place Your Order</h3>
                    <form onSubmit={handleSubmit}>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <input
                                type="text"
                                value={user.displayName}
                                name="buyerName"
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={user.email}
                                name="email"
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Listing ID</span>
                            </label>
                            <input
                                type="text"
                                value={_id}
                                name="productId"
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                name="productName"
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                readOnly={category === "PETS (ADOPTION)"}
                                defaultValue={1}
                                min={1}
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="text"
                                name="price"
                                value={price}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Your address"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Pick-up Date</span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your phone number"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <textarea
                                name="additionalNotes"
                                placeholder="Any additional info"
                                className="textarea textarea-bordered w-full resize-none" 
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
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ListingDetailsPage;
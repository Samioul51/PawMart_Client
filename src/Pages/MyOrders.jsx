import React, { use } from 'react';
import { motion, useScroll } from 'motion/react';
import { AuthContext } from '../Provider/AuthProvider';
import { jsPDF } from 'jspdf'
import { autoTable } from 'jspdf-autotable'

const ordersPromise = fetch("https://paw-mart-server-seven.vercel.app/orders").then(res => res.json());

const MyOrders = () => {
    const { scrollYProgress } = useScroll();
    const { user } = use(AuthContext);
    const orders = use(ordersPromise);
    const ordersData = orders.data;
    // console.log(ordersData);
    const myData = ordersData.filter(list => list.email === user.email);
    // console.log(myData);

    const handleDownloadPDF=()=>{
        const doc=new jsPDF();

        doc.setFontSize(18);
        doc.text("My Orders",14,22);

        const columns=[
            "#",
            "Product/Listing Name",
            "Buyer Name",
            "Price",
            "Quantity",
            "Address",
            "Date",
            "Phone"
        ];

        const rows=myData.map((order,index)=>[
            index+1,
            order.productName,
            order.buyerName,
            order.price,
            order.quantity,
            order.address,
            order.date,
            order.phone
        ]);

        autoTable(doc,{
            head:[columns],
            body:rows,
            startY:30,
            styles:{fontSize:10}
        });

        doc.save("myOrders.pdf");
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
                <title>{`PawMart | My Orders`}</title>
                <p className='text-center text-[32px] font-bold mb-[10px]'>MY ORDERS</p>
                <div className='w-full max-w-[1440px] h-auto mx-auto bg-white p-[50px] rounded-[10px]'>
                    <div className="overflow-x-auto mb-[20px]">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product/Listing Name</th>
                                    <th>Buyer Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Address</th>
                                    <th>Date</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myData.map((order, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{order.productName}</td>

                                            <td>
                                                {order.buyerName}
                                            </td>
                                            <td>
                                                {order.price}
                                            </td>
                                            <td>{order.quantity}</td>
                                            <td>{order.address}</td>
                                            <td>{order.date}</td>
                                            <td>{order.phone}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={handleDownloadPDF} className="btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">
                            Download PDF
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default MyOrders;
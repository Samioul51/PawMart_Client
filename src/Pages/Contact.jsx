import React from 'react';
import toast from 'react-hot-toast';
import { motion, useScroll } from "framer-motion"

const Contact = () => {
    const { scrollYProgress } = useScroll();

    const handleSendMessage = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const fields = {
            name: name,
            email: email,
            subject: subject,
            message: message,
            sent: new Date()
        };
        // const res = await fetch("https://paw-mart-server-seven.vercel.app/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(fields)
        // });

        // if (res.ok) {
        //     toast.success("Message sent successfully!");
        //     form.reset();
        // }
        // else
        //     toast.error("Failed to send message. Try again later.");
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
                    backgroundColor: "#545454",
                    zIndex: 9999
                }}
            />
            <div className='bg-[#F5F5F5]'>
            <div className='w-full max-w-[1440px] mx-auto h-auto mb-10 py-[50px]'>
                <title>{`Pawmart | Contact Us`}</title>
                <div className='text-black text-3xl lg:text-[40px] font-bold text-center mb-10'>
                    LEAVE A MESSAGE FOR US
                </div>
                <form onSubmit={handleSendMessage} className=' bg-white-bg shadow-2xl p-[64px]  w-full max-w-[720px] mx-auto '>
                    <div className='flex flex-col mb-[24px]'>
                        <label className="label mb-[8px] font-medium text-black">Your Name</label>
                        <input type="text" className="input bg-fafafa-bg px-[14px] py-[19px] w-full text-[1rem] rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className='flex flex-col mb-[24px]'>
                        <label className="label mb-[8px] font-medium text-black">Your Email</label>
                        <input type="email" className="input bg-fafafa-bg px-[14px] py-[19px] w-full text-[1rem] rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300" name="email" placeholder="Enter your Email" required />
                    </div>
                    <div className='flex flex-col mb-[24px]'>
                        <label className="label mb-[8px] font-medium text-black">Subject</label>
                        <input type="text" className="input bg-fafafa-bg px-[14px] py-[19px] w-full text-[1rem] rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300" name="subject" placeholder="Subject" required />
                    </div>
                    <div className='flex flex-col mb-[24px]'>
                        <label className="label mb-[8px] font-medium text-black">Message</label>
                        <textarea name="message" class="textarea bg-fafafa-bg px-[14px] py-[19px] w-full text-[1rem] rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300 resize-none h-[200px]" placeholder="Message" required></textarea>
                    </div>

                    <button type="submit" className="w-full btn btn-neutral mt-4 border-none bg-linear-to-r from-[#0047ab] to-[#1ca9c9] hover:from-[#D84437] hover:to-[#ff6b6b] ease-in transition duration-500">
                        Send
                    </button>
                </form>
            </div>
            </div>
        </>
    );
};

export default Contact;
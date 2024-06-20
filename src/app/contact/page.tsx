"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const page = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname,
                email,
                message,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div className='min-h-screen  md:px-10 px-4 flex flex-col md:flex-row justify-between'>
            <div className='md:w-1/2 pt-40'>
                <h1 className='md:text-6xl font-canela font-extralight flex flex-col '>
                    <span>
                        Des Questions
                    </span>

                    <span>
                        dire bonjours ? envoyez votre message !
                    </span>


                </h1>
                <div>

                    <form
                        onSubmit={handleSubmit}
                        className="py-4  border-t flex flex-col gap-5 w-full mt-10"
                    >
                        <div className='flex flex-col md:flex-row gap-10'>
                            <div className='md:w-1/2'>
                                <label htmlFor="fullname" className='hidden'>Full Name</label>
                                <input
                                    onChange={(e) => setFullname(e.target.value)}
                                    value={fullname}
                                    type="text"
                                    id="fullname"
                                    placeholder="Nom"
                                    className='bg-transparent border-b border-colortitle text-colortitle outline-none w-full placeholder-colortitle font-light pb-4'
                                />
                            </div>

                            <div className='md:w-1/2'>
                                <label htmlFor="email" className='hidden'>Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                    className='bg-transparent border-b border-colortitle text-colortitle outline-none w-full placeholder-colortitle font-light pb-4'
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="message" className='hidden'>Your Message</label>
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                className=" w-full bg-transparent border-b border-colortitle text-colortitle outline-none placeholder-colortitle font-light "
                                id="message"
                                placeholder="Message"

                            ></textarea>
                        </div>

                        <button className="bg-colortitle rounded-full p-3 text-white  font-light md:w-fit md:px-36 mt-10"
                            type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className='relative w-60 h-60 md:h-[90vh] md:w-[40vw] md:mt-20 mx-auto md:m-0 my-10'>
                <Image src="/IMG_7183_1.webp" fill className='object-cover' alt="image" />
            </div>

        </div>
    )
}

export default page
"use client"
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
        <div className='min-h-screen pt-40 md:px-10 px-4'>
            <div className='md:w-1/2'>
                <h1 className='md:text-5xl font-canela font-extralight flex flex-col '>
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
                        className="py-4 mt-4 border-t flex flex-col gap-5 w-full"
                    >
                        <div className='w-full'>
                            <label htmlFor="fullname" className='hidden'>Full Name</label>
                            <input
                                onChange={(e) => setFullname(e.target.value)}
                                value={fullname}
                                type="text"
                                id="fullname"
                                placeholder="John Doe"
                                className='bg-transparent border-b border-colortitle text-colortitle outline-none w-full'
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className='hidden'>Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                id="email"
                                placeholder="john@gmail.com"
                                className='bg-transparent border-b border-colortitle text-colortitle outline-none w-full'
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className='hidden'>Your Message</label>
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                className="h-32 w-full bg-transparent border-b border-colortitle text-colortitle outline-none"
                                id="message"
                                placeholder="Type your message here..."

                            ></textarea>
                        </div>

                        <button className="bg-colortitle rounded-full p-3 text-white font-bold"
                            type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default page
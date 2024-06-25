"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const products = [
    {
        "title": "France",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ",
        "img": "/luxury-retro-broadcast-radio-receiver.jpg"
    },
    {
        "title": "Italie",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "img": "/ancient-pottery-vessel-with-retro-design.jpg"
    },
    {
        "title": "Espagne",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "img": "/sun-god-depicted-as-powerful-man-renaissance-setting.jpg"
    },
    {
        "title": "Gréce",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "img": "/stone-greek-goddess-head.jpg"
    },

    {
        "title": "England",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "img": "/skull-indoors-arrangement-still-life.jpg"
    },


]

const AboutProduct = () => {
    const [image, setImage] = useState(0)
    return (
        <div className='md:py-40 py-20  md:px-10 px-4 '>
            <h2 className='big-text font-canela font-extralight text-center uppercase'>Celebrez l'origine des flaveurs</h2>
            <div className='flex flex-col md:flex-row md:gap-20 mt-20'>
                <div className='md:w-1/2   flex flex-col  '>
                    {
                        products.map((product, i) => (
                            <div key={i}>
                                <div className='md:w-1/2 md:h-[120vh] h-[500px] relative block md:hidden'>
                                    <Image alt="image" src={product.img} className='object-cover ' fill />
                                </div>
                                <div className='border-b border-colortitle group py-10 flex flex-col items-start justify-start cursor-pointer' key={i} onMouseOver={() => setImage(i)}>
                                    <h3 className={`font-canela md:text-3xl md:opacity-55 md:group-hover:opacity-100`}>{product.title}</h3>
                                    <div className={`block md:hidden md:group-hover:block`}>
                                        <p className='font-neue opacity-75 mt-2'>
                                            {product.description}
                                        </p>
                                        <div className=' w-fit mt-2'>
                                            <Link href="/shop" className="group link-button  border border-black text-xl flex w-fit justify-between items-center gap-2 m-auto hover:bg-black hover:text-white"><span>en savoir plus</span><span className='rounded-full flex justify-center items-center h-8 w-8 bg-black text-white group-hover:bg-white group-hover:text-black '>s</span></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))
                    }
                </div>

                <div className='md:w-1/2 md:h-[120vh] h-[600px] relative hidden md:block'>
                    <Image alt="image" src={products[image].img} className='object-cover hidden md:block ' fill />

                </div>
            </div>

        </div>
    )
}

export default AboutProduct
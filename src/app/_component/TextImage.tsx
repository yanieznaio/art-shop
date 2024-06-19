import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const TextImage = () => {
    return (
        <div className='px-4 md:px-10 flex flex-col md:flex-row gap-10 py-20'>
            <div className='flex flex-col md:w-1/2 justify-center items-center  '>
                <h2 className='font-canela  big-text font-extralight text-center uppercase  flex flex-col'>

                    <span>Voir notre</span>
                    <span> hisoire</span>
                </h2>
                <p className=''>
                    We are as much storytellers as bakers. Every recipe we write evokes the sensations of a place and moment. Our traditional methods and premium ingredients create subtle, lingering experiences.
                </p>
                <div className='mt-6'>
                    <Link href="/shop" className="group link-button  border border-black text-xl flex w-fit justify-between items-center gap-2 m-auto hover:bg-black hover:text-white"><span>Boutique</span><span className='rounded-full flex justify-center items-center h-8 w-8 bg-black text-white group-hover:bg-white group-hover:text-black '>s</span></Link>

                </div>

            </div>
            <div className='relative h-[400px] md:h-[120vh] w-[80%] m-auto md:w-1/2'>
                <Image src="/Group_12_4782102b-32e7-429c-897b-f9257f4279d1.jpg" alt="image" fill className='object-cover' />
            </div>

        </div>
    )
}

export default TextImage
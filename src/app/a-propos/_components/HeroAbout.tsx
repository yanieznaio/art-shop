import Image from 'next/image'
import React from 'react'

const HeroAbout = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row pt-20 md:pt-0 px-4 md:px-0 gap-10 md:gap-0'>
            <div className='relative md:h-[120vh] h-screen md:w-1/2 w-full'>
                <Image src="/heroArtShop.jpg" alt="image" fill className='object-cover' />
            </div>
            <div className='md:px-10 md:py-10 md:w-1/2 flex flex-col justify-center items-center gap-10'>
                <h1 className='big-text font-canela font-extralight uppercase'>What we do</h1>
                <div className='relative md:w-72 md:h-80 w-full h-[500px]'>
                    <Image src="/greek-busts-temple.jpg" alt="image" fill className='object-cover' />
                </div>
                <p className='text-center font-neue text-xl text-colortitle opacity-80'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab i</p>
            </div>
        </div>
    )
}

export default HeroAbout
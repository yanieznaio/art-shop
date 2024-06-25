import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (

        <div className='relative pt-40 text-whitegrey min-h-screen md:min-h-[120vh]'>
            <div className='absolute top-0 left-0 uppercase  w-full h-full bg-no-repeat bg-cover bg-top z-0 brightness-75' style={{ backgroundImage: "url('/backgroundArtShop.jpg')" }} />
            <div className='relative z-10 text-center'>
                <h1 className=' uppercase text-white flex flex-col  font-[300] z-10'><span>Echappez </span><span>l'ordinaire</span></h1>
                <Link href="/shop" className="group link-button text-white text-xl flex w-fit justify-between items-center gap-2 m-auto hover:bg-white hover:text-black"><span>voir la boutique</span><span className='rounded-full flex justify-center items-center h-8 w-8 bg-white text-black group-hover:bg-black group-hover:text-white '>s</span></Link>
            </div>

        </div>



    )
}

export default Hero
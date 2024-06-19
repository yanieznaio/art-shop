import React from 'react'
import Image from 'next/image'
const BigImage = ({ src }: { src: string }) => {
    return (
        <div className='h-[600px] md:h-[120vh] w-screen relative'>
            <Image src={src} fill className="object-cover" alt="image" />
        </div>
    )
}

export default BigImage
import BigImage from '@/app/_component/BigImage'
import React from 'react'

const Bigtext = () => {
    return (
        <>
            <section className=' py-20 md:px-10 px-4 flex gap-4 md:gap-40 flex-col md:flex-row'>
                <p className='uppercase text-nowrap font-neue'>
                    Notre histoire
                </p>
                <p className='text-2xl md:text-5xl font-canela font-extralight leading-tight'>
                    We are a close family-run partnership. Makabi is our mother’s maiden name, chosen as an homage to her, the one who has inspired our creativity. Her appreciation for all things eclectic and enchanting shaped our tastes.
                </p>

            </section>
            <section className='w-full md:h-[150vh] h-screen relative flex justify-center items-center px-4 md:px-0' style={{ backgroundImage: "url('/DSC04536_1.jpg')" }}>

                <div className='bg-cream md:w-1/2 h-[60%]  max-w-3xl 2xl:max-h-[70vh] text-center md:py-20 px-4 md:px-20 flex flex-col justify-center items-center'>
                    <h2 className='text-3xl md:text-7xl font-canela font-extralight uppercase'>Genuine ingredients</h2>
                    <p className='mt-10 font-neue opacity-55'>Explore authentic food; organic, high-grade, artisan standard. Sweet cream butter, exquisite aromatics, pure extracts and the highest quality flour, cocoa and vanilla.</p>
                    <p className='mt-4 font-neue opacity-55 '>Each element is meticulously chosen for its ability to contribute to the entirety of the experience.</p>
                </div>
            </section>
        </>

    )
}

export default Bigtext
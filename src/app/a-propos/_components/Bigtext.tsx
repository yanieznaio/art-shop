import BigImage from '@/app/_component/BigImage'
import React from 'react'

const Bigtext = () => {
    return (
        <>
            <section className=' py-20 md:px-10 px-4 flex gap-4 md:gap-40 flex-col md:flex-row'>
                <p className='uppercase text-nowrap font-neue'>
                    History
                </p>
                <p className='text-2xl md:text-5xl font-canela font-extralight leading-tight'> illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                </p>

            </section>
            <section className='w-full md:h-[150vh] h-screen relative flex justify-center items-center px-4 md:px-0' style={{ backgroundImage: "url('/DSC04536_1.jpg')" }}>

                <div className='bg-cream md:w-1/2 h-[60%]  max-w-3xl 2xl:max-h-[70vh] text-center md:py-20 px-4 md:px-20 flex flex-col justify-center items-center'>
                    <h2 className='text-3xl md:text-7xl font-canela font-extralight uppercase'>Lorem Ipsum </h2>
                    <p className='mt-10 font-neue opacity-55'> quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit am.</p>
                    <p className='mt-4 font-neue opacity-55 '> quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit am.</p>
                </div>
            </section>
        </>

    )
}

export default Bigtext
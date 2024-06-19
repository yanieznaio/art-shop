import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Presentation = () => {
    return (
        <div className='bg-cream min-h-screen pt-20 pb-60 px-4 md:px-10'>
            <p className='big-text font-canela font-extralight'>
                Voici notre conception de l'art , quelque chose qui viens du passé quelque chose chargé d'histoire

            </p>
            <div className='w-full mt-24'>
                <div className='border-b border-colortitle flex justify-between w-full pb-8 uppercase'>
                    <p>Nos trésors</p>
                    <Link href="/">VOIR TOUT LES PRODUITS</Link>
                </div>

            </div>
            <section className='grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-10 md:mt-20 '>

                <div className='flex flex-col gap-6'>
                    <div className='relative w-full h-[400px] md:h-[600px]'>
                        <Image src="/ancient-pottery-vessel-with-retro-design.jpg" alt="produit" fill className='object-cover' />
                    </div>

                    <div className='flex justify-between w-full'>
                        <p className='flex flex-col text-3xl font-neue'>
                            <span>le vase</span>
                            <span>$7.000</span>
                        </p>
                        <p className='font-canela text-3xl font-light '>Gréce </p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 mt-20'>
                    <div className='relative w-full h-[400px] md:h-[600px]'>
                        <Image src="/luxury-retro-broadcast-radio-receiver.jpg" alt="produit" fill className='object-contain' />
                    </div>

                    <div className='flex justify-between w-full'>
                        <p className='flex flex-col text-3xl font-neue '>
                            <span>LE MEUBLE</span>
                            <span>$7.000</span>
                        </p>
                        <p className='font-canela text-3xl font-light '>France</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='relative w-full h-[400px] md:h-[600px]'>
                        <Image src="/stone-greek-goddess-head.jpg" alt="produit" fill className='object-contain' />
                    </div>

                    <div className='flex justify-between w-full'>
                        <p className='flex flex-col text-3xl font-neue '>
                            <span>La déese</span>
                            <span>$7.000</span>
                        </p>
                        <p className='font-canela  text-3xl font-light'>Rome</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Presentation
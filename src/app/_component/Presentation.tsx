import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { presentationProducts } from '../data/products'
const Presentation = () => {
    return (
        <div className='bg-cream min-h-screen pt-20 pb-60 px-4 md:px-10'>
            <p className='big-text font-canela font-extralight'>
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.

            </p>
            <div className='w-full mt-24'>
                <div className='border-b border-colortitle flex justify-between w-full pb-8 uppercase'>
                    <p>Nos trésors</p>
                    <Link href="/">VOIR TOUT LES PRODUITS</Link>
                </div>

            </div>
            <section className='grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-10 md:mt-20 '>
                {
                    presentationProducts.map((product, i) => (
                        <div className={`flex flex-col gap-6 ${i == 1 && "mt-20"}`} key={i}>
                            <div className='relative w-full h-[400px] md:h-[600px]'>
                                <Image src={product.img} alt="produit" fill className='object-cover' />
                            </div>

                            <div className='flex justify-between w-full'>
                                <p className='flex flex-col text-3xl font-neue'>
                                    <span>{product.title}</span>
                                    <span>{product.price}</span>
                                </p>
                                <p className='font-canela text-3xl font-light '>{product.vile} </p>
                            </div>
                        </div>
                    ))
                }


            </section>
        </div>
    )
}

export default Presentation
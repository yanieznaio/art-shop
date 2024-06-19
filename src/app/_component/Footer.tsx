import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-colortitle w-full text-whitegrey px-4 md:px-10 pt-10 pb-10'>
            <div className='flex flex-col gap-10 md:gap-0 md:flex-row justify-between w-full border-b border-cream border-opacity-35 pb-6 md:pb-10'>
                <div className='flex  gap-4 md:gap-10 text-sm md:text-lg'>
                    <Link href="/boutique">Boutique</Link>
                    <Link href="/a-propos">A propos</Link>
                    <Link href="/contact">Contactez nous</Link>


                </div>
                <div className='flex  gap-4'>
                    <Link href="" className='rounded-full w-10 h-10 border flex justify-center items-center'>f</Link>
                    <Link href="" className='rounded-full w-10 h-10 border flex justify-center items-center'>f</Link>
                </div>
            </div>
            <p className='big-text text-center font-canela mt-6 uppercase'>Art & BEAUTY</p>
            <div className='flex flex-col md:flex-row w-full justify-between mt-10 text-xs  gap-10 md:gap-0'>
                <p className='uppercase opacity-55'>2024 Art & BEAUTY</p>
                <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-10 '>
                    <Link href="/">Livraison et retour</Link>
                    <Link href="/">Termes & Conditions</Link>
                    <Link href="/">Politique de confidentialité</Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
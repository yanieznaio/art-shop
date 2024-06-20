"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [whiteBackground, setWhiteBackground] = useState(false);
    const pathname = usePathname()

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (pathname != "/") {
            setWhiteBackground(true)
        } else {
            setWhiteBackground(false)
        }
    }, [pathname])



    return (
        <div className={`fixed top-0 z-50 transition-colors duration-[0.3s] ease w-full ${scrolling || whiteBackground ? "bg-cream text-colortitle" : "bg-transparent text-whitegrey "} `}>
            <div className='flex justify-between w-full relative px-4 md:px-10 py-4 h-full  '>
                <div className='md:flex gap-8 hidden'>
                    <Link href="a-propos">A propos</Link>

                    <Link href="contact">Contactez nous</Link>
                </div>
                <Link href="" className='block md:hidden'>Menu</Link>
                <Link href="/" className='uppercase font-canela absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>ART & BEAUTY</Link>
                <div className='flex gap-8'>
                    <Link href="/shop" className='hidden md:block'>Shop</Link>
                    <button>Panier</button>
                </div>
            </div>


        </div>
    )
}

export default Header
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Menu from './Menu';

import { motion } from 'framer-motion';

const menuVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
};

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [whiteBackground, setWhiteBackground] = useState(false);
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Toggling menu'); // Log pour vérifier que l'événement de clic fonctionne
        setIsOpen(!isOpen);
    };
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
                <button onClick={toggleMenu} className=" block md:hidden text-2xl p-2 z-20">
                    ☰
                </button>

                {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />}
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
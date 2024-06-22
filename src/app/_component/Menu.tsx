"use client"
import React from 'react'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const menuVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
};
interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleMenu: () => void;
}
const Menu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, toggleMenu }) => {



    return (




        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-cream flex flex-col items-start p-6 text-colortitle "
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            transition={{ type: 'ease' }}
        >
            <button onClick={toggleMenu} className="text-2xl text-colortitle mb-4">
                ✕
            </button>
            <nav>
                <ul className="list-none p-0 text-4xl md:text-7xl font-canela  font-extralight mt-10 ">
                    <li className="mb-4">
                        <Link href="/">
                            Accueil
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/a-propos">
                            À propos
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/boutique`">
                            Boutique
                        </Link>
                    </li>
                    <li >
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.div>


    );
};

export default Menu;

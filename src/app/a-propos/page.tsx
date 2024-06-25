import React from 'react'
import BigImage from '../_component/BigImage'
import HeroAbout from './_components/HeroAbout'
import Bigtext from './_components/Bigtext'
import AboutProduct from './_components/AboutProduct'
const page = () => {
    return (
        <>
            <HeroAbout />
            <Bigtext />
            <AboutProduct />
            <BigImage src="/heroArtShop.jpg" />

        </>
    )
}

export default page
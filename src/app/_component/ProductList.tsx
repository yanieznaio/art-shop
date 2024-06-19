import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const products = [
    {
        "title": "Statues",
        "img": "/greek-busts-temple.jpg",

    },
    {
        "title": "Meubles",
        "img": "/luxury-retro-broadcast-radio-receiver.jpg",

    },
    {
        "title": "Tableaux",
        "img": "/sun-god-depicted-as-powerful-man-renaissance-setting.jpg",

    },
    {
        "title": "Miroirs",
        "img": "/kriti_6869fd48-9899-46ea-a03e-e4d759efa4a8.jpg",

    },
    {
        "title": "Vases",
        "img": "/ancient-pottery-vessel-with-retro-design.jpg",

    },
    {
        "title": "Méchanique",
        "img": "/kriti_6869fd48-9899-46ea-a03e-e4d759efa4a8.jpg",

    },

]
const ProductList = () => {
    return (
        <div className='text-center pb-40'>
            <p className='uppercase pb-10 text-lg font-neue opacity-55'>Decouvrez par catégories</p>
            {
                products.map((product, i) => (
                    <div key={i} className=' relative flex justify-center items-center group md:gap-20'>
                        <Link href="/" className='big-text font-canela font-extralight hover:italic md:hover:text-[5.3rem] uppercase'>{product.title}</Link>
                        <div className=' hidden xl:group-hover:block absolute right-[5vw] 2xl:right-[20vw]'>
                            <Image alt='image' width={200} height={300} src={product.img} className=' ' />

                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default ProductList
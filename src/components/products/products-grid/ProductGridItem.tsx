'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Product } from "@/interfaces";
import styles from './ProductGridItem.module.css';
import { categories } from '@/config/fonts';

interface Props {
    product: Product;
}

export const ProductGridItem = ( { product }: Props ) => {

    const [displayImage, setDisplayImage] = useState(product.images[0])

    return (
        <div className={styles.productContainer}>
            <Link
                href={`product/${product.slug}`}
            >
                <Image 
                    src={`/products/${ displayImage }`}
                    alt={product.title}
                    className={styles.productContainer__image}
                    width={ 500 }
                    height={ 500 }
                    onMouseEnter={ () => setDisplayImage( product.images[1] )  }
                    onMouseLeave={ () => setDisplayImage( product.images[0] ) }
                />
            </Link>

            <div className={styles.productContainer__info}>
                <Link 
                    className={`${styles.productContainer__info__title} ${categories.className}`}
                    href= { `/product/${ product.slug }` }
                >
                    { product.title.toUpperCase() }
                </Link>
                <span style={{fontWeight: 'bold'}}>${ product.price }</span>
            </div>

        </div>
    )
}

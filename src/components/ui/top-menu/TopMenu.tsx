'use client'

import Link from 'next/link'
import styles from './TopMenu.module.css'
import { alaska, categories } from '@/config/fonts'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { useUIStore } from '@/store'

export const TopMenu = () => {

    const openSideMenu = useUIStore( state => state.openSideMenu )

  return (
    <nav className={styles.navbarContainer}>

        <div className={styles.navbarContainer__name}>
            <Link href='/'>
                <span className={alaska.className}>Alaska </span>
                <span>| SHOP</span>
            </Link>
        </div>

        <div className={`${styles.navbarContainer__categories} ${categories.className}`} style={{fontSize: '12px'}}>
            <Link href='category/capilar'>CAPILAR</Link>
            <Link href='category/maquillaje'>MAQUILLAJE</Link>
            <Link href='category/accesorios'>ACCESORIOS</Link>
            <Link href='category/otros'>OTROS</Link>
        </div>

        <div className={styles.navbarContainer__endside}>

            <Link href='/search'>
                <IoSearchOutline style={{width: '18px', height: '18px'}}/>
            </Link>

            <Link href='/cart' style={{margin: '0 8px'}}>
                <div className={styles.navbarContainer__endside__cart} style={{position: 'relative'}}>
                    <span>3</span>
                    <IoCartOutline style={{width: '18px', height: '18px'}}/>
                </div>
            </Link>

            <button 
                className={`${styles.navbarContainer__endside__menu} 
                ${categories.className}`} style={{fontSize: '12px'}}
                onClick={ () => openSideMenu() }
            >
                MENU
            </button>
        </div>
    </nav>
  )
}

'use client'

import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { useUIStore } from '@/store'
import { alaska, categories } from '@/config/fonts'
import styles from './TopMenu.module.css'

export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu)

    return (
        <nav className={styles.navbarContainer}>

            <div className={styles.navbarContainer__name}>
                <Link href='/'>
                    <span className={alaska.className}>Alaska </span>
                    <span>| SHOP</span>
                </Link>
            </div>

            <div className={`${styles.navbarContainer__categories} ${categories.className}`} style={{ fontSize: '12px' }}>
                <Link href='/gender/men'>CAPILAR</Link>
                <Link href='/gender/women'>MAQUILLAJE</Link>
                <Link href='/gender/kid'>ACCESORIOS</Link>
                <Link href='/gender/otros'>OTROS</Link>
            </div>

            <div className={styles.navbarContainer__endside}>

                <Link href='/search'>
                    <IoSearchOutline style={{ width: '18px', height: '18px' }} />
                </Link>

                <Link href='/cart' style={{ margin: '0 8px' }}>
                    <div className={styles.navbarContainer__endside__cart} style={{ position: 'relative' }}>
                        <span>3</span>
                        <IoCartOutline style={{ width: '18px', height: '18px' }} />
                    </div>
                </Link>

                <button
                    className={`${styles.navbarContainer__endside__menu} 
                ${categories.className}`} style={{ fontSize: '12px' }}
                    onClick={() => openSideMenu()}
                >
                    MENU
                </button>
            </div>
        </nav>
    )
}

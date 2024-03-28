'use client'

import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'
import styles from './Sidebar.module.css'
import Link from 'next/link'
import { useUIStore } from '@/store'

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen )
    const closeSideMenu = useUIStore( state => state.closeSideMenu )

  return (
    <div className={styles.sidebarContainer}>

        {
            isSideMenuOpen && (
                <div onClick={ closeSideMenu } />
            )
        }
        {
            isSideMenuOpen && (
                <div 
                    onClick={ closeSideMenu }
                    className={styles.sidebarContainer__div}
                />
            )
        }
        <nav className={ !isSideMenuOpen ? styles.sidebarContainer__navbar_close  : styles.sidebarContainer__navbar_open}>
            <IoCloseOutline 
                size={50} 
                style={{position: 'fixed', top: '2rem', right: '2rem', cursor: 'pointer'}}
                onClick={ () => closeSideMenu() }
            />
            <div style={{position: 'relative', marginTop: '5rem'}}>
                <IoSearchOutline size={20} style={{position: 'absolute', top: '0.6rem', left: '0.4rem'}}/>
                <input 
                    type="text" 
                    placeholder='Buscar'
                    className={styles.sidebarContainer__navbar__input}
                />
            </div>

            <Link
                className={styles.sidebarContainer__navbar__link} 
                href='/'
            >
                <IoPersonOutline size={ 20 } />
                <span>Perfil</span>
            </Link>

            <Link
                className={styles.sidebarContainer__navbar__link} 
                href='/'
            >
                <IoTicketOutline size={ 20 } />
                <span>Ordenes</span>
            </Link>

            <Link
                className={styles.sidebarContainer__navbar__link} 
                href='/'
            >
                <IoLogInOutline size={ 20 } />
                <span>Ingresar</span>
            </Link>

            <Link
                className={styles.sidebarContainer__navbar__link} 
                href='/'
            >
                <IoLogOutOutline size={ 20 } />
                <span>Salir</span>
            </Link>

            <div style={{width: '45rem', height: '1px', margin: '3rem 0', backgroundColor: 'rgb(229 231 235)'}} />

            <Link
                className={styles.sidebarContainer__navbar__link} 
                href='/'
            >
                <IoShirtOutline size={ 20 } />
                <span>Productos</span>
            </Link>
            <Link
                className={styles.sidebarContainer__navbar__link} 
                href="/"
            >
                <IoPeopleOutline size={ 30 } />
                <span>Usuarios</span>
            </Link>
        </nav>
    </div>
  )
}

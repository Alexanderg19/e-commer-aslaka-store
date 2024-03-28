import { title404 } from '@/config/fonts'
import styles from './PageNotFound.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const PageNotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
        <div className={styles.notFoundContainer_info}>
            <h2 className={title404.className} style={{fontSize: '9rem'}}>404</h2>
            <p style={{fontWeight:'600', fontSize:'2.8rem'}}>Whoops! Lo sentimos mucho.</p>
            <p style={{fontWeight:'300'}}>
                <span>Puedes regresar al </span>
                <Link 
                    href='/'
                    className={styles.notFoundContainer__init}
                >
                    Inicio
                </Link>
            </p>
        </div>

        <div style={{padding: '0 20px', margin: '0 20px'}}>
            <Image
                className={styles.notFoundContainer__img}
                src="/imgs/starman_750x750.png"
                alt='starman'
                width={500}
                height={500}
            >

            </Image>
        </div>
    </div>
  )
}

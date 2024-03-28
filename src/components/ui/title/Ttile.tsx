import { alaska, categories, fontPrimary } from '@/config/fonts';
import styles from './Title.module.css'

interface Props {
    title: string;
    subtitle?: string;
    classname?: string;
}

export const Title = ({title, subtitle, classname}:Props) => {
  return (
    <div className={`${classname}`} style={{marginTop: '12px'}}>
        <h1 className={`${fontPrimary.className} ${styles.title}`}>{ title }</h1>
        {
            subtitle && (
                <h3 className={`${styles.subtitle} ${categories.className}`}>{ subtitle }</h3>
            )
        }
    </div>
  )
}

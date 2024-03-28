import { Product } from "@/interfaces"
import styles from './ProductsGrid.module.css'
import { ProductGridItem } from "./ProductGridItem";

interface Props {
    products: Product[];
}

export const ProductsGrid = ({products}: Props) => {
  return (
    <div className={styles.productsContainer}>
        {
            products.map(product => (
                <ProductGridItem key={product.slug} product={ product }/>
            ))
        }
    </div>
  )
}

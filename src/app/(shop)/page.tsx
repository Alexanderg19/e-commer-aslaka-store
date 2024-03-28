import { ProductsGrid } from "@/components/products/products-grid/ProductsGrid";
import { Title } from "@/components/ui/title/Ttile";
import { initialData } from "@/seed/seed";

const data = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda virtual" subtitle="ENTREGAS CON AMOR"/>
      <ProductsGrid products={data}/>
    </>
  );
}

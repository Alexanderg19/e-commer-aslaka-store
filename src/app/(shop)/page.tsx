export const revalidate = 60; // 60 segundos

import { redirect } from "next/navigation";

import { getPaginetedProductsWithImage } from "@/actions";
import { Pagination, ProductsGrid, Title } from "@/components";

interface Props {
  searchParams: {
    page?: string,
  }
}

export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;


  const { products, totalPages, currentPage } = await getPaginetedProductsWithImage({ page });

  if (products.length === 0) {
    redirect('/');
  }

  return (
    <>
      <Title title="Tienda virtual" subtitle="ENTREGAS CON AMOR" />
      <ProductsGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}

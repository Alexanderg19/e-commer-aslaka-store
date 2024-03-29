export const revalidate = 60; // 60 segundos

import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";
import { getPaginetedProductsWithImage } from "@/actions";
import { Pagination, ProductsGrid, Title } from "@/components";

interface Props {
  params: {
    id: string;
  },
  searchParams: {
    page?: string
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {

  const { id } = params;
  console.log(id);

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  if (id === 'otros') {
    notFound();
  }

  const { products, currentPage, totalPages } = await getPaginetedProductsWithImage({
    page,
    gender: id as Gender,
  })

  if (products.length === 0) {
    redirect(`gender/${id}`)
  }

  const labels: Record<string, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  return (
    <>
      <Title
        title={`Productos ${labels[id]}`}
        subtitle="Todos los productos"
      />

      <ProductsGrid products={products} />

      <Pagination totalPages={totalPages} />

    </>
  );
}
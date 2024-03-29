export interface Product {
    id: string;
    title: string;
    description: string;
    inStock: number;
    price: number;
    sizes: Sizes[];
    slug: string;
    tags: string[];
    //todo: type: Types;
    gender: Category
    images: string[];
}

export type Category = 'men'|'women'|'kid'|'unisex';
export type Sizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type Types = 'shirts'|'pants'|'hoodies'|'hats';
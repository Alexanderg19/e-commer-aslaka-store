import { initialData } from "./seed";
import prisma from '../lib/prisma';

async function main() {

    
  // 1. Borrar registros previos
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ])

    const { categories, products } = initialData    

    console.log(categories);
    
    //Categories
    // {
    //   name: 'Shirt'
    // }
    const categoriesData = categories.map( name => ({
        name
    }))

    console.log(categoriesData);

    await prisma.category.createMany({
        data: categoriesData
        
    })
    
    /*
        {
            'Shirts': 312134654(id)
        }
    */
    
    const categoriesDB = await prisma.category.findMany()

    console.log(categoriesDB);


    const categoriesMap = categoriesDB.reduce( (acumulator, category) => {
        acumulator[category.name.toLowerCase()] = category.id;
        return acumulator;
    }, {} as Record<string, string>)

    console.log(categoriesMap);
    
    // Products

    // products.forEach( async(product) => {
    //     const { type, images, ...rest } = product

    //     const dbProduct = await prisma.product.create({
    //         data: {
    //            ...rest, 
    //            categoryId: categoriesMap[type]  
    //         }
    //     })
        
    //     const imageData = images.map( image =>({
    //         url: image,
    //         productId: dbProduct.id
    //     }))

    //     await prisma.productImage.createMany({
    //         data: imageData
    //     })

    // })

        

    console.log('correctly executed seed');
}

(() => {
    if ( process.env.NODE_ENV === 'production' ) return;
    main()    
})();
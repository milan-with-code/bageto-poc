import product1 from "@/assets/product-01.webp"
import product2 from "@/assets/product-02.webp"
import product3 from "@/assets/product-03.webp"
import product4 from "@/assets/product-04.webp"

export interface ProductCollectionGridType {
    productImg: string,
    productTitle: string,
    productPrice: string | number,
}

export const productCollectionGrid: ProductCollectionGridType[] = [
    {
        productImg: product1,
        productTitle: "The Tripp",
        productPrice: "53,300",
    },
    {
        productImg: product2,
        productTitle: "The Morris Leather Tote",
        productPrice: "53,300",
    },
    {
        productImg: product3,
        productTitle: "Leather Knapsack",
        productPrice: "53,300",
    },
    {
        productImg: product4,
        productTitle: "Leather Working Tote",
        productPrice: "53,300",
    },
]

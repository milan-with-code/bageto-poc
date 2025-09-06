import product1 from "@/assets/product-01.webp"
import product2 from "@/assets/product-02.webp"
import product3 from "@/assets/product-03.webp"
import product4 from "@/assets/product-04.webp"

export interface ProductCollectionGridType {
    productImg: string,
    productTitle: string,
    productPrice: string | number,
}

export interface NavigationParamsType {
    title: string,
    params?: string
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

export const authNavigationData: NavigationParamsType[] = [
    {
        title: "Log In",
        params: "/login"
    },
    {
        title: "Create an Account",
        params: "/register"
    },
    {
        title: "Register Bag",
        params: "#"
    },
]

export const aboutNavigationData: NavigationParamsType[] = [
    {
        title: "Our Story",
        params: "/pages/our-story"
    },
    {
        title: "Our Leather",
        params: "/pages/about-our-leather"
    },
    {
        title: "Faq",
        params: "/pages/faq"
    },
    {
        title: "Press",
        params: "/blogs/press"
    },
    {
        title: "Testimonials",
        params: "/pages/testimonials"
    },
    {
        title: "Lookbooks & Video",
        params: "/blogs/lookbooks"
    },
    {
        title: "Stockists",
        params: "/pages/stockists"
    },
    {
        title: "Visit Us",
        params: "/pages/visit-us"
    }
    , {
        title: "Contact",
        params: "/pages/contact"
    }
]

export const menCategoriesNavigationData: NavigationParamsType[] = [
    {
        title: "Briefcases & Day Bags",
        params: "/collections/briefcases"
    },
    {
        title: "Travel Bags",
        params: "/collections/duffles"
    },
    {
        title: "Accessories",
        params: "/collections/leather-accessories"
    },
    {
        title: "Backpacks",
        params: "/collections/mens-backpacks"
    },
    {
        title: "Totes",
        params: "/collections/mens-totes"
    },
    {
        title: "Bridle Leather",
        params: "/collections/bridle-leather"
    },
    {
        title: "Pet Accessories",
        params: "/collections/pets"
    }
]

export const womenCategoriesNavigationData: NavigationParamsType[] = [
    {
        title: "Handbags",
        params: "/collections/handbags"
    },
    {
        title: "Totes",
        params: "/collections/totes"
    },
    {
        title: "Accessories",
        params: "/collections/womens-leather-accessories"
    },
    {
        title: "Travel & Business",
        params: "/collections/womens-leather-duffle-bags"
    },
    {
        title: "Backpacks",
        params: "/collections/womens-backpacks"
    },
    {
        title: "Pet Accessories",
        params: "/collections/pets"
    },

]

import { productCollectionGrid, type ProductCollectionGridType } from "@/mocks/data"


function ProductCardGrid({ productImg, productPrice, productTitle }: ProductCollectionGridType) {
    return (
        <div className="px-2 text-center">
            <img
                src={productImg}
                alt="Travel Duffel Bag"
                fetchPriority="high"
                decoding="async"
            />
            <h2 className="text-xs pt-3 text-[#1b1717]">{productTitle}</h2>
            <p className="text-xs text-[#9b9b9b]">From Rs. {productPrice}</p>
        </div>
    )
}

const ProductCollectionGrid = () => {
    return (
        <div className="my-10">
            <div className="grid grid-cols-4">
                {productCollectionGrid.map((item, ind) => (
                    <ProductCardGrid key={ind}  {...item} />
                ))}
            </div>
        </div>
    )
}

export default ProductCollectionGrid

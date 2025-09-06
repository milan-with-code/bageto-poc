import LeatherGoodsIntro from '@/feature/dashboard/leather-goods-intro'
import ProductCollectionGrid from '@/feature/dashboard/product-collection-grid'
import ProductShowCase from '@/feature/dashboard/product-show-case'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_main/")({
    component: Index,
})

function Index() {
    return (
        <div className="h-full">
            <ProductShowCase />
            <ProductCollectionGrid />
            <LeatherGoodsIntro />
        </div>
    )
}


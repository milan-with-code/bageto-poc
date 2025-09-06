import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import LeatherGoodsIntro from '@/feature/dashboard/leather-goods-intro'
import ProductCollectionGrid from '@/feature/dashboard/product-collection-grid'
import ProductShowCase from '@/feature/dashboard/product-show-case'

export const Route = createFileRoute("/_main/")({
    component: Index,
})

function Index() {
    return (
        <React.Fragment>
            <ProductShowCase />
            <ProductCollectionGrid />
            <LeatherGoodsIntro />
        </React.Fragment>
    )
}


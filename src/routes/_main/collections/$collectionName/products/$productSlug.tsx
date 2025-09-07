import { ProductDetails } from '@/feature/products/product-details'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
    '/_main/collections/$collectionName/products/$productSlug',
)({
    component: RouteComponent,
})

function RouteComponent() {
    const { collectionName, productSlug } = Route.useParams()
    return (
        <div className="min-h-screen bg-background">
            <ProductDetails collectionName={collectionName} productSlug={productSlug} />
        </div>
    )
}

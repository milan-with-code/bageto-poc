import CollectionsNav from '@/feature/collections/collections-nav'
import MenCategories from '@/feature/collections/men-categories'
import WomenCategories from '@/feature/collections/women-categories'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/collections/$collectionsName')({
    component: RouteComponent,
})

function RouteComponent() {
    const { collectionsName } = Route.useParams()

    const renderElement = (type: string) => {
        switch (type) {
            case "men":
                return <MenCategories />;

            case "women":
                return <WomenCategories />

            default:
                return <div>Collection not found</div>;
        }
    }

    return (
        <div>
            <div className="sticky top-[84px] z-10 bg-white">
                <CollectionsNav />
            </div>

            {renderElement(collectionsName)}
        </div>
    )
}


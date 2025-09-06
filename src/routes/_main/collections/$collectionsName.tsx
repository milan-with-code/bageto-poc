import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/collections/$collectionsName')({
    component: RouteComponent,
})

function RouteComponent() {
    const { collectionsName } = Route.useParams()

    return <div>
        <h1 className="text-xl font-bold">Collection: {collectionsName}</h1>
    </div>
}

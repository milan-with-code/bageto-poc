import { menCategoriesNavigationData, womenCategoriesNavigationData } from "@/mocks/data"
import { Link, useParams } from "@tanstack/react-router"
import { useMemo } from "react"

const CollectionsNav = () => {
    const { collectionsName } = useParams({ from: "/_main/collections/$collectionsName" })

    const navData = useMemo(() => {
        return collectionsName === "men" ? menCategoriesNavigationData : womenCategoriesNavigationData
    }, [collectionsName])

    return (
        <div className="flex items-center justify-center">
            {
                navData.map((item) => {
                    const result = item.params?.split("/collections/")[1];
                    return (
                        <Link
                            to="/collections/$collectionsName"
                            params={{ collectionsName: result ?? "" }}
                            className="text-xs text-[#101010] p-[11px_15px_10px]"
                        >
                            {item.title}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CollectionsNav

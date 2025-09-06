import { sections, type ImageCardProps } from "@/mocks/sectionsData"
import { Link } from "@tanstack/react-router"


function ImageCard({ image, label, aspect, colSpan, params }: ImageCardProps) {
    return (
        <div className={colSpan}>
            <div className={`relative w-full basis-full max-w-full ${aspect}`}>
                <img
                    src={image}
                    alt="Travel Duffel Bag"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <Link
                    to="/collections/$collectionsName"
                    params={{ collectionsName: params }}
                    className="absolute inset-0 left-[10px] right-[10px] flex items-center justify-center uppercase text-white transition-colors duration-200 ease-[cubic-bezier(0,0,.3,1)] bg-transparent"
                >
                    <span>{label}</span>
                </Link>
            </div>
        </div>
    )
}

const ProductShowCase = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            {sections.map((item, idx) => (
                <ImageCard key={idx} {...item} />
            ))}
        </div>
    )
}

export default ProductShowCase

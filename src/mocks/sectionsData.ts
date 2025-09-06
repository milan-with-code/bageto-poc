import travelDuffelBag from "@/assets/travelDuffelBag.webp"
import MenBag from "@/assets/menBag.webp"
import WomenBag from "@/assets/womenBag.webp"
import Accessories from "@/assets/accessories.webp"
import Totes from "@/assets/totes.webp"
import Backpack from "@/assets/backpack.webp"

export interface ImageCardProps {
    image: string
    label: string
    aspect: string
    colSpan: string,
    params: string
}

export const sections: ImageCardProps[] = [
    { image: travelDuffelBag, label: "TRAVEL DUFFLES", aspect: "aspect-[12/7]", colSpan: "col-span-12", params: "duffles" },
    { image: MenBag, label: "MEN", aspect: "aspect-[6/7]", colSpan: "col-span-6", params: "men" },
    { image: WomenBag, label: "WOMEN", aspect: "aspect-[6/7]", colSpan: "col-span-6", params: "women" },
    { image: Accessories, label: "ACCESSORIES", aspect: "aspect-[3.5/1]", colSpan: "col-span-12", params: "womens-leather-accessories" },
    { image: Totes, label: "TOTES", aspect: "aspect-[6/7]", colSpan: "col-span-6", params: "totes" },
    { image: Backpack, label: "BACKPACK", aspect: "aspect-[6/7]", colSpan: "col-span-6", params: "mens-backpacks" },
]

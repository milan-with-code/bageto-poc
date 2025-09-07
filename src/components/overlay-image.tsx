import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface OverlayImageProps {
    src: string;
    alt?: string;
    title: string;
    className?: string;
    textClassName?: string;
    slug: string
}

const OverlayImage: React.FC<OverlayImageProps> = ({
    src,
    alt = "",
    title,
    className,
    textClassName,
    slug
}) => {
    return (
        <div className={cn("relative", className)}>
            <img src={src} alt={alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
                <Link to="/collections/$collectionsName" params={{ collectionsName: slug }} className={cn("text-white", textClassName)}>
                    {title}
                </Link>
            </div>
        </div>
    );
};

export default OverlayImage;

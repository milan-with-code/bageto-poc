import { Search } from "lucide-react"
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import NavItem from "@/components/nav-item";

const labelCSS = "text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors hover:underline cursor-pointer"

export function Header() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="max-w-[1440px] mx-auto px-5 pt-5">
            <div className="flex items-center justify-between h-16">
                <div className="hidden md:flex items-center space-x-8">
                    <NavItem label="MEN" submenu={["Briefcases & Day Bags", "Travel Bags", "Accessories", "Backpacks", "Totes", "Bridle Leather", "Pet Accessories"]} />
                    <NavItem label="WOMEN" submenu={["Handbags", "Totes", "Accessories", "Travel & Business", "Backpacks", "Pet Accessories"]} />
                    <div className="relative group">
                        <a className={labelCSS}>
                            AMERICAN ALLIGATOR
                        </a>
                    </div>
                    <div className="relative group">
                        <a
                            href="#"
                            className={labelCSS}
                        >
                            ONE-OF-A-KIND
                        </a>
                    </div>
                </div>

                <Link to="/">
                    <div className="text-xl font-bold text-gray-900 tracking-wider">LOTUFF</div>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <div className="relative group">
                        <a
                            href="#"
                            className={labelCSS}
                        >
                            CART (0)
                        </a>
                    </div>
                    <NavItem label="ACCOUNT" submenu={["Log In", "Create an Account", "Register Bag"]} />
                    <NavItem label="ABOUT" submenu={["Our Story", "Our Leather", "FAQ", "Press", "Testimonials", "Lookbooks & Video", "Stockists", "Visit Us", "Contact"]} />
                    <div className="relative group">
                        <a
                            href="#"
                            className={labelCSS}
                        >
                            BLOG
                        </a>
                    </div>
                    <button className="text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                        <Search className="h-4 w-4" onClick={() => setOpen(!open)} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

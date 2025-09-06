import { Search } from "lucide-react"
import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import NavItem from "@/components/nav-item";
import { aboutNavigationData, authNavigationData, menCategoriesNavigationData, womenCategoriesNavigationData } from "@/mocks/data";
import CommandMenu from "@/components/command-menu";

const labelCSS = "text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors hover:underline cursor-pointer"

export function Header() {
    const [open, setOpen] = useState(false)
    return (
        <React.Fragment>
            <nav className="max-w-[1440px] mx-auto px-5 pt-5">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:flex items-center space-x-8">
                        <NavItem label="MEN" submenu={menCategoriesNavigationData} />
                        <NavItem label="WOMEN" submenu={womenCategoriesNavigationData} />
                        <div className="relative group">
                            <Link to="/collections/$collectionsName" params={{ collectionsName: "indian-alligator-bags" }} className={labelCSS}>
                                INDIAN ALLIGATOR
                            </Link>
                        </div>
                        <div className="relative group">
                            <Link
                                to="/collections/$collectionsName"
                                params={{ collectionsName: "one-of-a-kind" }}
                                className={labelCSS}
                            >
                                ONE-OF-A-KIND
                            </Link>
                        </div>
                    </div>

                    <Link to="/">
                        <div className="text-xl font-bold text-gray-900 tracking-wider">LOTUFF</div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <div className="relative group">
                            <Link
                                to="/cart"
                                className={labelCSS}
                            >
                                CART (0)
                            </Link>
                        </div>
                        <NavItem label="ACCOUNT" submenu={authNavigationData} />
                        <NavItem label="ABOUT" submenu={aboutNavigationData} />
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
            <CommandMenu open={open} setOpen={setOpen} />
        </React.Fragment>
    )
}

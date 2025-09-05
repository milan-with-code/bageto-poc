import { Calculator, Calendar, Search, Smile } from "lucide-react"
import Logo from '../assets/logo.png';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className="max-w-[1440px] mx-auto px-5 pt-5 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#"
                            className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors"
                        >
                            MEN
                        </a>
                        <a
                            href="#"
                            className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors"
                        >
                            WOMEN
                        </a>
                        <a
                            href="#"
                            className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors"
                        >
                            AMERICAN ALLIGATOR
                        </a>
                        <a
                            href="#"
                            className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors"
                        >
                            ONE-OF-A-KIND
                        </a>
                    </div>

                    <Link to="/">
                        <img src={Logo} alt="Logo" className="h-10 w-auto" />
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="#"
                            className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors"
                        >
                            CART (0)
                        </a>
                        <a
                            href="#"
                            className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors"
                        >
                            ACCOUNT
                        </a>
                        <a
                            href="#"
                            className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#"
                            className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors"
                        >
                            BLOG
                        </a>
                        <button className="text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">
                            <Search className="h-4 w-4" onClick={() => setOpen(!open)} />
                        </button>
                    </div>
                </div>
            </nav>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <Calculator />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                </CommandList>
            </CommandDialog>
        </>
    )
}

import type { NavigationParamsType } from "@/mocks/data";
import { Link } from "@tanstack/react-router";

interface NavItemProps {
    label: string;
    submenu?: NavigationParamsType[];
}

const NavItem = ({ label, submenu }: NavItemProps) => {
    return (
        <div className="relative group">
            <button className="text-xs font-medium text-gray-900 hover:text-gray-700 tracking-wide transition-colors hover:underline cursor-pointer">
                {label}
            </button>

            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="bg-white rounded-md shadow-lg w-48">
                    <div className="py-2">
                        {submenu ? submenu.map((subItem) => {
                            return (
                                <Link
                                    to={subItem.params}
                                    className="block px-4 py-2 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                                >
                                    {subItem.title}
                                </Link>
                            )
                        }) : "No Available Sub Menu"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavItem;

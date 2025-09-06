import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-muted border-t border-border">
            <div className="container mx-auto px-6 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
                    <div className="lg:col-span-3">
                        <nav className="space-y-4">
                            <a
                                href="#"
                                className="block text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 tracking-wide"
                            >
                                CONTACT
                            </a>
                            <a
                                href="#"
                                className="block text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 tracking-wide"
                            >
                                ABOUT
                            </a>
                            <a
                                href="#"
                                className="block text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 tracking-wide"
                            >
                                STOCKISTS
                            </a>
                            <a
                                href="#"
                                className="block text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 tracking-wide"
                            >
                                TERMS & CONDITIONS
                            </a>
                            <a
                                href="#"
                                className="block text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 tracking-wide"
                            >
                                CUSTOMER SERVICE
                            </a>
                            <a
                                href="#"
                                className="block text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 tracking-wide"
                            >
                                SITEMAP
                            </a>
                        </nav>
                    </div>

                    {/* Brand Logo - Center */}
                    <div className="lg:col-span-6 flex flex-col items-center justify-center text-center">
                        <div className="mb-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-[0.2em] mb-2">
                                BAGETO
                            </h2>
                            <p className="text-xs text-muted-foreground tracking-[0.3em] font-medium">HANDMADE IN AMERICA</p>
                        </div>

                        {/* Decorative Element */}
                        <div className="w-24 h-px bg-border mb-6"></div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 hover:bg-accent/10 rounded-full"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 hover:bg-accent/10 rounded-full"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 hover:bg-accent/10 rounded-full"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-accent transition-colors duration-200 p-2 hover:bg-accent/10 rounded-full"
                                aria-label="Pinterest"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.690 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.99-5.373 11.99-12C24 5.372 18.627.001 12.001.001z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Information - Right Side */}
                    <div className="lg:col-span-3 text-center lg:text-right">
                        <div className="space-y-4">
                            <Button
                                variant="outline"
                                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground font-medium tracking-wide px-6 py-2 bg-transparent"
                            >
                                EMAIL US
                            </Button>

                            <div className="space-y-2 text-sm">
                                <p className="text-foreground font-medium">23 ACORN ST, PROVIDENCE, RI 02903</p>
                                <p className="text-muted-foreground">INFO@BAGETOLEATHER.COM</p>
                                <p className="text-muted-foreground">820 034 9568</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-8 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center tracking-wide">
                        © 2025 BAGETO LEATHER. ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

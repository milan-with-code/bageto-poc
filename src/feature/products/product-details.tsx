import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Minus, Plus, RotateCcw, Shield, ShoppingCart, Star, Truck } from "lucide-react"
import { useState } from "react"

interface ProductDetailsProps {
    collectionName: string
    productSlug: string
}

export function ProductDetails({ collectionName, productSlug }: ProductDetailsProps) {
    const [selectedSize, setSelectedSize] = useState("M")
    const [selectedColor, setSelectedColor] = useState("Black")
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)
    const [isWishlisted, setIsWishlisted] = useState(false)

    // Mock product data based on the route params
    const product = {
        name: productSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        collection: collectionName.charAt(0).toUpperCase() + collectionName.slice(1),
        price: 299.0,
        originalPrice: 399.0,
        rating: 4.8,
        reviewCount: 124,
        description:
            "Crafted from premium materials with meticulous attention to detail. This piece combines timeless design with modern functionality, making it perfect for both professional and casual settings.",
        features: [
            "Premium quality materials",
            "Sustainable manufacturing",
            "30-day return policy",
            "Free shipping worldwide",
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy", "Gray", "White"],
        images: [
            "/premium-black-cotton-t-shirt-front-view.jpg",
            "/premium-black-cotton-t-shirt-back-view.jpg",
            "/premium-black-cotton-t-shirt-side-view.jpg",
        ],
        inStock: true,
        stockCount: 15,
    }

    const handleQuantityChange = (change: number) => {
        setQuantity(Math.max(1, Math.min(product.stockCount, quantity + change)))
    }

    return (
        <div className="py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
                <span>Home</span>
                <span>/</span>
                <span className="capitalize">{product.collection}</span>
                <span>/</span>
                <span className="text-foreground font-medium">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                        <img
                            src={product.images[selectedImage] || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? "border-primary" : "border-transparent"
                                    }`}
                            >
                                <img
                                    src={image || "/placeholder.svg"}
                                    alt={`${product.name} view ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                    <div>
                        <Badge variant="secondary" className="mb-2">
                            {product.collection} Collection
                        </Badge>
                        <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                            }`}
                                    />
                                ))}
                                <span className="text-sm text-muted-foreground ml-2">
                                    {product.rating} ({product.reviewCount} reviews)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                        <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                        <Badge variant="destructive">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                    {/* Size Selection */}
                    <div>
                        <h3 className="font-semibold mb-3">Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => (
                                <Button
                                    key={size}
                                    variant={selectedSize === size ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedSize(size)}
                                    className="min-w-[3rem]"
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Color Selection */}
                    <div>
                        <h3 className="font-semibold mb-3">Color: {selectedColor}</h3>
                        <div className="flex space-x-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? "border-primary scale-110" : "border-muted"
                                        }`}
                                    style={{
                                        backgroundColor:
                                            color.toLowerCase() === "white"
                                                ? "#ffffff"
                                                : color.toLowerCase() === "black"
                                                    ? "#000000"
                                                    : color.toLowerCase() === "navy"
                                                        ? "#1e3a8a"
                                                        : color.toLowerCase() === "gray"
                                                            ? "#6b7280"
                                                            : color.toLowerCase(),
                                    }}
                                    title={color}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-3">Quantity</h3>
                            <div className="flex items-center space-x-3">
                                <Button variant="outline" size="sm" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                                    <Minus className="w-4 h-4" />
                                </Button>
                                <span className="font-semibold text-lg min-w-[3rem] text-center">{quantity}</span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleQuantityChange(1)}
                                    disabled={quantity >= product.stockCount}
                                >
                                    <Plus className="w-4 h-4" />
                                </Button>
                                <span className="text-sm text-muted-foreground ml-4">{product.stockCount} in stock</span>
                            </div>
                        </div>

                        <div className="flex space-x-3">
                            <Button className="flex-1" size="lg">
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Add to Cart
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className={isWishlisted ? "text-red-500 border-red-500" : ""}
                            >
                                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                            </Button>
                        </div>
                    </div>

                    {/* Features */}
                    <Card className="p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2">
                                <Truck className="w-5 h-5 text-primary" />
                                <span className="text-sm">Free Shipping</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RotateCcw className="w-5 h-5 text-primary" />
                                <span className="text-sm">30-Day Returns</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5 text-primary" />
                                <span className="text-sm">2-Year Warranty</span>
                            </div>
                        </div>
                    </Card>

                    {/* Product Features */}
                    <div>
                        <h3 className="font-semibold mb-3">Features</h3>
                        <ul className="space-y-2">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

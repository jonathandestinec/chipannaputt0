// app/shop/page.tsx
import Product from '@/components/Product'
import { Product as ProductType } from '@/store/cart-store'

// Sample product data
const sampleProduct: ProductType = {
    id: 'chip-anna-putt-kit',
    name: 'Chip Anna Putt Kit',
    price: 111.49,
    image: '/images/product1.png', // Replace with actual image
    description: 'Master your short game with the ultimate training kit. Includes premium putting mat, alignment tools, and expert video tutorials.'
}

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Shop Premium Golf Equipment
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Professional-grade training tools designed to perfect your game
                    </p>
                </div>

                {/* Product Grid */}
                <div className="">
                    <Product product={sampleProduct} variant='full' />
                    {/* Add more products as needed */}
                </div>

                {/* Trust Badges */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: '🚚', text: 'Free Shipping' },
                        { icon: '✓', text: 'Satisfaction Guaranteed' },
                        { icon: '⚡', text: 'Fast Delivery' },
                        { icon: '🔒', text: 'Secure Checkout' }
                    ].map((badge, idx) => (
                        <div key={idx} className="text-center p-6 bg-white rounded-2xl border border-gray-100">
                            <div className="text-3xl mb-2">{badge.icon}</div>
                            <p className="text-sm font-semibold text-gray-900">{badge.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
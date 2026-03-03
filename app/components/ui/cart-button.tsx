"use client"

import { ShoppingCart } from 'lucide-react'
import { useShopify } from './shopify-provider'
import { useEffect, useState } from 'react'

export const CartButton = () => {
    const shopify = useShopify()
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        if (!shopify?.ui) return

        // Listen for cart updates
        const updateCartCount = () => {
            const cartToggle = document.querySelector('[data-shopify-cart-count]')
            if (cartToggle) {
                const count = cartToggle.getAttribute('data-shopify-cart-count')
                setCartCount(count ? parseInt(count) : 0)
            }
        }

        // Update on load
        updateCartCount()

        // Listen for changes
        const observer = new MutationObserver(updateCartCount)
        observer.observe(document.body, { childList: true, subtree: true })

        return () => observer.disconnect()
    }, [shopify])

    const handleCartClick = () => {
        // Trigger the Shopify cart modal
        if (shopify?.ui) {
            const cartToggle = document.querySelector('[data-cart-toggle]') as HTMLElement
            if (cartToggle) {
                cartToggle.click()
            }
        }
    }

    return (
        <button
            onClick={handleCartClick}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center text-gray-700"
            aria-label="Shopping cart"
        >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                </span>
            )}
        </button>
    )
}

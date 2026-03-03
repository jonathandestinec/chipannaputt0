"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { ShoppingCart } from 'lucide-react'

interface ShopifyContextType {
    client: any
    ui: any
    isLoaded: boolean
}

const ShopifyContext = createContext<ShopifyContextType | null>(null)

declare global {
    interface Window {
        ShopifyBuy: any
    }
}

export const useShopify = () => useContext(ShopifyContext)

export const ShopifyProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const clientRef = useRef<any>(null)
    const uiRef = useRef<any>(null)
    const isInitializing = useRef(false)

    useEffect(() => {
        if (isInitializing.current) return
        isInitializing.current = true

        const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

        const initializeShopify = () => {
            if (!window.ShopifyBuy) return

            if (!clientRef.current) {
                clientRef.current = window.ShopifyBuy.buildClient({
                    domain: 'nq5qk0-y0.myshopify.com',
                    storefrontAccessToken: '655b2a344880b20aae83f89babd0884c',
                })
            }

            window.ShopifyBuy.UI.onReady(clientRef.current).then((ui: any) => {
                uiRef.current = ui

                // Create cart component in a hidden container
                const cartContainer = document.createElement('div')
                cartContainer.id = 'shopify-cart-container'
                cartContainer.style.display = 'none'
                document.body.appendChild(cartContainer)

                try {
                    ui.createComponent('cart', {
                        node: cartContainer,
                        options: {
                            "cart": {
                                "styles": {
                                    "button": {
                                        ":hover": { "background-color": "#1f2937" },
                                        "background-color": "#000000",
                                        ":focus": { "background-color": "#1f2937" }
                                    }
                                }
                            }
                        }
                    })
                } catch (err) {
                    console.warn("Cart component creation skipped, will use direct toggle", err)
                }

                setIsLoaded(true)
            }).catch((err: any) => {
                console.error("Shopify Buy SDK initialization failed:", err)
                setIsLoaded(true)
            })
        }

        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
            initializeShopify()
        } else {
            const script = document.createElement('script')
            script.async = true
            script.src = scriptURL
            script.onload = initializeShopify
            document.body.appendChild(script)
        }
    }, [])

    return (
        <ShopifyContext.Provider value={{ client: clientRef.current, ui: uiRef.current, isLoaded }}>
            {children}
        </ShopifyContext.Provider>
    )
}

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

                // 1. Create the global cart FIRST and disable the default toggle
                ui.createComponent('cart', {
                    options: {
                        "cart": {
                            "styles": {
                                "button": {
                                    ":hover": { "background-color": "#000000" },
                                    "background-color": "#000000",
                                    ":focus": { "background-color": "#000000" }
                                }
                            }
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "display": "none" // Hide the floating green button
                                }
                            }
                        }
                    }
                })

                // 2. Setup options for our custom toggles in the header
                const toggleOptions = {
                    options: {
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "background-color": "transparent",
                                    "color": "#374151",
                                    ":hover": { "background-color": "#f3f4f6" },
                                    ":focus": { "background-color": "#f3f4f6" },
                                    "border-radius": "0.5rem",
                                    "padding": "0.5rem"
                                },
                                "count": {
                                    "background-color": "#000000",
                                    "color": "#ffffff",
                                    "font-size": "0.75rem",
                                    "border-radius": "9999px"
                                }
                            }
                        }
                    }
                }

                // Helper to safely create components only if their node exists and is empty
                const createIfNodeExists = (nodeId: string) => {
                    const node = document.getElementById(nodeId)
                    if (node && node.innerHTML === "") {
                        ui.createComponent('toggle', {
                            node,
                            ...toggleOptions,
                        })
                        return true
                    }
                    return false
                }

                // Retry mechanism to ensure nodes are found after Next.js hydration
                let attempts = 0
                const mountToggles = () => {
                    const d = createIfNodeExists('shopify-cart-toggle-desktop')
                    const m = createIfNodeExists('shopify-cart-toggle-mobile')
                    const menu = createIfNodeExists('shopify-cart-toggle-menu')

                    if (!(d && m && menu) && attempts < 10) {
                        attempts++
                        setTimeout(mountToggles, 200)
                    } else {
                        setIsLoaded(true)
                    }
                }

                mountToggles()
            }).catch((err: any) => {
                console.error("Shopify Buy SDK initialization failed:", err)
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

"use client"

import React, { useEffect, useRef } from 'react'
import { useShopify } from './shopify-provider'

interface ShopifyBuyButtonProps {
    productId: string
}

const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({ productId }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { ui, isLoaded } = useShopify() || {}
    const isComponentCreated = useRef(false)

    useEffect(() => {
        if (!isLoaded || !ui || !containerRef.current || isComponentCreated.current) return

        const renderButton = () => {
            if (!containerRef.current || isComponentCreated.current) return

            ui.createComponent('product', {
                id: productId,
                node: containerRef.current,
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "button": {
                                ":hover": { "background-color": "#1f2937" },
                                "background-color": "#000000",
                                ":focus": { "background-color": "#1f2937" },
                                "padding": "12px 24px",
                                "font-size": "16px",
                                "font-weight": "500",
                                "border-radius": "6px",
                                "border": "none"
                            }
                        },
                        "width": "100%",
                        "text": { "button": "Add to Cart" },
                        "googleShoppingAd": false
                    },
                    "cart": {
                        "styles": {
                            "button": {
                                ":hover": { "background-color": "#1f2937" },
                                "background-color": "#000000",
                                ":focus": { "background-color": "#1f2937" }
                            }
                        }
                    }
                },
            })
            isComponentCreated.current = true
        }

        renderButton()

        // Cleanup if component unmounts
        return () => {
            isComponentCreated.current = false
            if (containerRef.current) containerRef.current.innerHTML = ""
        }
    }, [productId, ui, isLoaded])

    return <div ref={containerRef} id={`product-component-${productId}`} className="w-full min-h-[200px] flex items-center justify-center" />
}

export default ShopifyBuyButton

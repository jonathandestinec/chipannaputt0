import React from 'react'
import ShopifyBuyButton from './shopify-buy-button'

const StoreSection = ({ description, isStorePage }: { description?: string, isStorePage: boolean }) => {
    return (
        <div className='w-full py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16'>
            <div className='w-full max-w-6xl mx-auto'>
                {/* Product Section with Shopify Buy Button */}
                <div className='flex flex-col items-center justify-center'>
                    {/* Description at top on store page */}
                    {description && (
                        <div className='w-full max-w-2xl mb-12 md:mb-16'>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed tracking-wide whitespace-pre-wrap">
                                {description}
                            </p>
                        </div>
                    )}

                    {/* Shopify Buy Button - includes product image */}
                    <div className='w-full max-w-2xl'>
                        <ShopifyBuyButton productId="7247127380101" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StoreSection

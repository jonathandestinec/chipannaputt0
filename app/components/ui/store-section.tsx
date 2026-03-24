import React from 'react'
import ShopifyBuyButton from './shopify-buy-button'
import Product from '@/components/Product'

const product = {
    id: 'chip-anna-putt-kit',
    name: 'Chip Anna Putt Kit',
    price: 111.49,
    image: '/images/product1.png',
    description: 'Master your short game...'
}

const StoreSection = () => {
    return (
        <div>
            <Product product={product} variant='full' />
        </div>
    )
}

export default StoreSection
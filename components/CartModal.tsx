// components/CartModal.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import Product from './Product'
import { useEffect } from 'react'

export default function CartModal() {
  const { items, isCartOpen, closeCart, getTotal } = useCartStore()

  const total = getTotal()
  const hasItem = items.length > 0 // Use this instead of hasItem()

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isCartOpen])

  const handleCheckout = () => {
    window.location.href = 'https://13dba3e2-5a62-4c12-9911-99b4dfdd3096.paylinks.godaddy.com/putt-kit'
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-gradient-to-br from-white to-gray-50 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="relative text-black p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <p className="text-white/70 text-sm">
                      {hasItem ? '1 item' : 'Empty'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeCart}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#059c17] via-green-400 to-[#059c17]" />
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {!hasItem ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={40} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6 max-w-xs">
                    Add the Chip Anna Putt Kit to get started on your golf journey!
                  </p>
                  <button
                    onClick={closeCart}
                    className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </motion.div>
              ) : (
                <>
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <Product key={item.id} product={item} variant="cart" />
                    ))}
                  </AnimatePresence>

                  {/* Note about single item */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                    <p className="font-semibold mb-1">ℹ️ Single Item Checkout</p>
                    <p className="text-blue-600">
                      Tax and shiping added to total cost
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Footer / Checkout */}
            {hasItem && (
              <div className="border-t border-gray-200 bg-white p-6 space-y-4">
                {/* Total */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Item Price</span>
                    <span>$79.99</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Shipping & Tax </span>
                    <span className="flex items-center gap-1 text-green-600 font-semibold">
                      ✨ $11 + $5.50 = $16.50
                    </span>
                  </div>
                  <div className="h-px bg-gray-200 my-2" />
                  <div className="flex items-center justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)} USD</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-[#059c17] to-[#048a14] text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-green-200 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Proceed to Checkout
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>

                <p className="text-xs text-center text-gray-500">
                  Secure checkout powered by GoDaddy
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
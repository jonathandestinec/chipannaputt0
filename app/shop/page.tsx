import React from 'react'
import StoreSection from '../components/ui/store-section'

const ShopPage = () => {
    return (
        <div>
            {/* Top padding for fixed header */}
            <div className='h-24 md:h-20' />
            
            {/* Shop Hero Section */}
            <section className='w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6'>Chip Anna Putt Kit</h1>
                    <p className='text-lg sm:text-xl text-gray-600 mb-2'>Master Your Short Game</p>
                </div>
            </section>

            {/* Store Section with Product */}
            <StoreSection isStorePage={true} description={`The Chip Anna Putt Kit thoroughly covers essential putting techniques, including mastering direction, speed, and developing a keen feel for the stroke through visual learning. This kit guides you in identifying and correcting common errors such as pushes and pulls, while emphasizing the importance of visualizing a square putter head at impact. Additionally, it offers expert insights into reading greens effectively, helping you improve your touch and decision-making on the course. Designed for golfers seeking to refine their putting fundamentals, this comprehensive kit combines technical detail with practical drills to enhance consistency and confidence on every putt.

Your training aid kit includes everything needed to master your short game.

The first component in this kit is the durable aluminum Putt Master. The Putt Master putting aid will help you learn the six fundamentals of putting (direction, speed, keeping your putter head square to the target, identifying pushes, identifying pulls, and reading the greens). The video training series will provide you with precise instructions to use the Putt Master to improve your game.

The next component is the Target Master. The Target Master flags will assist you in identifying poor direction and distance patterns (the Double Ds). Poor golfers tend to aim directly at the hole without taking into consideration the ball's actual flight pattern. Once you visually see these patterns, you will be able to self-correct.

Both training aids are worthy of a spot in your golf bag. They are in mine! But that's not all you'll receive.

Additionally, at no extra cost, you will receive access to an invaluable video training series of golf lessons that will assist beginners to seasoned golfers reach the next level of skill and experience more enjoyment of the greatest game on earth. If you paid a golf instructor for equivalent lessons, you could expect to pay thousands of dollars to become a scratch golfer. (Here's a little secret. I enjoy giving golf lessons as much as, if not more than, playing the game! And I want to hear about your progress!)

On top of all that, the video lessons will teach you how to improve your game from the comfort of your own home. This is where I got six strokes better and finally got to be a scratch golfer on the course, and you can do it too. I'll get you there.`} />
        </div>
    )
}

export default ShopPage

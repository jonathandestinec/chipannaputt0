import Image from 'next/image'
import React from 'react'

const QuoteSections = () => {
    return (
        <div>
            <section>
                {/* responsive image left, left-centered text right */}
                <div className='w-full h-max flex items-center justify-center'>
                    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-0'>
                        <div className='w-full h-max md:h-max flex items-center justify-center p-4 md:p-0'>
                            <Image src="/images/wyg.png" alt="Store" width={500} height={400} className='w-full h-full object-contain md:object-cover' />
                        </div>

                        <div className='w-full h-full flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16'>

                            <div>
                                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-relaxed font-meduim mb-4 sm:mb-6 md:mb-8 text-left'>What you get</h1>

                                <p className='text-base sm:text-lg md:text-xl tracking-tight leading-relaxed font-normal mb-4 sm:mb-6 md:mb-8 text-left text-gray-600'>
                                    Your training aid kit includes everything needed to master your short game.
                                </p>

                                <p className='text-base sm:text-lg md:text-xl tracking-tight leading-relaxed font-normal mb-4 sm:mb-6 md:mb-8 text-left text-gray-600'>
                                    The first component in this kit is the durable aluminum Putt Master. The Putt Master putting aid will help you learn the six fundamentals of putting (direction, speed, keeping your putter head square to the target, identifying pushes, identifying pulls, and reading the greens). The video training series will provide you with precise instructions to use the Putt Master to improve your game.
                                </p>

                                <p className='text-base sm:text-lg md:text-xl tracking-tight leading-relaxed font-normal mb-4 sm:mb-6 md:mb-8 text-left text-gray-600'>
                                    The next component is the Target Master. The Target Master flags will assist you in identifying poor direction and distance patterns (the Double Ds). Poor golfers tend to aim directly at the hole without taking into consideration the ball's actual flight pattern. Once you visually see these patterns, you will be able to self-correct.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}

            <section>

                <div className='w-full h-max flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16'>
                    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-0'>

                        <div className='w-full h-full flex items-center justify-center order-2 md:order-1 p-4 md:p-8'>

                            <div>
                                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-relaxed font-meduim mb-4 sm:mb-6 md:mb-8 text-left'>How it works</h1>

                                <p className='text-base sm:text-lg md:text-xl tracking-tight leading-relaxed font-normal mb-4 sm:mb-6 md:mb-8 text-left text-gray-600'>
                                    Your training aid kit includes everything needed to master your short game.
                                </p>
                            </div>

                        </div>

                        <div className='w-full h-max flex items-center justify-center order-1 md:order-2 p-4 md:p-0'>
                            <Image src="/images/hiw.png" alt="Store" width={500} height={400} className='w-full h-auto object-contain' />
                        </div>
                    </div>
                </div>

            </section>

            {/* Push vs pull */}
            <section>

                <div className='w-full h-max flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16'>
                    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-0'>

                        <div className='w-full h-full flex items-center justify-center p-4 md:p-0'>
                            <Image src="/images/pushvspull.png" alt="Store" width={500} height={400} className='w-full h-auto object-contain' />
                        </div>

                        <div className='w-full h-full flex items-center justify-center p-4 md:p-8'>

                            <div>
                                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-relaxed font-meduim mb-4 sm:mb-6 md:mb-8 text-left'>Push vs Pull</h1>

                                <p className='text-base sm:text-lg md:text-xl tracking-tight leading-relaxed font-normal mb-4 sm:mb-6 md:mb-8 text-left text-gray-600'>
                                    Push vs pull, hook vs fade, left vs right. whatever you call it we help you control it!
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* Quote Image */}
            <section className=''>
                <div className=' w-full h-max ml-auto mr-auto flex items-center justify-center px-4 md:px-0'>
                    <Image src={"/images/quote1.png"} width={1000} height={300} alt=' ' className=' w-full h-auto' />
                </div>

                {/* Logo */}
                <Image src={"/images/logo-banner.png"} width={200} height={300} alt=' ' className=' w-full h-auto' />

                {/* Quote Image */}
                <div className=' w-full h-max ml-auto mr-auto flex items-center justify-center px-4 md:px-0'>
                    <Image src={"/images/quote2.png"} width={1000} height={300} alt=' ' className=' w-full h-auto' />
                </div>


            </section>
        </div>
    )
}

export default QuoteSections
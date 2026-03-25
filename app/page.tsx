import React from 'react'
import HeroSection from './components/ui/hero'
import WhyChipa from './components/ui/why-chipa'
import Welcome from './components/ui/welcome'
import Image from 'next/image'
import Chipping from './components/ui/chipping'
import Putting from './components/ui/putting'
import StoreSection from './components/ui/store-section'
import QuoteSections from './components/ui/quote-sections'
import IntroVideoSection from './components/ui/introVideoSection'
import ReviewsSection from './components/home/reviews-section'
import LessonsSection from './components/home/lessons-section'

const page = () => {
  return (
    <div>
      <HeroSection />
      {/* Intro Video Section */}
      <IntroVideoSection />

      <WhyChipa />

      <section className='w-full py-20 md:py-32 flex items-center justify-center px-6 sm:px-10'>

        <div className='w-full max-w-4xl mx-auto '>
          <h2 className='text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-black mb-8 text-center'>
            Mastering the fundamentals makes a better golfer
          </h2>

          <div className='space-y-6 text-center max-w-3xl mx-auto'>
            <p className='text-lg md:text-xl tracking-tight leading-relaxed font-medium text-gray-600'>
              That&apos;s why I created the ChipAnnaPutt Kit (named after dear old Dad, the most consistent golfer I know). When Dad missed hitting a green, he would say, &quot;Oh well . . . chip ana putt. FEEEL the distance!&quot; Pros will &quot;step it off&quot; so they can feel the distance and direction (the Double Ds).
            </p>

            <p className='text-xl md:text-2xl tracking-tight leading-relaxed font-bold text-green-600 italic'>
              The ball WILL go in the hole!
            </p>
          </div>

          {/* Image */}
          <div className="mt-12 flex justify-center">
            <Image src="/images/logo-banner.png" alt="Logo Banner" width={400} height={400} className='w-full max-w-md h-auto' />
          </div>

        </div>

      </section>


      {/* <Welcome /> */}

      <Chipping />
      <Putting />

      {/* Store Section */}
      <StoreSection />

      {/* Lessons Section */}
      <LessonsSection />

      {/* Reviews Section */}
      <ReviewsSection />

      <QuoteSections />

    </div>
  )
}

export default page

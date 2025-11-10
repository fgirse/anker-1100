import React from 'react'
import AnimatedHero from '../components/animated-logo';
const Hero = () => {
  return (
    <section className='bg-[url("/lighthouse.png")] bg-contain bg-no-repeat bg-center lg:bg-[url("/5555.svg")] lg:bg-contain lg:bg-no-repeat lg:bg-center h-screen w-full flex items-center justify-center'>
      <AnimatedHero />
    </section>
  )
}

export default Hero

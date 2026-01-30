import About from '@/components/modules/about/about'
import HowItWorks from '@/components/modules/about/howItWorks'
import WhyChooseUs from '@/components/modules/about/whyChose'
import { Hero } from '@/components/modules/home/hero'
import Policy from '@/components/modules/home/policy'
import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
      <Hero></Hero>
      <Policy></Policy>
      <HowItWorks></HowItWorks>
      <About></About>
      <WhyChooseUs></WhyChooseUs>
    </div>
  )
}

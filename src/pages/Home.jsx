import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import DescriptionSection from '../components/DescriptionSection'
import CabinsSection from '../components/CabinsSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <>
        <Hero />
        {/* <FeaturedDestination /> */}
        <DescriptionSection />
        <CabinsSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      
    </>
  )
}

export default Home
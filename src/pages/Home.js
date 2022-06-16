import React from 'react'
import CredibilitySection from '../components/CredibilitySection'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import { HowItWorksSection } from '../components/HowItWorksSection'

function Home() {
  return (
    <main>
        <Header />
        <HeroSection />
        <CredibilitySection />
        <HowItWorksSection />
    </main>
  )
}

export default Home
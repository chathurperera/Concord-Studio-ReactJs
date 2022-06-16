import React from 'react'
import CredibilitySection from '../components/CredibilitySection'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { QuoteSection } from '../components/QuoteSection'

function Home() {
  return (
    <main>
        <Header />
        <HeroSection />
        <CredibilitySection />
        <HowItWorksSection />
        <QuoteSection />
    </main>
  )
}

export default Home
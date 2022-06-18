import React from 'react'
import CredibilitySection from '../components/CredibilitySection'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { HowWeWorkSection } from '../components/HowWeWorkSection'
import { PricingSection } from '../components/PricingSection'
import { QuoteSection } from '../components/QuoteSection'

function Home() {
  return (
    <main>
        <Header />
        <HeroSection />
        <CredibilitySection />
        <HowItWorksSection />
        <QuoteSection />
        <HowWeWorkSection />
        <PricingSection />
    </main>
  )
}

export default Home
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import MediaGrid from './components/MediaGrid'
import FAQ from './components/FAQ'
import CTAButton from './components/CTAButton'
import FadeIn from './components/FadeIn'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <FadeIn playOnLoad><Hero /></FadeIn>
        <FadeIn><InfoSection /></FadeIn>
        <FadeIn><CTAButton /></FadeIn>
        <MediaGrid />
        <FadeIn><FAQ /></FadeIn>
        <Footer />
      </main>
    </div>
  )
}

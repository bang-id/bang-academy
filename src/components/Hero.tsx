import React, { useRef } from 'react'
import styles from './Hero.module.css'
import FadeIn from './FadeIn'
import useParallax from '../hooks/useParallax'
import useGsapRotate from '../hooks/useGsapRotate'

export default function Hero(){
  // Increase speed for a stronger parallax effect. Use a positive speed
  // and set `direction` to 'up' to move the image opposite to scroll.
  const { ref: parallaxRef, offset } = useParallax({ speed: 0.45, direction: 'up' })
  const rotRef = useRef<HTMLDivElement | null>(null)
  // subtle rotation on scroll for the hero image (animate the wrapper to avoid img-specific CSS conflicts)
  useGsapRotate(rotRef, { maxRotation: 6, start: 'top bottom', end: 'bottom top', scrub: true })
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <FadeIn delay="300ms" playOnLoad y="60px" duration="800ms" easing="cubic-bezier(.18,.9,.3,1)" scale="0.9" rootMargin="-50% 0px -50% 0px" threshold={0.2}>
          <h1 className={styles.title}>Bang Academy is an on-site program disrupting industry ready education.</h1>
        </FadeIn>
      </div>
      <div className={styles.bgImage} aria-hidden ref={parallaxRef} style={{ transform: `translateY(${offset}px)` }}>
        <FadeIn delay="350ms" playOnLoad duration="600ms" noTranslate noScale>
          <div ref={rotRef} style={{ width: '100%', height: '100%', display: 'block' }}>
            <img src="/assets/hero.png" alt="desk" style={{ width: '100%', height: '100%', display: 'block' }} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

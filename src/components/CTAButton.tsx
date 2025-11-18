import React, { useState, useEffect } from 'react'
import styles from './CTAButton.module.css'
import FadeIn from './FadeIn'

export default function CTAButton(){
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 450)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className={styles.wrap}>
      <button className={styles.inner}>
        <div className={styles.text}>
          <FadeIn>
            {isMobile ? 'Click here to apply' : (
              <>
                Apply<br />Now
              </>
            )}
          </FadeIn>
        </div>
        <div className={styles.svgBox} aria-hidden="true">
          <svg width="216" height="207" viewBox="0 0 216 207" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M108.341 4.19165L207.325 103.175" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M207.325 103.175L108.341 202.158" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M207.325 103.175L0 103.175" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </div>
  )
}

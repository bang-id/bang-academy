import React, { useState, useEffect } from 'react'
import styles from './CTAButton.module.css'
import FadeIn from './FadeIn'

export default function CTAButton(){
  const [isMobile, setIsMobile] = useState(false)
  const [href, setHref] = useState<string | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 450)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handler = (ev: Event) => {
      try {
        const detail = (ev as CustomEvent).detail
        if (detail && typeof detail.href === 'string') setHref(detail.href)
      } catch (err) {
        // ignore
      }
    }
    window.addEventListener('apply-link-change', handler as EventListener)
    return () => window.removeEventListener('apply-link-change', handler as EventListener)
  }, [])

  useEffect(() => {
    // Check if link was already stored before listener was ready
    if (!href && (window as any).__applyCTALink) {
      setHref((window as any).__applyCTALink)
    }
  }, [])

  return (
    <div className={styles.wrap}>
      {href ? (
        <a className={styles.inner} href={href} target="_blank" rel="noopener noreferrer">
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
        </a>
      ) : (
        <button className={styles.inner} type="button">
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
      )}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import Typography from './Typography'

export default function Header() {
  const [isNearBottom, setIsNearBottom] = useState(false)
  const [applyLink, setApplyLink] = useState('https://forms.gle/Vaq248XZD8n8Ankp8')

  useEffect(() => {
    const handler = (ev: Event) => {
      try {
        const detail = (ev as CustomEvent).detail
        if (detail && typeof detail.href === 'string') setApplyLink(detail.href)
      } catch (err) {
        // ignore
      }
    }
    window.addEventListener('apply-link-change', handler as EventListener)
    return () => window.removeEventListener('apply-link-change', handler as EventListener)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const distanceFromBottom = docHeight - (scrollTop + winHeight)

      // Hide header when within 200px of the bottom
      setIsNearBottom(distanceFromBottom < 200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.root} ${isNearBottom ? styles.hidden : ''}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>Bang Academy</div>
        <nav className={styles.nav}>
          {/* <div className={styles.links}> 
          <Typography as="a" className={styles.navItem}>Available specialities</Typography>
          <Typography as="a" className={styles.navItem}>Student work</Typography>
            </div> */}
          <a className={styles.cta} href={applyLink} target="_blank" rel="noopener noreferrer" aria-label="Apply now">
            <Typography as="span">Apply now</Typography>
          </a>
        </nav>
      </div>
    </header>
  )
}

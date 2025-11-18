import React from 'react'
import styles from './Header.module.css'
import Typography from './Typography'

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.brand}>Bang Academy</div>
        <nav className={styles.nav}>
          {/* <div className={styles.links}> 
          <Typography as="a" className={styles.navItem}>Available specialities</Typography>
          <Typography as="a" className={styles.navItem}>Student work</Typography>
            </div> */}
          <button className={styles.cta} aria-label="Apply now">
            <Typography as="span">Apply now</Typography>
          </button>
        </nav>
      </div>
    </header>
  )
}

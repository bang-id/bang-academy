import React from 'react'
import styles from './Footer.module.css'
import infoStyles from './InfoSection.module.css'

export default function Footer(){
  return (
    <footer className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.brand}>Bang<br/>Academy</div>
        <div className={styles.right}>
          <div className={styles.ctaRow}>
            <div className={styles.content}>
              Bang Academy is a 4 to 6 month program designed to equip individuals with the fundamental skills necessary for a 
              career in industrial design / Design Engineering / Digital Brand Experience Design / Demand Generation. 
              <br /><br /> <span style= {{color: '#ff0000'}}>Applications close on Dec 15.</span>
            </div>

            <button className={styles.btn} type="button">
              <span>Apply Now</span>
              <svg className={styles.arrow} viewBox="0 0 216 207" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28" aria-hidden="true">
                <path d="M108.341 4.19165L207.325 103.175" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M207.325 103.175L108.341 202.158" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M207.325 103.175L0 103.175" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <a className={styles.btn} href="https://www.bangid.com" target="_blank" rel="noopener noreferrer">
              <span>Visit Us</span>
              <svg className={`${styles.arrow} ${styles.rotate}`} viewBox="0 0 216 207" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28" aria-hidden="true">
                <path d="M108.341 4.19165L207.325 103.175" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M207.325 103.175L108.341 202.158" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M207.325 103.175L0 103.175" stroke="currentColor" strokeWidth="11.8557" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className={styles.imgWrap}>
            <img src="/assets/footerimg.png" alt="footer visual" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <div className={styles.copyright}>@2026. Bang Design Pvt Ltd. All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}

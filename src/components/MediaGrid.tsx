import React from 'react'
import styles from './MediaGrid.module.css'
import FadeIn from './FadeIn'
import { solprocess, solkeyshot, solinsta, rhino, surface, tejashelmet, watch, renderweekly, modideation, oudideation, oudrender} from '../assets'

export default function MediaGrid(){
  return (
    <>
    <FadeIn>
      <section className={styles.wrap} data-section="media">
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* left image: column 1 */}
            <div className={styles.left}><a href='https://www.instagram.com/p/DNGh_TOg3sI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target="_blank" rel="noopener noreferrer"><img src={solinsta} alt=""/> </a></div>

            {/* middle image: columns 2-4 */}
            <figure className={styles.middle}>
              <img src={solkeyshot} alt="Keyshot render"/>
              <figcaption className={styles.caption}>Keyshot render.<br/><a href='https://www.instagram.com/puthdesigns/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Rishikesh Puthukudy</a></figcaption>
            </figure>

            {/* right image: column 4 */}
            <figure className={styles.right}>
              <img src={solprocess} alt="Ideation"/>
              <figcaption className={styles.caption}>Ideation.<br/><a href='https://www.instagram.com/puthdesigns/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Rishikesh Puthukudy</a></figcaption>
            </figure>

          </div>
        </div>
      </section>
    </FadeIn>
    
    {/* Feature section inserted between grids */}
    <FadeIn>
      <section className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureLeft}>
              <img src="/assets/yankodesignlogo.png" alt="Yanko Design" />
            </div>
            <div className={styles.featureRight}>
              <div className={styles.rightWrap}>
                <p className={styles.kicker}>Featured student work</p>
                <h2 className={styles.featureTitle}>Sol Brass Aroma Diffuser Blends Indian Tradition With Modern Ritual</h2>
              </div>
                <a className={styles.featureCta} href="https://www.yankodesign.com/2025/08/09/sol-brass-aroma-diffuser-blends-indian-tradition-with-modern-ritual/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Read on Yanko Design</a>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>

    <FadeIn>
      <section className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* left image: column 1 */}

            {/* span image: complete span*/}
            <figure className={styles.fullspan}>
              <img src={rhino} alt="Surfacing using Rhino on Creo."/>
              <figcaption className={styles.caption}>Surfacing using Rhino on Creo.<br/><a href='https://www.instagram.com/dipanshu.raut8/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Dipanshu Raut</a></figcaption>
            </figure>

          </div>
        </div>
      </section>
    </FadeIn>

   {/* Feature section inserted between grids */}
    <FadeIn>
      <section className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureLeft}>
              <img src="/assets/quotes.png" alt="Quotes" />
            </div>
            <div className={styles.featureRight}>
              <div className={styles.rightWrap}>
                <p className={styles.kicker}>Testimonial</p>
                <h2 className={styles.featureTitle}>Possibly the best start to a design career working as an Industrial Design Intern at Bang Design</h2>
              </div>
                <a className={styles.featureCta} href="https://www.linkedin.com/pulse/what-ive-been-up-past-6-months-tejas-mitra-yzhoe/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Read on LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>

    <FadeIn>
      <section className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* small image on left */}
            <figure className={styles.largeOnRight}>
              <img src={tejashelmet} alt="Procreate sketch"/>
              <figcaption className={styles.caption}>Procreate sketch.<br/><a href='https://www.linkedin.com/in/tejas-mitra-036b43216/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Tejas Mitra</a></figcaption>
            </figure>

            {/* large image on right (2/3 width) */}
            <figure className={styles.smallLeft}>
              <img src={surface} alt="Keyshot render"/>
              <figcaption className={styles.caption}>Surfacing using Rhino on Creo.<br/><a href='https://www.instagram.com/dipanshu.raut8/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Dipanshu Raut</a></figcaption>
              </figure>
          </div>
        </div>
      </section>
    </FadeIn>

    <FadeIn>
      <section className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* left image: column 1 */}
                      {/* right image: column 4 */}
            <figure className={styles.smallRight}>
              <img src={watch} alt="Ideation"/>
              <figcaption className={styles.caption}>Product Ideation.<br/><a href='https://www.linkedin.com/in/tejas-mitra-036b43216/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Tejas Mitra</a></figcaption>
            </figure>

            <figure className={styles.middle}>
              <img src={renderweekly} alt="Keyshot render"/>
              <figcaption className={styles.caption}><a href='https://www.linkedin.com/in/tejas-mitra-036b43216/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Tejas Mitra</a> <br />for Render Weekly</figcaption>
              </figure>

            <figure className={styles.smallleft}>
              <img src={modideation} alt="Ideation"/>
              <figcaption className={styles.caption}>Form Exploration.<br/><a href='https://www.instagram.com/puthdesigns/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Rishikesh Puthukudy</a></figcaption>
            </figure>
          </div>
        </div>
      </section>
    </FadeIn>

       {/* Feature section inserted between grids */}
    <FadeIn>
      <section className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <div className={styles.featureLeft}>
              <img src="/assets/quotes.png" alt="Quotes" />
            </div>
            <div className={styles.featureRight}>
              <div className={styles.rightWrap}>
                <p className={styles.kicker}>Testimonial</p>
                <h2 className={styles.featureTitle}>An experience that shaped me far beyond what I had imagined.</h2>
              </div>
                <a className={styles.featureCta} href="https://www.linkedin.com/posts/rishikeshputhukudy_as-i-wrap-up-my-internship-at-bang-design-activity-7369701323593740291-Akgq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADegEfIB6m2JUhDMOFf6OHRojvPx5NquH4s" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Read on LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>

    <FadeIn>
      <section className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* small image on left */}
            <figure className={styles.smallLeft}>
              <img src={oudideation} alt="vizcom iteration"/>
              <figcaption className={styles.caption}>Rapid Ideation using AI.<br/><a href='https://www.linkedin.com/in/kushsbagdwal/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Kushagra Bagdwal</a></figcaption>
            </figure>

            {/* large image on right (2/3 width) */}
            <figure className={styles.largeOnRight}>
              <img src={oudrender} alt="Keyshot render"/>
              <figcaption className={styles.caption}>Keyshot render.<br/><a href='https://www.linkedin.com/in/kushsbagdwal/' target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                Kushagra Bagdwal</a></figcaption>
              </figure>
          </div>
        </div>
      </section>
    </FadeIn>

    </>
  )
}

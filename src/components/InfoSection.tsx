import React, { useState } from 'react'
import styles from './InfoSection.module.css'
import FadeIn from './FadeIn'

export default function InfoSection(){
  const [selectedPill, setSelectedPill] = useState('Industrial Design')

  const specialtyContent = {
    'Industrial Design': {
      who: 'This program is for current design students in their final semester or recent graduates aiming to enhance their industrial design skills. You are eager to refresh your knowledge, portfolio and identify as an industrial designer.',
      what: 'Master industry-relevant design skills while working with real businesses and start-ups, across sectors such as health, consumer, technology, industrial robotics, mobility and more.\n\nOver 18 weeks, you\'ll sharpen your abilities in sketching, form development, CMF, design strategy, user research, product visualization, and design for manufacturing. You will collaborate with stakeholders, test with real users, and present to decision-makers.\n\nGuided by experienced designers and mentors, you\'ll build a professional portfolio, grow your creative confidence, and prepare for your next step—whether a Master\'s in Design or an exciting first role.',
      get: 'A certificate of completion.\nWork samples that you can include in your portfolio*.\nA global studio experience working with real businesses from around the world.\nA letter of recommendation for an international design or business school application.\nNetworking, socialization, and relaxation with industry peers, and more.\n\n*Subject to NDAs with customers',
      openings: '3',
      price: 'INR 7,000/mo for 4 months',
    },
    'Design Engineering': {
      who: 'Current engineering or design students in their final year or recent graduates looking to bridge the gap between engineering and user-centered design. You have strong technical fundamentals and want to apply them to real-world products.',
      what: 'Learn to combine rigorous engineering principles with design thinking. Work on real projects involving prototyping, design for manufacturing, technical documentation, and stakeholder collaboration.\n\nOver 18 weeks, you\'ll develop expertise in CAD, DFM (Design for Manufacturing), material selection, tolerance stacking, and how to communicate complex technical concepts to non-technical teams.\n\nYou\'ll work with mentors from leading companies, test prototypes with real users, and build a portfolio of technically sophisticated, user-focused designs.',
      get: 'A certificate of completion.\nWork samples that you can include in your portfolio*.\nA global studio experience working with real businesses from around the world.\nA letter of recommendation for higher education or employment.\nNetworking with engineers and designers from around the world.\n\n*Subject to NDAs with customers',
      openings: '3',
      price: 'INR 7,000/mo for 4 months',
    },
    'Digital Brand Experience Design': {
      who: 'Design or communication students in their final semester or recent graduates passionate about digital interfaces, web design, and brand expression. You want to understand how design systems and strategy work together.',
      what: 'Master the full spectrum of digital design—from strategy to execution. Learn design systems, accessibility, motion design, and how to collaborate with developers and stakeholders.\n\nOver 18 weeks, you\'ll work on real client projects involving website redesigns, app interfaces, brand guidelines, and digital experiences. You\'ll use industry tools, learn responsive design best practices, and understand how to scale design solutions.',
      get: 'A certificate of completion.\nWork samples that you can include in your portfolio*.\nA global studio experience working with real businesses from around the world.\nHands-on experience with modern design tools and workflows.\nNetworking with designers and strategists from global companies.\n\n*Subject to NDAs with customers',
      openings: '2',
      price: 'INR 6,500/mo for 4 months',
    },
    'Demand Generation': {
      who: 'Marketing, business, or communications students in their final year or recent graduates interested in growth, data-driven marketing, and how to build businesses. You\'re analytical, curious about user behavior, and want hands-on experience.',
      what: 'Learn the fundamentals of demand generation—from strategy to execution. Master tools like CRM, marketing automation, analytics, and outreach strategies used by scaling companies.\n\nOver 18 weeks, you\'ll run real campaigns, analyze user data, build landing pages, manage customer funnels, and present results to stakeholders. Work with mentors from fast-growing startups and established companies.',
      get: 'A certificate of completion.\nCampaign work samples that you can showcase*.\nHands-on experience with marketing automation and analytics tools.\nA letter of recommendation for business school or growth roles.\nNetworking with marketers, founders, and growth leaders.\n\n*Subject to NDAs with customers',
      openings: '2',
      price: 'INR 5,500/mo for 4 months',
    }
  }

  const handlePillClick = (pill) => {
    setSelectedPill(pill)
  }

  const content = specialtyContent[selectedPill] || specialtyContent['Industrial Design']

  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <div className= {styles.sectionTitle}> Choose your speciality</div>
        <div className={styles.pills}>
          <FadeIn>
            <span
              className={`${styles.pill} ${selectedPill === 'Industrial Design' ? styles.selected : ''}`}
              onClick={() => handlePillClick('Industrial Design')}
            >
              Industrial Design (3)
            </span>
          </FadeIn>
                    <FadeIn>
            <span
              className={`${styles.pill} ${selectedPill === 'Design Engineering' ? styles.selected : ''}`}
              onClick={() => handlePillClick('Design Engineering')}
            >
              Design Engineering (3)
            </span>
          </FadeIn>
                    <FadeIn>
            <span
              className={`${styles.pill} ${selectedPill === 'Digital Brand Experience Design' ? styles.selected : ''}`}
              onClick={() => handlePillClick('Digital Brand Experience Design')}
            >
              Digital Brand Experience Design (2)
            </span>
          </FadeIn>
                    <FadeIn>
            <span
              className={`${styles.pill} ${selectedPill === 'Demand Generation' ? styles.selected : ''}`}
              onClick={() => handlePillClick('Demand Generation')}
            >
              Demand Generation (2)
            </span>
          </FadeIn>
        </div>
        <div className= {styles.rowWrap}>

          <FadeIn noTranslate noScale>
            <div className={styles.rows}>
              <div className={styles.rowLabel}>Who it's for</div>
              <div className={styles.rowContent}>{content.who}</div>
            </div>
          </FadeIn>
          <div className={styles.separator}><span className={styles.separatorBar} /></div>

          <FadeIn noTranslate noScale>
            <div className={styles.rows}>
              <div className={styles.rowLabel}>What to expect</div>
              <div className={styles.rowContent}>
                {content.what.split('\n\n').map((para, i) => (
                  <React.Fragment key={i}>
                    {para}
                    <br /><br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className={styles.separator}><span className={styles.separatorBar} /></div>

          <FadeIn noTranslate noScale>
            <div className={styles.rows}>
              <div className={styles.rowLabel}>What you get</div>
              <div className={styles.rowContent}>
                {content.get.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className={styles.separator}><span className={styles.separatorBar} /></div>

          <FadeIn noTranslate noScale>
            <div className={styles.rows}>
              <div className={styles.rowLabel}>No of Openings</div>
              <div className={styles.rowContent}>{content.openings}</div>
            </div>
          </FadeIn>
          <div className={styles.separator}><span className={styles.separatorBar} /></div>

          <FadeIn noTranslate noScale>
            <div className={styles.rows}>
              <div className={styles.rowLabel}>Price</div>
              <div className={styles.rowContent}>{content.price}</div>
            </div>
          </FadeIn>
          <div className={styles.separator}><span className={styles.separatorBar} /></div>

          <FadeIn noTranslate noScale>
            <div className={styles.rows}>
              <div className={styles.rowLabel}>Registration</div>
              <div className={styles.rowContent}>Open <br /><span style={{ color: '#ff0000' }}>Closes on Dec 15</span></div>
            </div>
          </FadeIn>

        </div>
      </div>
      
    </section>
  )
}

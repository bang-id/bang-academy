import React, { useState, useEffect } from 'react'
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
    'Content Writing': {
      who: 'This program is for final-semester students or recent graduates in English, communications, journalism, marketing, or related fields who want to become confident, versatile writers. You’re ready to strengthen your storytelling, refine your voice, and learn how to write for digital platforms, brands, and conversion. Ideal if you want hands-on experience creating articles, scripts, emails, landing pages, and social content that engages, ranks, and drives action.',
      what: 'Strengthen your ability to craft compelling, high-performing content across digital channels.\n\n Over 18 weeks, you’ll work with real companies, editors, and marketing teams to produce articles, scripts, emails, social posts, website copy, and narratives that engage audiences and drive measurable outcomes. You’ll learn the full process: research, interviewing, outlining, drafting, editing, SEO optimization, storytelling frameworks, and brand voice adaptation.\n\nYou’ll collaborate closely with stakeholders, incorporate real feedback cycles, and present your work to decision-makers. With guidance from experienced writers and content strategists, you’ll build a polished, versatile writing portfolio, sharpen your editorial judgment, and graduate ready for roles in content marketing, copywriting, journalism, or brand storytelling.',
      get: 'A certificate of completion.\nWork samples that you can include in your portfolio*.\nA global studio experience working with real businesses from around the world.\nHands-on experience with modern design tools and workflows.\nNetworking with designers and strategists from global companies.\n\n*Subject to NDAs with customers',
      openings: '1',
      price: 'INR 7,000/mo for 4 months',
    },
    'Graphic Design': {
      who: 'This program is for current design students in their final semester or early-career creatives who want to sharpen their visual communication skills. You’re looking to expand your portfolio, improve your mastery of design tools, and learn how to bring concepts to life across branding, marketing, and digital media. Perfect if you want practical, industry-ready experience creating graphics, layouts, campaigns, and visual systems that stand out and scale.',
      what: 'Develop the visual communication skills modern creative teams rely on, while working on real design challenges from businesses and startups.\n\nAcross 18 weeks, you’ll build expertise in layout, typography, colour systems, branding, visual hierarchy, image-making, and digital design using industry tools like Adobe Creative Suite and Figma. You’ll create campaigns, social graphics, brand assets, and multi-platform visuals that balance creativity with strategic intent.\n\nThroughout the program, you’ll collaborate with clients and creative directors, iterate through critiques, and bring ideas to life through refined design systems. Guided by seasoned designers and art directors, you’ll graduate with a professional portfolio, strong visual judgment, and the confidence to step into roles in branding, graphic design, marketing design, or digital creative work.',
      get: 'A certificate of completion.\nWork samples that you can include in your portfolio*.\nA global studio experience working with real businesses from around the world.\nHands-on experience with modern design tools and workflows.\nNetworking with designers and strategists from global companies.\n\n*Subject to NDAs with customers',
      openings: '1',
      price: 'INR 7,000/mo for 4 months',
    },
    'Demand Generation': {
      who: 'Marketing, business, or communications students in their final year or recent graduates interested in growth, data-driven marketing, and how to build businesses. You\'re analytical, curious about user behavior, and want hands-on experience.',
      what: 'Learn the fundamentals of demand generation—from strategy to execution. Master tools like CRM, marketing automation, analytics, and outreach strategies used by scaling companies.\n\nOver 18 weeks, you\'ll run real campaigns, analyze user data, build landing pages, manage customer funnels, and present results to stakeholders. Work with mentors from fast-growing startups and established companies.',
      get: 'A certificate of completion.\nCampaign work samples that you can showcase*.\nHands-on experience with marketing automation and analytics tools.\nA letter of recommendation for business school or growth roles.\nNetworking with marketers, founders, and growth leaders.\n\n*Subject to NDAs with customers',
      openings: '2',
      price: 'INR 7,000/mo for 4 months',
    }
  }

  const handlePillClick = (pill) => {
    setSelectedPill(pill)
    // dispatch the selected apply link so the CTAButton (sibling) can update
    const applyLinks: Record<string, string> = {
      'Industrial Design': 'https://forms.gle/Vaq248XZD8n8Ankp8',
      'Design Engineering': 'https://forms.gle/WhzAUkry7R3r6jaC8',
      'Content Writing': 'https://forms.gle/LBKwp3xgNExBPuNB6',
      'Graphic Design': 'https://forms.gle/PtVEYYiFKCMpiwrn6',
      'Demand Generation': 'https://forms.gle/7ge6JCHHSoTaCZnC9'
    }
    const href = applyLinks[pill] || 'https://www.bangid.com/apply'
    ;(window as any).__applyCTALink = href
    window.dispatchEvent(new CustomEvent('apply-link-change', { detail: { href } }))
  }

  const content = specialtyContent[selectedPill] || specialtyContent['Industrial Design']

  useEffect(() => {
    // dispatch initial link for CTAButton
    const applyLinks: Record<string, string> = {
      'Industrial Design': 'https://forms.gle/Vaq248XZD8n8Ankp8',
      'Design Engineering': 'https://forms.gle/WhzAUkry7R3r6jaC8',
      'Content Writing': 'https://forms.gle/LBKwp3xgNExBPuNB6',
      'Graphic Design': 'https://forms.gle/PtVEYYiFKCMpiwrn6',
      'Demand Generation': 'https://forms.gle/7ge6JCHHSoTaCZnC9'
    }
    const href = applyLinks[selectedPill] || 'https://www.bangid.com/apply'
    ;(window as any).__applyCTALink = href
    window.dispatchEvent(new CustomEvent('apply-link-change', { detail: { href } }))
  }, [])

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
              className={`${styles.pill} ${selectedPill === 'Content Writing' ? styles.selected : ''}`}
              onClick={() => handlePillClick('Content Writing')}
            >
              Content Writing (1)
            </span>
          </FadeIn>
                    <FadeIn>
            <span
              className={`${styles.pill} ${selectedPill === 'Graphic Design' ? styles.selected : ''}`}
              onClick={() => handlePillClick('Graphic Design')}
            >
              Graphic Design (1)
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
              <div className={styles.rowLabel}>What you pay</div>
              <div className={styles.rowContent} style={{ textDecoration: "underline" }}>{content.price}</div>
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

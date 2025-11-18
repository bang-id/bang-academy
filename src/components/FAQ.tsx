import React from 'react'
import styles from './FAQ.module.css'

const FAQ_TEXTS = [
  'Final-semester students and recent graduates who want structured, real-world experience in Industrial Design, Design Engineering, Communication Design, UX Writing, or Demand Generation. If you’re serious about becoming industry-ready and building a credible portfolio, this is for you.',
  'Unlike typical internships, this is an accelerated career-building program crafted from 25 years of global consulting, design, engineering, growth and venture incubation experience. You get structured training, real client exposure, portfolio-ready projects, new technology workflows, and mentoring from senior practitioners. It is our desire to deliver more than the value of your subscription.',
  'You will work on real briefs from real projects and incubated ventures in industries like healthcare, mobility, consumer electronics, manufacturing, social impact, education, and B2B services. Every stream involves hands-on project work, feedback cycles, user testing or stakeholder interaction, and final presentations.',
  'The internship runs for 18 weeks, with a mix of structured learning, project work, critique sessions, and industry interactions. You can extend your studio sessions to 24 weeks at no additional cost. The program is structured to coincide with typical final internships and industry projects.',
  'The program is designed to deliver hands-on and practical training that you can use to shape your design career moving forward. All sessions are preferred to be in-person at our studio in Bangalore. You can work offsite and connect only a day or two each week depending on project needs and your location.',
  'BangDesign* is not a training institute. We are a global design and strategy studio with 25+ years of experience working with leading companies. You learn directly through our workflows, tools, systems, and client interactions. You will learn to work like a responsible professional—not a student.',
  'Yes. You’ll receive critique, guidance, and strategic direction on every major assignment.',
  'You should have basic foundational skills in your chosen stream (design, engineering, communication, marketing, etc.). We help you bridge the gap to becoming industry-ready.',
  'Yes. Graduates receive a Bang Design* completion certificate and a portfolio review highlighting your project outcomes and areas of strength.',
  'We help you prepare professionally—portfolio, pitch, resumes, LinkedIn, case studies, interview prep—and connect suitable candidates to our partner companies and client network wherever appropriate. While we cannot guarantee a job, our alumni typically step into roles with clarity, confidence, and proof of work.',
  'Depending on the stream you will learn a combination tool-skills: Industrial Design & Design Engineering: CAD, prototyping, DFM, CMF, visualization tools Communication Design: Popular and Open Source Creative Design and Web Publishing, AI writing tools, analytics Demand Generation: prospecting tools, CRM, Business intelligence via AI, outreach automation, landing page builders, analytics dashboards',
  'A laptop capable of running your chosen toolset is enough. We guide you on cost-efficient software choices. Some tools we use have free or student licenses, which you can use for non-commercial work. For Industrial Design, a Digital Tablet (iPad or Wacom Cintiq) will help. You need access to presentation software (PowerPoint or Google Slides) and access to a good internet connection when you’re not in office, and access to a google email account for access to shared drives.',
  'Yes—everything you create here strengthens your portfolio. We help you refine both the work you do for clients and your personal projects so that your portfolio reflects industry-ready standards.',
  'Expect 35–45 hours per week, including in-office sessions, independent work, and critiques. Peak weeks may involve heavier in-office interactions.',
  'Submit the short application form. If shortlisted, you’ll receive this page with details and may be invited for a brief interview or portfolio chat.'
]

const FAQ_QUESTIONS = [
  'Who is this internship designed for?',
  'Why is this a paid internship program?',
  'What will I work on during the program?',
  'How long is the program?',
  'Is the program in-person?',
  'What makes Bang Design different from other design or marketing training institutes?',
  'Will I get mentorship?',
  'Do I need prior internship experience?',
  'Will I get a certificate?',
  'Will I get placement assistance?',
  'What tools will I learn?',
  'Do I need powerful hardware or special software?',
  'Can I work on my personal portfolio alongside the internship?',
  'What is the weekly time commitment?',
  'How do I apply?'
]

export default function FAQ() {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.smallLeft}>
          <h2 className={styles.heading}>Frequently asked <br />questions</h2>
        </div>
        <div className={styles.largeOnRight}>
          <div className={styles.accordion}>
            {FAQ_QUESTIONS.map((q, i) => (
              <details key={i} className={styles.detailsFadeIn} onToggle={() => console.log('details toggled', i)}>
                <summary onClick={() => console.log('summary clicked', i)}>
                  <span>{q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    <svg className={styles.closed} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M25.7383 11.1318L15.9997 20.8701L6.26139 11.1318" stroke="black" strokeWidth="1.33333" strokeLinecap="round"/>
                    </svg>
                    <svg className={styles.open} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M25.7383 20.8682L15.9997 11.1299L6.26139 20.8682" stroke="black" strokeWidth="1.33333" strokeLinecap="round"/>
                    </svg>
                  </span>
                </summary>
                <p>
                  {FAQ_TEXTS[i]}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


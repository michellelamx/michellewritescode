import styles from './main.module.css'

export const About = () => {

  return (
    <section className={styles.aboutWrapper} id='about'>
      <div className='content-container'>
        <h2 className='page-title'>
          <span className='left-bracket'>{`{`}</span>about<span className='right-bracket'>{`}`}</span>
        </h2>
        <div className={styles.aboutContent}>
          <p>As a front-end engineer for over 14 years, I honestly can't imagine doing anything else. It's truly a privilege to be able to earn a living doing what I love.</p>
          <p>I thrive at the intersection of rapid innovation and uncompromising quality, while ensuring that speed never comes at the cost of quality. With a keen eye for detail and strong product instincts, I specialize in crafting high-performance front-end applications with pixel-perfect precision and a dedicated pursuit of user happiness.</p>
          <p>I take pride in my ability to take projects from conception to completion, owning the entire process from 0 to 1. Beyond individual contributions, I excel at designing and implementing efficient workflows that empower teams to produce the highest quality of work at pace while eliminating friction and pain points.</p>
          <p>I'm passionate about mentoring and teaching others, while eagerly absorbing knowledge from those around me. I believe that fostering an environment of collaboration, continuous learning, and growth not only elevates the team but also drives innovation and a strong team culture.</p>
        </div>
      </div>
    </section>
  )
}

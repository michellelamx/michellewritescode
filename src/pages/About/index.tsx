import styles from './main.module.css'

export const About = () => {

  return (
    <section className={styles.aboutWrapper} id='about'>
      <h1 className='page-title left-side'>ABOUT</h1>
      <div className='content-container wide'>
        <div className={styles.twoUpGrid}>
          <div className={styles.imageWrapper}>
            <img src='/illustrated-me-laptop.png' alt='illustrated picture of me with laptop' />
          </div>
          <div className={styles.aboutContent}>
            <p>As a front-end engineer for 14+ years, I honestly can't imagine doing anything else. I feel truly blessed to be able to earn a living doing what I love.</p>
            <p>I thrive at the intersection of rapid innovation and uncompromising quality, while ensuring that speed never comes at the cost of quality. With a meticulous eye for detail and strong product instincts, I specialize in crafting high-performance front-end applications with pixel-perfect precision and a dedicated pursuit of user happiness.</p>
            <p>I'm at my best when I get to take projects from conception to completion, owning the entire process from 0 to 1. One of my strengths is in designing and implementing workflows & processes that empower teams to produce their best work at pace while eliminating friction and pain points.</p>
            <p>I'm always excited to mentor and teach others, while, at the same time, absorbing knowledge from those around me. I believe that fostering an environment of collaboration, continuous learning, and growth not only elevates the team but also drives innovation and a strong team culture.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

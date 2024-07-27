import styles from './main.module.css'
import cx from 'classnames'
import { useEffect } from 'react'

export const Intro = () => {
  const bgImages = [
    '/bg-1.png',
    '/bg-3.png',
    '/bg-4.png',
    '/bg-5.png',
    '/bg-6.png',
    '/bg-7.png',
    '/bg-8.png',
    '/bg-9.png',
    '/bg-10.png',
    '/bg-11.png',
    '/bg-12.png',
    '/bg-13.png',
    '/bg-14.png',
    '/bg-15.png',
  ]

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bgImages.length)
    const selectedImage = bgImages[randomIndex]

    document.documentElement.style.setProperty('--bg-image', `url(${selectedImage})`)
  })

  return (
    <section className={styles.introWrapper} id='home'>
      <div className={styles.intro}>
        <h1 className={ cx(styles.introTitle, styles.introTextImage) }>
          Michelle<br />
          Lamoureaux
        </h1>
        <div className={styles.details}>
          <div className={styles.introSubtitle}>
            Frontend Engineer
          </div>
          <div className={styles.introTagline}>
            I build pixel-perfect products that solve problems for users
          </div>
        </div>
      </div>
    </section>
  )
}

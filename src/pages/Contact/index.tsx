import cx from 'classnames'
import styles from './main.module.css'

export const Contact = () => {

  return (
    <section className={styles.contactWrapper} id='contact'>
      <h1 className='page-title'>contact</h1>
      <div className='content-container'>
        <div className={styles.twoUpGrid}>
          <div className={styles.imageWrapper}>
            <img src='/illustrated-me-contact.png' alt='illustrated picture of me with phone & laptop' />
          </div>
          <div className={styles.contactContentWrapper}>
            <div className={ cx(styles.contactItems, styles.row) }>
              <img src='/contact-icons/email-icon.svg' alt='email icon' />
              <a href='mailto:michelle@michellewritescode.com'>michelle@michellewritescode.com</a>
            </div>
            <div className={ cx(styles.contactItems, styles.row) }>
              <img src='/skills-logos/github-logo.svg' alt='link to my github' />
              <a href='https://github.com/michellelamx' target='_blank' rel='noreferrer'>GitHub</a>
            </div>
            <div className={ cx(styles.contactItems, styles.row) }>
              <img src='/contact-icons/linkedin-icon.svg' alt='link to my linkedin' />
              <a href='https://linkedin.com/in/michellelamoureaux' target='_blank' rel='noreferrer'>LinkedIn</a>
            </div>
            <div className={ cx(styles.contactItems, styles.row) }>
              <img src='/contact-icons/download-icon.svg' alt='download my resume' />
              <a href='/michelle-lamoureaux-resume.pdf' download>Download my resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

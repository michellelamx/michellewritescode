import cx from 'classnames'
import styles from './main.module.css'

export const Contact = () => {

  return (
    <section className={styles.contactWrapper} id='contact'>
      <h1 className='page-title'>contact</h1>
      <div className='content-container'>
        <div className={styles.contactContentWrapper}>
          <div className={ cx(styles.email, styles.row) }>
            <img src='/contact-icons/email-icon.svg' alt='email icon' />
            <a href='mailto:michelle@michellewritescode.com'>michelle@michellewritescode.com</a>
          </div>
          <div className={ cx(styles.socials, styles.row) }>
            <img src='/skills-logos/github-logo.svg' alt='github icon' />
            <a href='https://github.com/michellelamx' target='_blank' rel='noreferrer'>GitHub</a>
          </div>
          <div className={ cx(styles.socials, styles.row) }>
            <img src='/contact-icons/linkedin-icon.svg' alt='linkedin icon' />
            <a href='https://linkedin.com/in/michellelamoureaux' target='_blank' rel='noreferrer'>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

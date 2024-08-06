import cx from 'classnames'
import styles from './main.module.css'

export const Contact = () => {

  return (
    <section className={styles.contactWrapper} data-parent='contact' id='contact'>
      <h1 className='page-title'>contact</h1>
      <div className='content-container'>
        <div className={styles.twoUpGrid}>
          <div className={styles.imageWrapper}>
            <img src='/illustrated-me-contact.png' alt='illustrated picture of me with phone & laptop' />
          </div>
          <div className={styles.contactContentWrapper}>
            <div className={ cx(styles.contactItems, styles.row) }>
              <a href='mailto:michelle@michellewritescode.com' className={styles.contactIcon}>
                <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='16px' viewBox='0 0 20 16'>
                  <g>
                    <path className={styles.bgFill} fill='#a560fb' id='vector' d='M1.5,14.9L2,14l0,0L1.5,14.9z M1.1,14.5l-0.9,0.5l0,0L1.1,14.5z M18.9,14.5L18,14l0,0L18.9,14.5z
                      M18.5,14.9l0.5,0.9L18.5,14.9z M18.9,1.5L18,2l0,0L18.9,1.5z M18.5,1.1l0.5-0.9l0,0L18.5,1.1z M1.1,1.5L0.2,1.1l0,0L1.1,1.5z
                      M1.5,1.1L1.1,0.2l0,0L1.5,1.1z M10.6,8.5l0.6,0.8l0,0L10.6,8.5z M9.4,8.5L8.7,9.3l0,0L9.4,8.5z M18,2.6v10.8h2V2.6H18z M17.4,14
                      H2.6v2h14.8V14z M2,13.4V2.6H0v10.8H2z M2.6,2h14.8V0H2.6V2z M2.6,14c-0.3,0-0.5,0-0.6,0c-0.1,0-0.1,0,0,0l-0.9,1.8
                      C1.4,15.9,1.6,16,1.9,16c0.2,0,0.5,0,0.7,0V14z M0,13.4c0,0.3,0,0.5,0,0.7c0,0.2,0.1,0.5,0.2,0.8L2,14c0,0.1,0,0.1,0,0
                      c0-0.1,0-0.3,0-0.6H0z M2,14L2,14l-1.8,0.9c0.2,0.4,0.5,0.7,0.9,0.9L2,14z M18,13.4c0,0.3,0,0.5,0,0.6c0,0.1,0,0.1,0,0l1.8,0.9
                      c0.1-0.3,0.2-0.5,0.2-0.8c0-0.2,0-0.5,0-0.7H18z M17.4,16c0.3,0,0.5,0,0.7,0c0.2,0,0.5-0.1,0.8-0.2L18,14c0.1,0,0.1,0,0,0
                      c-0.1,0-0.3,0-0.6,0V16z M18,14L18,14l0.9,1.8c0.4-0.2,0.7-0.5,0.9-0.9L18,14z M20,2.6c0-0.3,0-0.5,0-0.7c0-0.2-0.1-0.5-0.2-0.8
                      L18,2c0-0.1,0-0.1,0,0c0,0.1,0,0.3,0,0.6H20z M17.4,2c0.3,0,0.5,0,0.6,0c0.1,0,0.1,0,0,0l0.9-1.8C18.6,0.1,18.4,0,18.1,0
                      c-0.2,0-0.5,0-0.7,0V2z M19.8,1.1c-0.2-0.4-0.5-0.7-0.9-0.9L18,2l0,0L19.8,1.1z M2,2.6C2,2.3,2,2.1,2,2c0-0.1,0-0.1,0,0L0.2,1.1
                      C0.1,1.4,0,1.6,0,1.9c0,0.2,0,0.5,0,0.7H2z M2.6,0C2.3,0,2.1,0,1.9,0C1.6,0,1.4,0.1,1.1,0.2L2,2C1.9,2,1.9,2,2,2c0.1,0,0.3,0,0.6,0
                      V0z M2,2L1.1,0.2C0.7,0.4,0.4,0.7,0.2,1.1L2,2z M18.4,0.9L10,7.7l1.3,1.5l8.4-6.8L18.4,0.9z M10,7.7L1.6,0.9L0.4,2.4l8.4,6.8
                      L10,7.7z M10,7.7L10,7.7L8.7,9.3c0.7,0.6,1.8,0.6,2.5,0L10,7.7z' />
                  </g>
                </svg>
                michelle@michellewritescode.com
              </a>
            </div>
            <div className={ cx(styles.contactItems, styles.row) }>
              <a href='https://github.com/michellelamx' target='_blank' rel='noreferrer' className={styles.contactIcon}>
                <svg width='98' height='96' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 98 96'>
                  <path
                    className={styles.bgFill}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
                    fill='#a560fb'
                  />
                </svg>
                GitHub
              </a>
            </div>
            <div className={ cx(styles.contactItems, styles.row) }>
              <a href='https://linkedin.com/in/michellelamoureaux' target='_blank' rel='noreferrer' className={styles.contactIcon}>
                <svg xmlns='http://www.w3.org/2000/svg' width='2490px' height='2500px' viewBox='0 0 2490 2500'>
                  <g>
                    <path className={styles.bgFill} fill='#a560fb' d='M0,183.4C0,84.9,82.4,5,184,5H2306c101.6,0,184,79.9,184,178.4v2133.3c0,98.5-82.4,178.3-184,178.3H184c-101.6,0-184-79.8-184-178.3V183.4L0,183.4z' />
                    <path fill='#19172b' d='M756.7,2088.8v-1121H384.1v1121H756.7L756.7,2088.8z M570.5,814.8c129.9,0,210.8-86.1,210.8-193.7c-2.4-110-80.9-193.7-208.3-193.7c-127.5,0-210.8,83.7-210.8,193.7c0,107.6,80.8,193.7,205.9,193.7L570.5,814.8L570.5,814.8z M962.9,2088.8h372.6v-626c0-33.5,2.4-67,12.3-90.9c26.9-67,88.2-136.3,191.2-136.3c134.8,0,188.7,102.8,188.7,253.5v599.6h372.6V1446c0-344.3-183.8-504.5-428.9-504.5c-201,0-289.2,112.3-338.3,188.8h2.5V967.8H962.9C967.8,1073,962.9,2088.8,962.9,2088.8 L962.9,2088.8z' />
                  </g>
                </svg>
                LinkedIn
              </a>
            </div>
            <div className={ cx(styles.contactItems, styles.row) }>
              <a href='/michelle-lamoureaux-resume.pdf' download  className={styles.contactIcon}>
                <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    className={styles.bgFill}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 1.75C0 0.7835 0.7835 0 1.75 0H16.25C17.2165 0 18 0.7835 18 1.75V16.25C18 17.2165 17.2165 18 16.25 18H1.75C0.7835 18 0 17.2165 0 16.25V1.75ZM5.75 14C5.33579 14 5 13.6642 5 13.25C5 12.8358 5.33579 12.5 5.75 12.5H12.25C12.6642 12.5 13 12.8358 13 13.25C13 13.6642 12.6642 14 12.25 14H5.75ZM11.7803 8.7803L9.5303 11.0303C9.2374 11.3232 8.7626 11.3232 8.4697 11.0303L6.21967 8.7803C5.92678 8.4874 5.92678 8.0126 6.21967 7.7197C6.51256 7.4268 6.98744 7.4268 7.2803 7.7197L8.25 8.6893V4.75C8.25 4.33579 8.5858 4 9 4C9.4142 4 9.75 4.33579 9.75 4.75V8.6893L10.7197 7.7197C11.0126 7.4268 11.4874 7.4268 11.7803 7.7197C12.0732 8.0126 12.0732 8.4874 11.7803 8.7803Z'
                    fill='#a560fb'
                  />
                </svg>
                Download my resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

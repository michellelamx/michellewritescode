import { Logos } from '@containers/Logos'
import { Link } from 'react-router-dom'
import styles from './main.module.css'


export const Work = () => {

  return (
    <section className={styles.workWrapper} id='work'>
      <h1 className='page-title'>work</h1>
      <div className='content-container wide'>
        <div className={styles.contentLayout}>
          <div className={styles.projectList}>
            <div className={styles.projectItem}>
              <Link
                to='/slang'
                className='large'
              >
                Slang.ai
              </Link>
            </div>
            <div className={styles.projectItem}>
              <Link
                to='/splunk'
              >
                Splunk
              </Link>
            </div>
            <div className={styles.projectItem}>
              <Link
                to='/earthbound-farm'
                className='large'
              >
                Earthbound Farm
              </Link>
            </div>
            <div className={styles.projectItem}>
              <Link
                to='/nyulangone'
                className='large'
              >
                NYU Langone
              </Link>
            </div>
            <div className={styles.projectItem}>
              <Link
                to='/nyulangone-giving'
                className='large'
              >
                NYU Langone Giving
              </Link>
            </div>
          </div>
          <Logos />
        </div>
      </div>
    </section>
  )
}

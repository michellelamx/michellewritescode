import { Logos } from '@containers/Logos'
import styles from './main.module.css'


export const Work = () => {

  return (
    <section className={styles.workWrapper} id='work'>
      <h1 className='page-title'>work</h1>
      <div className='content-container wide'>
        <div className='work-container'>
          
        </div>
        <div className='logo-container'>
          <Logos />
        </div>
      </div>
    </section>
  )
}

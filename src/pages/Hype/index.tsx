import { Slider } from '@components/Slider'
import styles from './main.module.css'


export const Hype = () => {

  return (
    <section className={styles.hypeWrapper} id='hype'>
      <h1 className='page-title'>hype</h1>
      <div className='content-container full-width'>
        <Slider />
      </div>
    </section>
  )
}

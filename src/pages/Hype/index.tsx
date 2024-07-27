import { Slider } from '@components/Slider'
import styles from './main.module.css'


export const Hype = () => {

  return (
    <section className={styles.hypeWrapper} id='hype'>
      <div className='content-container full-width'>
        <h2 className='page-title'>
          <span className='left-bracket'>{`{`}</span>hype<span className='right-bracket'>{`}`}</span>
        </h2>
        <Slider />
      </div>
    </section>
  )
}

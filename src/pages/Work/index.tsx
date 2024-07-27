import styles from './main.module.css'


export const Work = () => {

  return (
    <section className={styles.workWrapper} id='work'>
      <div className='content-container'>
      <h2 className='page-title'><span className='left-bracket'>{`{`}</span>work<span className='right-bracket'>{`}`}</span></h2>
      </div>
    </section>
  )
}

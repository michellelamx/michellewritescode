import styles from './main.module.css'


export const Contact = () => {

  return (
    <section className={styles.contactWrapper} id='contact'>
      <div className='content-container'>
      <h2 className='page-title'><span className='left-bracket'>{`{`}</span>contact<span className='right-bracket'>{`}`}</span></h2>
      </div>
    </section>
  )
}

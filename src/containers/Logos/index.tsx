import { logos } from '@data/logos'
import styles from './main.module.css'

export const Logos = () => {


  return (
    <div className={styles.logosWrapper}>
      {logos.map((logo) => (
        <div className={styles.logoBox} key={logo.id}>
          <img
            src={logo.path}
            alt={logo.alt}
            className={styles.companyLogo}
          />
        </div>
      ))}
    </div>
  )
}

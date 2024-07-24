import styles from './main.module.css'

export const Header = () => {

  return (
    <header>
      <nav className={styles.mainNav}>
        <ul>
          <li>// home</li>
          <li>// skillsets</li>
          <li>// work</li>
          <li>// contact</li>
        </ul>
      </nav>
    </header>
  )
}

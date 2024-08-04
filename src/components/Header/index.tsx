import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
import styles from './main.module.css'
import { MouseEvent } from 'react'

export const Header = () => {
  const sections = ['home', 'about', 'hype', 'skills', 'work', 'contact']
  const visibleSection = useIntersectionObserver(sections)

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute('href')?.substring(1)
    if (targetId) {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header>
      <nav className={styles.mainNav}>
        <ul className={styles.headerNav}>
          {sections.map((section) => (
            <li key={section} className={styles.navItem}>
              <a
                href={`#${section}`}
                onClick={handleLinkClick}
                className={visibleSection === section ? 'active' : ''}
              >
                <span>//</span>{section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

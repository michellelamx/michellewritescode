import { skillLogos } from '@data/skills'
import styles from './main.module.css'

export const Skills = () => {

  return (
    <section className={styles.skillsWrapper} id='skills'>
      <h1 className='page-title'>skills</h1>
      <div className='content-container'>
        <div className={styles.skills}>
          {skillLogos.map((skill) => (
            <div className={styles.skill} key={skill.id}>
              <div className={styles.skillImage}>
                <img src={skill.path} alt={skill.alt} />
              </div>
              <div className={styles.skillName}>{skill.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

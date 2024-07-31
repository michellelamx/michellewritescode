import styles from './main.module.css'

export const Skills = () => {
  const skillLogos = [
    {
      id: '1',
      alt: 'React logo',
      path: '/skills-logos/react-logo.svg',
      text: 'React',
    },
    {
      id: '2',
      alt: 'Typescript logo',
      path: '/skills-logos/typescript-logo.svg',
      text: 'Typescript',
    },
    {
      id: '3',
      alt: 'Javascript logo',
      path: '/skills-logos/js-logo.svg',
      text: 'Javascript',
    },
    {
      id: '4',
      alt: 'CSS logo',
      path: '/skills-logos/css-logo.svg',
      text: 'CSS',
    },
    {
      id: '5',
      alt: 'Sass logo',
      path: '/skills-logos/sass-logo.svg',
      text: 'Sass',
    },
    {
      id: '6',
      alt: 'Git logo',
      path: '/skills-logos/git-logo.svg',
      text: 'Git',
    },
    {
      id: '7',
      alt: 'Github logo',
      path: '/skills-logos/github-logo.svg',
      text: 'Github',
    },
    {
      id: '8',
      alt: 'Vite logo',
      path: '/skills-logos/vite-logo.svg',
      text: 'Vite',
    },
    {
      id: '9',
      alt: 'React Router logo',
      path: '/skills-logos/react-router-logo.svg',
      text: 'React Router',
    },
    {
      id: '10',
      alt: 'React Hook Form logo',
      path: '/skills-logos/react-hook-form-logo.svg',
      text: 'React Hook Form',
    },
    {
      id: '11',
      alt: 'Zod logo',
      path: '/skills-logos/zod-logo.svg',
      text: 'Zod',
    },
    {
      id: '12',
      alt: 'shadcn/ui logo',
      path: '/skills-logos/shadcn-ui-logo.svg',
      text: 'shadcn/ui',
    },
    {
      id: '13',
      alt: 'Radix UI logo',
      path: '/skills-logos/radix-ui-logo.svg',
      text: 'Radix UI',
    },
    {
      id: '14',
      alt: 'Next.js logo',
      path: '/skills-logos/nextjs-logo.svg',
      text: 'Next.js',
    },
    {
      id: '15',
      alt: 'GraphQL logo',
      path: '/skills-logos/graphql-logo.svg',
      text: 'GraphQL',
    },
  ]

  return (
    <section className={styles.skillsWrapper} id='skills'>
      <div className='content-container'>
      <h2 className='page-title'><span className='left-bracket'>{`{`}</span>skills<span className='right-bracket'>{`}`}</span></h2>
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
      <div className={styles.postscript}>to name a few...</div>
      </div>
    </section>
  )
}

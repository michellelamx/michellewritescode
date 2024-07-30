import styles from './main.module.css'

export const Logos = () => {
  const logos = [
    {
      id: 1,
      alt: 'Atlantic Records logo',
      path: '/logos/atlantic-records-logo.png'
    },
    {
      id: 2,
      alt: 'Splunk logo',
      path: '/logos/splunk-logo.png',
    },
    {
      id: 3,
      alt: 'Apple logo',
      path: '/logos/apple-logo.png',
    },
    {
      id: 4,
      alt: 'SlangAI logo',
      path: '/logos/slang-logo.png',
    },
    {
      id: 5,
      alt: 'Salesforce logo',
      path: '/logos/salesforce-logo.png',
    },
    {
      id: 6,
      alt: 'Showtime logo',
      path: '/logos/showtime-logo.png',
    },
    {
      id: 7,
      alt: 'Earthbound Farm logo',
      path: '/logos/earthbound-farm-logo.png',
    },
    {
      id: 8,
      alt: 'ServiceNow logo',
      path: '/logos/servicenow-logo.png',
    },
    {
      id: 9,
      alt: 'Audi logo',
      path: '/logos/audi-logo.png',
    },
    {
      id: 10,
      alt: 'Huge, Inc logo',
      path: '/logos/huge-logo.png',
    }
  ]

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

import styles from './main.module.css'


type TestimonialProps = {
  name: string;
  title: string;
  quote: string;
}

type CardProps = {
  testimonial: TestimonialProps
}

export const Card = ({
  testimonial
}: CardProps) => {
  const paragraphs = testimonial.quote.split('\n\n')

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardQuote}>
          {paragraphs.map((paragraph, id) => (
            <p key={id}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.cardAuthor}>
          <div className={styles.cardName}>{testimonial.name}</div>
          <div className={styles.cardTitle}>{testimonial.title}</div>
        </div>
      </div>
    </div>
  )
}

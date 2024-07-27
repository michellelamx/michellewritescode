import { Card } from '@components/Card'
import {
  SliderBase,
  SliderContent,
  SliderItem,
  SliderNext,
  SliderPrevious,
} from '@components/Slider/SliderBase'
import { testimonials } from '@data/testimonials'
import Autoplay from 'embla-carousel-autoplay'
import styles from './main.module.css'


export const Slider = () => {

  return (
    <div className={styles.sliderWrapper}>
      <SliderBase
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <SliderContent className={styles.sliderContent}>
          {testimonials.map((testimonial, id) => (
            <SliderItem className={styles.sliderItem} key={id}>
              <Card
                testimonial={testimonial}
              />
            </SliderItem>
          ))}
        </SliderContent>
        <div className={styles.sliderNavWrapper}>
          <SliderPrevious />
          <SliderNext />
        </div>
      </SliderBase>
    </div>
  )
}

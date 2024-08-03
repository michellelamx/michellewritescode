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
import { useRef } from 'react'


export const Slider = () => {
  const pluginOptions = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  )

  return (
    <div className={styles.sliderWrapper}>
      <SliderBase
        opts={{
          loop: true,
          breakpoints: {
            '(min-width: 984px': { align: 'center' },
            '(max-width: 983px)': { align: 'start' }
          }
        }}
        plugins={[pluginOptions.current]}
        onMouseEnter={pluginOptions.current.stop}
        onMouseLeave={pluginOptions.current.reset}
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

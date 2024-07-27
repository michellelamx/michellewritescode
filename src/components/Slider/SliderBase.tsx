import { Button } from '@components/Slider/button'
import { ChevronLeftIcon } from '@components/Svgs/chevronLeft'
import { ChevronRightIcon } from '@components/Svgs/chevronRight'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import {
  ComponentProps,
  createContext,
  forwardRef,
  KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'


type SliderApi = UseEmblaCarouselType[1]
type UseSliderParameters = Parameters<typeof useEmblaCarousel>
type SliderOptions = UseSliderParameters[0]
type SliderPlugin = UseSliderParameters[1]

type SliderProps = {
  opts?: SliderOptions
  plugins?: SliderPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: SliderApi) => void
}

type SliderContextProps = {
  sliderRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & SliderProps

const SliderContext = createContext<SliderContextProps | null>(null)

function useSlider() {
  const context = useContext(SliderContext)

  if (!context) {
    throw new Error('useSlider must be used within a <Slider />')
  }

  return context
}

const SliderBase = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & SliderProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      children,
      ...props
    },
    ref
  ) => {
    const [sliderRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback((api: SliderApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      return () => {
        api?.off('select', onSelect)
      }
    }, [api, onSelect])

    return (
      <SliderContext.Provider
        value={{
          sliderRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className='slider-container'
          role='region'
          aria-roledescription='slider'
          {...props}
        >
          {children}
        </div>
      </SliderContext.Provider>
    )
  }
)
SliderBase.displayName = 'Slider'

const SliderContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const { sliderRef } = useSlider()

  return (
    <div ref={sliderRef} className='slider-content-wrapper'>
      <div
        ref={ref}
        className='slider-content'
        {...props}
      />
    </div>
  )
})
SliderContent.displayName = 'SliderContent'

const SliderItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {

  return (
    <div
      ref={ref}
      role='group'
      className='slide-item'
      aria-roledescription='slide'
      {...props}
    />
  )
})
SliderItem.displayName = 'SliderItem'

const SliderPrevious = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof Button>
>(({ ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useSlider()

  return (
    <Button
      ref={ref}
      className='slider-nav slider-prev'
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon color='hsl(174, 96%, 44%)' />
    </Button>
  )
})
SliderPrevious.displayName = 'SliderPrevious'

const SliderNext = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof Button>
>(({ ...props }, ref) => {
  const { scrollNext, canScrollNext } = useSlider()

  return (
    <Button
      ref={ref}
      className='slider-nav slider-next'
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon color='hsl(174, 96%, 44%)' />
    </Button>
  )
})
SliderNext.displayName = 'SliderNext'

export {
  type SliderApi,
  SliderBase,
  SliderContent,
  SliderItem,
  SliderPrevious,
  SliderNext,
}

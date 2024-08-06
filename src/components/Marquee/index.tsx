import { cn } from '@/lib/libUtils'
import { HTMLAttributes, ReactNode } from 'react'
import './main.css'


export type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  direction?: 'left' | 'up'
  pauseOnHover?: boolean
  reverse?: boolean
  fade?: boolean
  innerClassName?: string
  numberOfCopies?: number
}

export function Marquee({
  children,
  direction = 'left',
  pauseOnHover = false,
  reverse = false,
  fade = false,
  className,
  innerClassName,
  numberOfCopies = 2,
  ...rest
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group',
        direction === 'left' ? 'flex-row' : 'flex-col',
        className
      )}
      style={{
        maskImage: fade
          ? `linear-gradient(${
              direction === 'left' ? 'to right' : 'to bottom'
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              direction === 'left' ? 'to right' : 'to bottom'
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
      {...rest}
    >
      {Array(numberOfCopies)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'animate-marquee-left',
              pauseOnHover && 'group-hover:[animation-play-state:paused]',
              reverse && 'direction-reverse',
              innerClassName
            )}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

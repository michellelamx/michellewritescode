import { withColor } from '@hocs/withColor'
import { forwardRef, type SVGProps } from 'react';

const ChevronLeftIconBase = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ color, width = 800, height = 800, className }, ref) => {
    return (
      <svg
        ref={ref}
        height={height}
        width={width}
        viewBox='0 0 34.075 34.075'
        fill='none'
        className={className}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill={color}
          d='M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79    L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792    C25.58,33.883,25.075,34.075,24.57,34.075z'
        />
      </svg>
    );
  },
)
ChevronLeftIconBase.displayName = 'ChevronLeftIcon'

export const ChevronLeftIcon = withColor(ChevronLeftIconBase)

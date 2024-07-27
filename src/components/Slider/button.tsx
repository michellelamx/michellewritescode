import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef } from 'react'


export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className='button'
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

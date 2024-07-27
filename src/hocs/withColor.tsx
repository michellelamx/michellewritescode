import { ComponentType, forwardRef, type SVGProps } from 'react'

export type ColorOptions = 'primary' | 'secondary'

export const colorMap: Record<ColorOptions, string> = {
  primary: 'hsl(315, 33%, 98%)',
  secondary: 'hsl()',
}

export interface CustomSVGProps extends SVGProps<SVGSVGElement> {
  color?: ColorOptions | string
}

const isHSL = (color: string): boolean => {
  const hslRegex = /^hsl\(\d{1,3},\s*\d{1,3}%,\s*\d{1,3}%\)$/
  return hslRegex.test(color)
}

export const withColor = (Component: ComponentType<SVGProps<SVGSVGElement>>) => {
  return forwardRef<SVGSVGElement, CustomSVGProps>(
    ({ color = 'primary', ...props }, ref) => {
      const fillColor =
        colorMap[color as ColorOptions] ||
        (isHSL(color) ? color : colorMap.primary)

      return <Component ref={ref} {...props} color={fillColor} />
    },
  )
}

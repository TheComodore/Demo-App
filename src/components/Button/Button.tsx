import clsx from 'clsx'
import React from 'react'

import { baseClasses } from './baseClasses'

import type { ButtonProps } from './types'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'primary', className, variant = 'solid', disabled, ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        className={clsx(
          baseClasses.base,
          baseClasses.variant[variant][color],
          { [baseClasses.disabled]: disabled },
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

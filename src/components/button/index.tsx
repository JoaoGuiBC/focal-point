import type { ButtonHTMLAttributes } from 'react'

import './style.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  visualType?: 'primary' | 'secondary' | 'deletion'
}

export function Button({ children, visualType = 'primary', ...rest }: ButtonProps) {
  return (
    <button
      className="button-component"
      type="button"
      data-style-type={visualType}
      {...rest}
    >
      {children}
    </button>
  )
}

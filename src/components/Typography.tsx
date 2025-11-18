import React from 'react'
import styles from './Typography.module.css'

type TypographyProps = {
  variant?: 'body-small'
  as?: keyof JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
}

export default function Typography({ variant = 'body-small', as: Component = 'p', className = '', children, ...props }: TypographyProps) {
  const variantClass = variant === 'body-small' ? styles.bodySmall : ''
  return (
    // @ts-ignore allow dynamic element
    <Component className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}

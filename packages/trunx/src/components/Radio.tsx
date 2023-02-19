import { FC, InputHTMLAttributes, PropsWithChildren } from 'react'

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Radio: FC<PropsWithChildren<RadioProps>> = ({ children, className, ...props }) => {
  return (
    <label className="radio">
      <input type="radio" {...props} />
      {children}
    </label>
  )
}

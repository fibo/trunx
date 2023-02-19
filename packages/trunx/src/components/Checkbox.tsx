import { FC, InputHTMLAttributes, PropsWithChildren } from 'react'

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({ children, ...props }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" {...props} />
      {children}
    </label>
  )
}

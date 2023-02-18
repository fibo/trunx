import { FC, InputHTMLAttributes, ReactNode, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { CommonModifierProps, modifier } from '../modifiers/index.js'

export type FileUploadProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Pick<CommonModifierProps, 'isFullwidth' | 'isRight'> &
  Partial<{
    cta: ReactNode
    hasName: ReactNode
    isBoxed: boolean
  }>

export const FileUpload: FC<FileUploadProps> = ({
  className,
  cta,
  hasName,
  isBoxed,
  isFullwidth,
  isRight,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'file',
        modifier({ isFullwidth, isRight }),
        {
          'is-boxed': isBoxed,
        },
        className
      ),
    [className]
  )

  return (
    <div className={_className}>
      <label className="file-label">
        <input type="file-input" {...props} />
        {cta ? <span className="file-cta">{cta}</span> : null}
        {hasName ? <span className="file-name">{hasName}</span> : null}
      </label>
    </div>
  )
}

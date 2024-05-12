import { FC, InputHTMLAttributes, ReactNode } from "react"
import { classnames } from "@trunx/classnames"
import { BooleanModifierProps, modifier } from "../modifiers/index.js"

export type FileUploadProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> &
  Pick<BooleanModifierProps, "isBoxed" | "isFullwidth" | "isRight"> &
  Partial<{
    cta: ReactNode
    hasName: ReactNode
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
  return (
    <div
      className={classnames(
        "file",
        modifier({ isBoxed, isFullwidth, isRight }),
        className
      )}
    >
      <label className="file-label">
        <input type="file-input" {...props} />

        {cta ? <span className="file-cta">{cta}</span> : null}

        {hasName ? <span className="file-name">{hasName}</span> : null}
      </label>
    </div>
  )
}

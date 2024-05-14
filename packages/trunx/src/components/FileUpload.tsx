import {FC, InputHTMLAttributes, ReactNode} from "react"
import {BoolClassArg, boolClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type FileUploadProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> &
  Pick<BoolClassArg, "isBoxed" | "isFullwidth" | "isRight"> &
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
}) => (
  <div
    className={classnames(
      "file",
      boolClass({isBoxed, isFullwidth, isRight}),
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

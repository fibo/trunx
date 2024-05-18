import {
  FC,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  OptionHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
  PropsWithChildren,
} from "react"
import {
  FieldClassArg,
  InputClassArg,
  InputFileClassArg,
  SelectClassArg,
  TextareaClassArg,
  fieldClass,
  inputClass,
  inputFileClass,
  selectClass,
  textareaClass,
} from "@trunx/bulma"

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type"
>

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  ...props
}) => (
  <label className="checkbox">
    <input type="checkbox" {...props} />
    {children}
  </label>
)

export type FieldProps = FieldClassArg

export const Field: FC<PropsWithChildren<FieldProps>> = ({
  children,
  ...props
}) => <div className={fieldClass(props)}>{children}</div>

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "size" | "type"
> &
  Partial<{
    type: Exclude<
      InputHTMLAttributes<HTMLInputElement>["type"],
      // Component FileUpload handles `type="file"`
      | "file"
      // Component Radio handles `type="radio"`
      | "radio"
    >
  }> &
  InputClassArg

export const Input: FC<InputProps> = ({
  color,
  isFocused,
  isHovered,
  isRounded,
  isStatic,
  size,
  ...props
}) => (
  <input
    className={inputClass({
      color,
      size,
      isFocused,
      isHovered,
      isRounded,
      isStatic,
    })}
    {...props}
  />
)

export type InputFileProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type"
> &
  Partial<{
    cta: ReactNode
    hasName: ReactNode
  }> &
  InputFileClassArg

export const InputFile: FC<InputFileProps> = ({
  cta,
  hasName,
  isBoxed,
  isFullwidth,
  isRight,
  ...props
}) => (
  <div className={inputFileClass({ isBoxed, isFullwidth, isRight })}>
    <label className="file-label">
      <input type="file" {...props} />
      {cta ? <span className="file-cta">{cta}</span> : null}
      {hasName ? <span className="file-name">{hasName}</span> : null}
    </label>
  </div>
)

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<OptionHTMLAttributes<HTMLOptionElement>>
} & SelectClassArg

export const Select: FC<SelectProps> = ({
  className,
  color,
  isFocused,
  isHovered,
  isLoading,
  options,
  size,
  ...props
}) => (
  <div
    className={selectClass({ color, size, isFocused, isHovered, isLoading })}
  >
    <select {...props}>
      {options.map((props) => (
        <option key={props.value?.toString()} {...props} />
      ))}
    </select>
  </div>
)

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className"
> &
  TextareaClassArg

export const Textarea: FC<TextareaProps> = ({
  children,
  isActive,
  isFocused,
  isHovered,
  isLoading,
  size,
  ...props
}) => (
  <textarea
    className={textareaClass({
      isActive,
      isFocused,
      isHovered,
      isLoading,
      size,
    })}
    {...props}
  >
    {children}
  </textarea>
)

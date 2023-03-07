import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import { BooleanModifierProps, HalfDozen, modifier } from "../modifiers/index.js"

type Heading = HalfDozen

type Size = HalfDozen

type Props = HTMLAttributes<HTMLElement> &
  Pick<BooleanModifierProps, "isSpaced"> &
  Partial<{
    h: Heading
    size: Size
  }>

// Dynamic tag: can be "h1", "h2", "h3" ... default to "p".
const tag = (h: Heading) =>
  h === 1 ? "h1" : h === 2 ? "h2" : h === 3 ? "h3" : h === 4 ? "h4" : h === 5 ? "h5" : h === 6 ? "h6" : "p"

const headingClassNames = (
  type: "title" | "subtitle",
  { className, isSpaced, size }: Pick<Props, "className" | "size" | "isSpaced">
) => classNames(type, size ? `is-${size}` : undefined, modifier({ isSpaced }), className)

export type TitleProps = Props

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  children,
  className,
  h,
  isSpaced,
  size,
  ...props
}) => {
  const Tag = tag(h)

  const _class = headingClassNames("title", { className, isSpaced, size })

  return (
    <Tag className={_class} {...props}>
      {children}
    </Tag>
  )
}

export type SubtitleProps = Props

export const Subtitle: FC<PropsWithChildren<TitleProps>> = ({
  children,
  className,
  h,
  isSpaced,
  size,
  ...props
}) => {
  const Tag = tag(h)

  const _class = headingClassNames("subtitle", { className, isSpaced, size })

  return (
    <Tag className={_class} {...props}>
      {children}
    </Tag>
  )
}

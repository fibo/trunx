import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {HalfDozen} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {
  BooleanModifierProps,
  modifier,
} from "../modifiers/index.js"

type Props = HTMLAttributes<HTMLElement> &
  Pick<BooleanModifierProps, "isSpaced"> &
  Partial<{
    h: HalfDozen
    size: HalfDozen
  }>

// Dynamic tag: can be "h1", "h2", "h3" ... default to "p".
const tag = (h: HalfDozen) =>
  h === 1
    ? "h1"
    : h === 2
      ? "h2"
      : h === 3
        ? "h3"
        : h === 4
          ? "h4"
          : h === 5
            ? "h5"
            : h === 6
              ? "h6"
              : "p"

const _class = (
  type: "title" | "subtitle",
  {className, isSpaced, size}: Pick<Props, "className" | "size" | "isSpaced">
) =>
  classnames(
    type,
    size ? `is-${size}` : undefined,
    modifier({isSpaced}),
    className
  )

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

  return (
    <Tag className={_class("title", {className, isSpaced, size})} {...props}>
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

  return (
    <Tag
      className={_class("subtitle", {className, isSpaced, size})}
      {...props}
    >
      {children}
    </Tag>
  )
}

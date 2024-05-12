import {FC, HTMLAttributes, PropsWithChildren, ReactNode} from "react"
import {MainColor, ShadeColor, colorClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {ColorProp} from "./commonProps.js"
import {
	SizeModifierProp,
	sizeClassName,
} from "../modifiers/index.js"

export type MessageProps = HTMLAttributes<HTMLElement> &
	ColorProp<MainColor | ShadeColor> &
	SizeModifierProp &
	Partial<{
		header: ReactNode
	}>

export const Message: FC<PropsWithChildren<MessageProps>> = ({
	children,
	className,
	color,
	header,
	size,
	...props
}) => {
	return (
		<article
			className={classnames(
				"message",
				colorClass(color),
				sizeClassName(size),
				className
			)}
			{...props}
		>
			{header && <div className="message-header">{header}</div>}

			<div className="message-body">{children}</div>
		</article>
	)
}

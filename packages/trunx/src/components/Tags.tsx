import {
	AnchorHTMLAttributes,
	FC,
	HTMLAttributes,
	PropsWithChildren,
} from "react"
import {MainColor, ShadeColor, colorClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {ColorProp} from "./commonProps.js"
import {
	BooleanModifierProps,
	SizeModifierProp,
	modifier,
	pluralSizeClassName,
	sizeClassName,
} from "../modifiers/index.js"

export type TagProps = HTMLAttributes<HTMLSpanElement> &
	ColorProp<MainColor | ShadeColor> &
	SizeModifierProp<"normal" | "medium" | "large"> &
	Pick<BooleanModifierProps, "isLight" | "isRounded">

export const Tag: FC<PropsWithChildren<TagProps>> = ({
	children,
	className,
	color,
	isLight,
	isRounded,
	size,
}) => {
	return (
		<span
			className={classnames(
				"tag",
				colorClass(color),
				sizeClassName(size),
				modifier({isLight, isRounded}),
				className
			)}
		>
			{children}
		</span>
	)
}

export type TagsProps = HTMLAttributes<HTMLDivElement> &
	SizeModifierProp<"small" | "medium" | "large"> &
	Pick<BooleanModifierProps, "hasAddons">

export const Tags: FC<PropsWithChildren<TagsProps>> = ({
	children,
	className,
	hasAddons,
	size,
	...props
}) => {
	return (
		<div
			className={classnames(
				"tags",
				pluralSizeClassName(size),
				modifier({hasAddons}),
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export type TagDeleteProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const TagDelete: FC<TagDeleteProps> = (props) => (
	<a className="tag is-delete" {...props} />
)

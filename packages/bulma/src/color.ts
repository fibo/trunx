import BulmaClass from "./bulma.js"

export type MainColor =
	| "danger"
	| "link"
	| "info"
	| "primary"
	| "success"
	| "warning"

export type ShadeColor = "black" | "dark" | "light" | "white"

export type OtherColor = "text" | "ghost"

export const colorClass = (
	color: MainColor | ShadeColor | OtherColor | undefined
):
	| Extract<
		BulmaClass,
		| "is-black"
		| "is-danger"
		| "is-danger"
		| "is-dark"
		| "is-ghost"
		| "is-info"
		| "is-light"
		| "is-link"
		| "is-primary"
		| "is-success"
		| "is-text"
		| "is-warning"
		| "is-white"
	>
	| undefined => (color ? `is-${color}` : undefined)

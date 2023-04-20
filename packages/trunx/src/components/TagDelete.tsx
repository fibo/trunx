import { AnchorHTMLAttributes, FC } from "react"

export type TagDeleteProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const TagDelete: FC<TagDeleteProps> = (props) => <a className="tag is-delete" {...props} />

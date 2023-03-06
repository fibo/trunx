import { AnchorHTMLAttributes, FC } from "react"

export type TagDeleteProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const TagDelete: FC<TagDeleteProps> = (props) => {
  return <a className="tag is-delete" {...props} />
}

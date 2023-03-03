"use client"
import { FC, PropsWithChildren } from "react"
import Highlight from "react-highlight"
import { bulma } from "trunx"

export const Code: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={bulma("my-2")}>
      <Highlight>{children}</Highlight>
    </div>
  )
}

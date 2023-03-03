import { ReactNode } from "react"

import "../styles/main.scss"

export const metadata = {
  title: "trunx",
  description: "Super Saiyan React components, son of awesome Bulma",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

"use client"
import { FC, PropsWithChildren, useEffect } from "react"
import { Navbar, NavbarProps } from "trunx"

type NavbarFixedProps = Omit<NavbarProps, "className"> & {
  side: "bottom" | "top"
}

export const NavbarFixed: FC<PropsWithChildren<NavbarFixedProps>> = ({
  side,
  ...props
}) => {
  useEffect(() => {
    if (!side) return
    const otherSide = side === "top" ? "bottom" : "top"

    // Remove other side class, if any.
    document.body.classList.remove(`has-navbar-fixed-${otherSide}`)

    // Add related class to body.
    document.body.classList.add(`has-navbar-fixed-${side}`)

    return () => {
      document.body.classList.remove(`has-navbar-fixed-${side}`)
    }
  }, [side])

  const className = `is-fixed-${side}`

  return <Navbar className={className} {...props} />
}

"use client"
import { FC, PropsWithChildren, useEffect } from "react"
import { classNames } from "../classNames.js"
import { Navbar, NavbarProps } from "./Navbar.js"

type NavbarFixedProps = NavbarProps & {
  side: "bottom" | "top"
}

export const NavbarFixed: FC<PropsWithChildren<NavbarFixedProps>> = ({ className, side, ...props }) => {
  useEffect(() => {
    const otherSide = side === "top" ? "bottom" : "top"

    // Remove other side class, if any.
    document.body.classList.add(`has-navbar-fixed-${otherSide}`)

    // Add related class to body.
    document.body.classList.add(`has-navbar-fixed-${side}`)

    return () => {
      document.body.classList.remove(`has-navbar-fixed-${side}`)
    }
  }, [side])

  const _class = classNames(`is-fixed-${side}`, className)

  return <Navbar className={_class} {...props} />
}

"use client"
import { FC, useCallback, useEffect, useState } from "react"
import {
  NavbarBrand,
  NavbarBurger,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
  NavbarItemAnchor,
} from "trunx"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { route } from "../routes"
import { NavbarFixed } from "./NavbarFixed"

const navContents = [
  {
    label: "Columns",
    items: [
      { label: "Basics", route: route.columns.basics },
      { label: "Sizes", route: route.columns.sizes },
      // {
      //   label: "Responsiveness",
      //   route: route.columns.responsiveness,
      // },
      // { label: "Nesting", route: route.columns.nesting },
    ],
  },
  // {
  //   label: "Layout",
  //   items: [
  //     { label: "Container", route: route.layout.container },
  //     { label: "Level", route: route.layout.level },
  //     { label: "Media Object", route: route.layout.mediaObject },
  //     { label: 'Hero', route: route.layout.hero },
  //     { label: "Footer", route: route.layout.footer },
  //     { label: "Tiles", route: route.layout.tiles },
  //   ],
  // },
  // {
  //   label: "Form",
  //   items: [
  //     { label: "General", route: route.form.general },
  //     { label: "Input", route: route.form.input },
  //     { label: "Textarea", route: route.form.textarea },
  //     { label: "Radio", route: route.form.radio },
  //   ],
  // },
  {
    label: "Elements",
    items: [
      // { label: "Box", route: route.elements.box },
      { label: "Button", route: route.elements.button },
      // { label: "Content", route: route.elements.content },
      // { label: "Delete", route: route.elements.delete },
      // { label: "Tag", route: route.elements.tag },
      { label: "Title", route: route.elements.title },
    ],
  },
  {
    label: "Components",
    items: [
      // { label: "Breadcrumb", route: route.components.breadcrumb },
      // { label: "Navbar", route: route.components.navbar },
      // { label: "Message", route: route.components.message },
      { label: "Modal", route: route.components.modal },
      { label: "Tabs", route: route.components.tabs },
    ],
  },
]

export const Nav: FC = () => {
  const router = useRouter()

  const [isActive, setIsActive] = useState<boolean>(false)
  const [redirect, setRedirect] = useState("")

  useEffect(() => {
    if (redirect !== "") {
      router.push(redirect)
    }
  }, [redirect, router])

  const redirectTo = useCallback(
    (pathname: string) => (): void => {
      setRedirect(pathname)
    },
    []
  )

  // Close menu on outside click.
  useEffect(() => {
    const closeMenu = () => {
      setIsActive(false)
    }
    window.addEventListener("click", closeMenu)
    return () => {
      window.removeEventListener("click", closeMenu)
    }
  }, [])

  return (
    <NavbarFixed color="primary" side="top">
      <NavbarBrand>
        <NavbarItem onClick={redirectTo(route.home)}>
          <Image
            src="/assets/trunx-logotype-white.png"
            alt="me"
            width="100"
            height="100"
          />
        </NavbarItem>
        <NavbarBurger isActive={isActive} setIsActive={setIsActive} />
      </NavbarBrand>

      <NavbarMenu isActive={isActive}>
        <NavbarStart>
          {navContents.map(({ label, items }, i) => (
            <NavbarItem hasDropdown isHoverable key={i}>
              <NavbarLink>{label}</NavbarLink>

              <NavbarDropdown>
                {items.map(({ label, route }, i) => (
                  <NavbarItemAnchor key={i} onClick={redirectTo(route)}>
                    {label}
                  </NavbarItemAnchor>
                ))}
              </NavbarDropdown>
            </NavbarItem>
          ))}
        </NavbarStart>
      </NavbarMenu>
    </NavbarFixed>
  )
}

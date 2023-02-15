import { FC, useCallback, useEffect, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
  NavbarItemAnchor,
} from 'trunx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { route } from '../routes/routes'
import { navContents } from '../helpers/navContent'

export const Nav: FC = () => {
  const router = useRouter()

  const { pathname } = router

  const [expanded, setExpanded] = useState<boolean>(false)
  const [redirect, setRedirect] = useState('')

  useEffect(() => {
    if (redirect !== '') {
      router.push(redirect)
    }
  }, [redirect, router])

  const redirectTo = useCallback(
    (wantedPathname: string) => (): void => {
      if (pathname !== wantedPathname) {
        setRedirect(wantedPathname)
      }
    },
    [pathname]
  )

  const onClickBurger = useCallback(() => {
    setExpanded((expanded) => !expanded)
  }, [])

  return (
    <Navbar color="primary">
      <NavbarBrand>
        <NavbarItem onClick={redirectTo(route.home)}>
          <Image src="/assets/trunx-logotype-white.png" alt="me" width="100" height="100" />
        </NavbarItem>
        <NavbarBurger isActive={expanded} onClick={onClickBurger} />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarStart>
          {navContents.map(({ label, items }, i) => (
            <NavbarItem hasDropdown isHoverable key={i}>
              <NavbarLink>{label}</NavbarLink>

              <NavbarDropdown>
                {items.map(({ label, route }, i) => (
                  <NavbarItemAnchor isActive={route === pathname} key={i} onClick={redirectTo(route)}>
                    {label}
                  </NavbarItemAnchor>
                ))}
              </NavbarDropdown>
            </NavbarItem>
          ))}
        </NavbarStart>
      </NavbarMenu>
    </Navbar>
  )
}

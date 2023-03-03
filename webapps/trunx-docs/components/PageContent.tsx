import { FC, PropsWithChildren, ReactNode } from "react"
import { Container, Content, Hero, bulma } from "trunx"
import { Nav } from "./Nav"

type Props = {
  title: ReactNode
  subtitle: ReactNode
}

export const PageContent: FC<PropsWithChildren<Props>> = ({ children, title, subtitle }) => {
  return (
    <>
      <Nav />

      <main>
        <Hero>
          <Container maxWidth="desktop">
            <h1 className={bulma("title", "is-1")}>{title}</h1>

            <p className={bulma("title", "has-text-grey")}>{subtitle}</p>
          </Container>
        </Hero>

        <Content>{children}</Content>
      </main>
    </>
  )
}

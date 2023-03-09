import { FC, PropsWithChildren, ReactNode } from "react"
import { Container, Content, Hero, Subtitle, Title } from "trunx"
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
            <Title h={1} size={1}>
              {title}
            </Title>

            <Subtitle>{subtitle}</Subtitle>
          </Container>
        </Hero>

        <Content>{children}</Content>
      </main>
    </>
  )
}

import { FC, PropsWithChildren, ReactNode } from "react"
import { Container, Content, Hero, Subtitle, Title } from "trunx"
import { TopNavbar } from "./TopNavbar"

type Props = {
  title: ReactNode
  subtitle: ReactNode
}

export const PageContent: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <>
      <TopNavbar />

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

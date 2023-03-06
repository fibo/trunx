import { FC, PropsWithChildren, ReactNode } from "react"
import { Container, Section, bulma } from "trunx"

type Props = {
  title?: ReactNode
}

export const PageSection: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <Section>
      <Container maxWidth="desktop">
        {title && <p className={bulma("title", "is-4")}>{title}</p>}

        {children}
      </Container>
    </Section>
  )
}

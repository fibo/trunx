import { FC, PropsWithChildren, ReactNode } from "react"
import { Container, Section, Title } from "trunx"

type Props = {
  title?: ReactNode
}

export const PageSection: FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <Section>
      <hr />

      <Container maxWidth="desktop">
        {title && (
          <Title h={2} size={4}>
            {title}
          </Title>
        )}

        {children}
      </Container>
    </Section>
  )
}

import Head from 'next/head'
import { Container, Section, Title } from 'trunx'
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>trunx</title>
        <meta
          name='description'
          content='Super Saiyan React components, son of awesome Bulma'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Nav />
        <Section>
          <Container>
            <Title>Getting started with Trunx</Title>
          </Container>
        </Section>
      </main>
    </>
  )
}

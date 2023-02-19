import Head from 'next/head'
import { Container, Section, bulma } from 'trunx'
import { Nav } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>trunx</title>
        <meta name="description" content="Super Saiyan React components, son of awesome Bulma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Section>
          <Container>
            <h2 className={bulma('title', 'is-2')}>Getting started with Trunx</h2>
          </Container>
        </Section>
      </main>
    </>
  )
}

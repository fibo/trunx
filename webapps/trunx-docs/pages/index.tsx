import Head from 'next/head'
import { Container, Section, bulma } from 'trunx'
import { Nav, MessageComp, Installation, CodeRequirement, WorkExample } from '@/components'

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
            <p>
              <em>Trunx</em> is an open source collection of <em>React</em> components built on top of{' '}
              <em>Bulma</em> CSS framework and implemented with <em>TypeScript</em>. GitHub repo here:{' '}
              <a href="https://github.com/fibo/trunx">github.com/fibo/trunx</a>.
            </p>
            <MessageComp>
              <p>Almost all bulma components are implemented, yet not documented here.</p>
            </MessageComp>

            <Installation />

            <hr />

            <CodeRequirement />

            <hr />

            <WorkExample />
          </Container>
        </Section>
      </main>
    </>
  )
}

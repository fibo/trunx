import Head from 'next/head'
import { Message, bulma } from 'trunx'
import { Nav, Installation, CodeRequirement, PageContent, PageSection, WorkExample } from '@/components'

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

        <PageContent
          title="Getting started with Trunx"
          subtitle={
            <>
              <em>Trunx</em> is an open source collection of <em>React</em> components built on top of{' '}
              <em>Bulma</em>, implemented with <em>TypeScript</em>
            </>
          }
        >
          <PageSection>
            <p className={bulma('block')}>
              GitHub repo here: <a href="https://github.com/fibo/trunx">github.com/fibo/trunx</a>.
            </p>

            <Message color="info">
              <p>Almost all bulma components are implemented, yet not documented here.</p>
            </Message>
          </PageSection>

          <Installation />

          <CodeRequirement />

          <WorkExample />
        </PageContent>
      </main>
    </>
  )
}

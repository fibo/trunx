import { Message, bulma } from "trunx"
import { PageContent, PageSection } from "@/components"
import CodeRequirement from "./CodeRequirement"
import Customization from "./Customization"
import WorkExample from "./WorkExample"

export default function Page() {
  return (
    <PageContent
      title="Getting started with Trunx"
      subtitle={
        <>
          <em>Trunx</em> is an open source collection of <em>React</em> components built on top of{" "}
          <em>Bulma</em>, implemented with <em>TypeScript</em>
        </>
      }
    >
      <PageSection>
        <p className={bulma("block")}>
          GitHub repo here: <a href="https://github.com/fibo/trunx">github.com/fibo/trunx</a>.
        </p>

        <Message color="info">
          <p>Almost all bulma components are implemented, yet not documented here.</p>
        </Message>
      </PageSection>

      <CodeRequirement />

      <WorkExample />

      <Customization />
    </PageContent>
  )
}

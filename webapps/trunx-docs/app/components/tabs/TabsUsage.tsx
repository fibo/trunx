"use client"
import { Tabs, bulma } from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection>
      <p>
        The Trunx <code>Tabs</code> are a straightforward navigation component that come in a variety of
        versions. They only require the following structure:
      </p>

      <ul>
        <li>
          a <code>Tabs</code> container
        </li>

        <li>
          a <code>{"<ul>"}</code> HTML element
        </li>

        <li>
          a list of <code>{"<li>"}</code> HTML element
        </li>

        <li>
          <code>{"<a>"}</code> HTML anchor element for each link
        </li>
      </ul>

      <p>
        The <b>default</b> tabs style has a single border at the bottom.
      </p>

      <Tabs>
        <ul>
          <li className={bulma("is-active")}>
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </Tabs>

      <Code
        snippet={`
      <Tabs>
        <ul>
          <li className={bulma("is-active")}>
            <a>Pictures</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </Tabs>
        `}
      />
    </PageSection>
  )
}

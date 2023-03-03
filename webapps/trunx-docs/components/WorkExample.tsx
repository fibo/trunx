import { Button, Column, Columns, Message } from 'trunx'
// import { Button } from 'trunx/components/Button'
import { Code } from './Code'
import { PageSection } from './PageSection'
import { indent } from '@/helpers/utils/indent'

export const WorkExample = () => {
  return (
    <PageSection title="How it works">
      <p>Trunx React components wrap Bulma CSS classes.</p>

      <Columns>
        <Column isNarrow>
          <p>This button</p>

          <Button color="primary" size="large">
            Push me
          </Button>
        </Column>

        <Column>
          <p>is created by this JSX code</p>

          <Code>
            {indent`
          <Button
            color="primary"
            size="large"
          >Push me</Button>
        `}
          </Code>
        </Column>

        <Column>
          <p>which is equivalent to</p>

          <Code>{indent`
            <button
              className="is-primary is-large"
            >Push me</button>
          `}</Code>
        </Column>
      </Columns>

      <p>
        To import components, the following syntaxes are supported. For example to import the{' '}
        <code>Button</code> component you can use both ES6 or CommonJS syntaxes.
      </p>

      <Code>
        {indent`
          import { Button } from 'trunx'
        `}
      </Code>

      <Code>
        {indent`
          const { Button } = require('trunx')
        `}
      </Code>

      <p>
        It is also possible to import components directly. If you do not have <em>Tree shaking</em> setup in
        your build, the following imports will create lighter bundles <b>out of the box</b>.
      </p>

      <Code>
        {indent`
          import Button from 'trunx/component/Button'
        `}
      </Code>

      <Code>
        {indent`
          const Button = require('trunx/component/Button')
        `}
      </Code>

      <p>
        Note that you can still use Bulma directly if some feature or HTML tag is not implemented by Trunx,
        for example
      </p>

      <Code>
        {indent`
          You are <strong className='has-text-success'>successful</strong>!
        `}
      </Code>

      <Message color="info" header="Features implemented by every component">
        <>
          <p>Notice also that:</p>
          <ul>
            <li>
              Every <em>prop</em> in a Trunx component is <b>optional</b>.
            </li>

            <li>
              Every Trunx component accepts a <code>className</code> prop which will be appended to Bulma
              classes in order to customize the component style.
            </li>
          </ul>
        </>
      </Message>
    </PageSection>
  )
}

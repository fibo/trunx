import { bulma } from 'trunx'
import { Code } from './Code'
import { indent } from '@/helpers/utils/indent'
import { MessageComp } from './MessageComp'

export const WorkExample = () => {
  return (
    <section>
      <h4 className={bulma('title', 'is-4')}>How it works</h4>

      <p>Trunx React components wrap Bulma CSS classes. For instance, this JSX code</p>

      <Code>
        {indent`
          <Button isPrimary isLarge>Push me</Button>
        `}
      </Code>

      <p>is equivalent to</p>

      <Code>
        {indent`
          <button className="is-primary is-large">Push me</button>
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

      <MessageComp header="Features implemented by every component">
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

            <li>
              Every trunx component implements a React <em>Error Boundary</em>: it is possible to customize
              it using the <code>fallbackUI</code> prop. .
            </li>
          </ul>
        </>
      </MessageComp>
    </section>
  )
}

import { bulma } from 'trunx'
import { Code } from './Code'
import { indent } from '@/helpers/utils/indent'

export const CodeRequirement = () => {
  return (
    <section>
      <h4 className={bulma('title', 'is-4')}>HTML code requirements</h4>

      <p>
        Trunx is son of awesome{' '}
        <a href="https://bulma.io/" target="_blank" rel="noreferrer">
          Bulma
        </a>{' '}
        which to work correctly need a <b>responsive</b> webpage.
      </p>

      <p>Use the HTML5 doctype</p>

      <Code>
        {indent`
          <!DOCTYPE html>
        `}
      </Code>

      <p>Add the responsive viewport meta tag</p>

      <Code>
        {indent`
          <meta name="viewport" content="width=device-width, initial-scale=1">
        `}
      </Code>

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
    </section>
  )
}

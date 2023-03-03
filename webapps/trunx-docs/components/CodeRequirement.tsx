import { Code } from './Code'
import { indent } from '@/helpers/utils/indent'
import { PageSection } from './PageSection'

export const CodeRequirement = () => {
  return (
    <PageSection title="HTML code requirements">
      <p>
        Trunx is son of awesome{' '}
        <a href="https://bulma.io/" target="_blank" rel="noreferrer">
          Bulma
        </a>{' '}
        which to work correctly needs a <b>responsive</b> webpage.
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
    </PageSection>
  )
}

import { FC } from 'react';
import { bulma } from 'trunx';
import { Code } from './Code';
import { indent } from '@/helpers/utils/indent';
export const Installation: FC = () => {
  return (
    <section>
      <h4 className={bulma('title', 'is-4')}>Installation</h4>

      <p className={bulma('mt-2')}>
        Use <b>npm</b> to install Trunx package. React is required as a peer dependency.
      </p>

      <Code>
        {indent`
          npm install react
          npm install trunx
        `}
      </Code>

      <p>
        It is also required to add Bulma CSS. You can use the bulma npm package that Trunx includes as a
        dependency. Note that trunx npm package major version will be the same as bulma npm package major
        version. Current bulma npm package version included is{' '}
        {/* <code>v{pkg.dependencies.bulma.substring(1)}</code>. */}
      </p>

      <p className={bulma('mt-4')}>
        The good news is that it is easy to customize your Bulma build to create your own theme.
      </p>

      <p className={bulma('mt-4')}>
        It is also easy to add Bulma via webpack: in your entry JS file or wherever, import Bulma CSS.
      </p>

      <Code>
        {indent`
          import 'bulma/css/bulma.css'
        `}
      </Code>

      <p>
        The good news is that you can use Sass to customize your Bulma build to create your own theme.
        Install Sass using npm.
      </p>

      <Code>
        {indent`
          npm install node-sass --save-dev
        `}
      </Code>

      <p>
        Create, for example, a <em>_colors.scss</em> file like the following
      </p>

      <Code>
        {indent`
          $azure: hsl(180, 100%, 97%);
          $limegreen: hsl(120, 60%, 50%);
          $orangered: hsl(16, 100%, 50%);
          $skyblue: hsl(197, 71%, 73%);
          $steelblue: hsl(207, 44%, 49%);

          $body-background-color: $azure;

          $primary: $skyblue;

          $info: $steelblue;
          $success: $limegreen;
          $warning: hsl(48, 89%, 60%);
          $danger: $orangered;
        `}
      </Code>

      <p>In your entry Sass file import first customizations and then Bulma.</p>

      <Code>
        {indent`
          /* Import custom variables first. */
          @import "colors";
          /* Import all bulma modules. */
          @import "bulma/bulma";
        `}
      </Code>

      <p>
        Note that you can also tweek and import individual Bulma modules, checkout{' '}
        <a href="https://bulma.io/documentation/">official Bulma documentation</a>. See also{' '}
        <a href="https://jenil.github.io/bulmaswatch/">Bulmaswatch</a> for custom Bulma themes.
      </p>
    </section>
  )
}

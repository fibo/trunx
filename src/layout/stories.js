import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Container from './Container'
import Content from '../elements/Content'
import Footer from './Footer'
import Notification from '../elements/Notification'

storiesOf('Layout', module)
  .add('Container', () => (
    <Fragment>
      <Container>
        <Notification>
          This container is <strong>centered</strong> on desktop.
        </Notification>
      </Container>

      <Container isFluid>
        <Notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
        </Notification>
      </Container>

      <Container isWidescreen>
        <Notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
        </Notification>
      </Container>

      <Container isFullhd>
        <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
        </Notification>
      </Container>
    </Fragment>
  ))
  .add('Footer', () => (
    <Footer>
      <Content hasTextCentered>
        <p>
          <strong>Bulma</strong> by <a href='https://jgthms.com'>Jeremy Thomas</a>. The source code is licensed <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content is licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
        </p>
      </Content>
    </Footer>
  ))

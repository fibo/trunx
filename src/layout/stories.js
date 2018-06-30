import React from 'react'

import { storiesOf } from '@storybook/react'

import Content from '../elements/Content'
import Footer from './Footer'

storiesOf('Layout', module)
  .add('Footer', () => (
    <Footer>
      <Content hasTextCentered>
        <p>
          <strong>Bulma</strong> by <a href='https://jgthms.com'>Jeremy Thomas</a>. The source code is licensed <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website content is licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
        </p>
      </Content>
    </Footer>
  ))

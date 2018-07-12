import React from 'react'

import Control from '../component/Control'
import Field from '../component/Field'
import Tag from '../component/Tag'
import Tags from '../component/Tags'

export default class Meta extends React.Component {
  render () {
    const {
      colors,
      sizes
    } = this.props

    return (
      <Field isGrouped isGroupedMultiline>
        <Control>
          <Tags hasAddons>
            <Tag>Colors</Tag>
            {colors ? <Tag isSuccess>Yes</Tag> : <Tag isDanger>No</Tag>}
          </Tags>
        </Control>

        <Control>
          <Tags hasAddons>
            <Tag>Sizes</Tag>
            {sizes ? <Tag isSuccess>Yes</Tag> : <Tag isDanger>No</Tag>}
          </Tags>
        </Control>

        <Control>
          <Tag>Variables</Tag>
        </Control>
      </Field>
    )
  }
}

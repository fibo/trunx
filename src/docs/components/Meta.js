import React from 'react'

import {
  Control,
  Field,
  Tag,
  Tags
} from '../../../index.js'

export default function Meta ({
  colors,
  sizes
}) {
  return (
    <Field
      isGrouped
      isGroupedMultiline
    >
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

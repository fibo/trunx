import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { ClassNamesArg, classNames } from './classNames.js'

describe('classNames', () => {
  it('works', () => {
    const testData: Array<{
      input: (ClassNamesArg<string> | null | undefined)[]
      output: string
    }> = [
      {
        input: [undefined],
        output: '',
      },
      {
        input: [{}],
        output: '',
      },
      {
        input: ['', {}],
        output: '',
      },
      {
        input: ['is-primary'],
        output: 'is-primary',
      },
      {
        input: ['is-primary', 'is-loading'],
        output: 'is-primary is-loading',
      },
      {
        input: [
          {
            'is-primary': true,
          },
        ],
        output: 'is-primary',
      },
      {
        input: [['is-primary']],
        output: 'is-primary',
      },
      {
        input: [['is-loading', 'is-primary', '']],
        output: 'is-loading is-primary',
      },
      {
        input: ['', 'is-primary', ''],
        output: 'is-primary',
      },
    ]

    testData.forEach(({ input, output }) => {
      assert.deepEqual(classNames(...input), output)
    })
  })
})

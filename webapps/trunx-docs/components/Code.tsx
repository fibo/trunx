import { FC, PropsWithChildren } from 'react'
import Highlight from 'react-highlight'
import { bulma } from 'trunx'

export const Code: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={bulma('mt-2', 'mb-2')}>
      <Highlight>{children}</Highlight>
    </div>
  )
}

import { A, Em, P, Strong } from '../../../component/index'

export function LoremIpsum() {
  return (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <Strong>Pellentesque risus mi</Strong>, tempus quis placerat ut, porta nec
      nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
      diam, et dictum <A>felis venenatis</A> efficitur. Aenean ac{' '}
      <Em>eleifend lacus</Em>, in mollis lectus. Donec sodales, arcu et
      sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
      neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </>
  )
}

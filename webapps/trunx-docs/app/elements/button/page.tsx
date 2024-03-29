import { PageContent } from "@/components"
import ButtonColors from "./ButtonColors"
import ButtonDisplays from "./ButtonDisplays"
import ButtonStyles from "./ButtonStyles"

export default function Page() {
  return (
    <PageContent
      title="Button"
      subtitle={
        <>
          The classic <b>button</b>, in different colors, sizes, and states
        </>
      }
    >
      <ButtonColors />

      <ButtonDisplays />

      <ButtonStyles />
    </PageContent>
  )
}

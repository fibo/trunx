import { PageContent } from "@/components"
import TagAddons from "./TagAddons"
import TagCombinations from "./TagCombinations"
import TagColors from "./TagColors"

export default function Page() {
  return (
    <PageContent
      title="Tags"
      subtitle={
        <>
          Small <b>tag labels</b> to insert anywhere
        </>
      }
    >
      <TagColors />

      <TagCombinations />

      <TagAddons />
    </PageContent>
  )
}

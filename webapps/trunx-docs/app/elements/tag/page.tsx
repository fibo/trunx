import { PageContent } from "@/components"
import TagAddons from "./TagAddons"
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

      <TagAddons />
    </PageContent>
  )
}

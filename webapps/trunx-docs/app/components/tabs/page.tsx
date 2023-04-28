import { PageContent } from "@/components"
import TabsUsage from "./TabsUsage"

export default function Page() {
  return (
    <PageContent
      title="Tabs"
      subtitle={
        <>
          Simple responsive horizontal navigation <b>tabs</b>, with different
          styles
        </>
      }
    >
      <TabsUsage />
    </PageContent>
  )
}

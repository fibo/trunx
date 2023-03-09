import { PageContent } from "@/components"
import HeadingTypes from "./HeadingTypes"

export default function Page() {
  return (
    <PageContent
      title="Title and Subtitle"
      subtitle={
        <>
          Simple <b>headings</b> to add depth to your page
        </>
      }
    >
      <HeadingTypes />
    </PageContent>
  )
}

import { PageContent } from "@/components"
import CompleteFormExample from "./CompleteFormExample"

export default function Page() {
  return (
    <PageContent
      title="Form controls"
      subtitle={
        <>
          All generic <b>form controls</b>, designed for consistency
        </>
      }
    >
      <CompleteFormExample />
    </PageContent>
  )
}

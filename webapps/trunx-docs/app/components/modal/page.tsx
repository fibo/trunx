import { PageContent } from "@/components"
import ImageModal from "./ImageModal"

export default function Page() {
  return (
    <PageContent
      title="Modal"
      subtitle={
        <>
          A classic <b>modal</b> overlay, in which you can include any content you want
        </>
      }
    >
      <ImageModal />
    </PageContent>
  )
}

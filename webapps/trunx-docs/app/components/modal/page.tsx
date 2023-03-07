import { PageContent } from "@/components"
import ModalUsage from "./ModalUsage"
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
      <ModalUsage />

      <ImageModal />
    </PageContent>
  )
}

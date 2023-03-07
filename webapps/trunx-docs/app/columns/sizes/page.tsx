"use client"
import { PageContent } from "@/components"
import { ColumnSizes } from "./ColumnSizes"

export default function Page() {
  return (
    <PageContent
      title="Column sizes"
      subtitle={
        <>
          Define the <b>size</b> of each column <b>individually</b>
        </>
      }
    >
      <ColumnSizes />
    </PageContent>
  )
}

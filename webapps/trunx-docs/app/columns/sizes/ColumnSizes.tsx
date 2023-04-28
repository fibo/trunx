import { FC } from "react"
import { Column, ColumnProps, Columns } from "trunx"
import { Code, PageSection } from "@/components"
import { ColumnFill } from "../ColumnFill"

export const ColumnSizes: FC = () => {
  return (
    <PageSection>
      <p>
        If you want to change the <b>size</b> of a single column, you can use
        one of the following prop values:
      </p>

      <ul>
        <li>
          <code>three-quarters</code>
        </li>
        <li>
          <code>two-thirds</code>
        </li>
        <li>
          <code>half</code>
        </li>
        <li>
          <code>one-third</code>
        </li>
        <li>
          <code>one-quarter</code>
        </li>
        <li>
          <code>full</code>
        </li>
      </ul>

      <p>
        The <em>other</em> columns will fill up the <b>remaining</b>space
        automatically.
      </p>

      <p>
        You can also use the following multiples of <code>20%</code> as well:
      </p>

      <ul>
        <li>
          <code>four-fifths</code>
        </li>
        <li>
          <code>three-fifths</code>
        </li>
        <li>
          <code>two-fifths</code>
        </li>
        <li>
          <code>one-fifth</code>
        </li>
      </ul>

      <Columns>
        <Column size="full">
          <ColumnFill text="full" />
        </Column>
      </Columns>

      {[
        "four-fifths",
        "three-quarters",
        "two-thirds",
        "three-fifths",
        "half",
        "two-fifths",
        "one-third",
        "one-quarter",
        "one-fifth",
      ].map((size) => (
        <Columns key={size}>
          <Column size={size as ColumnProps["size"]}>
            <ColumnFill text={size} />
          </Column>
          <Column>
            <ColumnFill />
          </Column>
          <Column>
            <ColumnFill />
          </Column>
        </Columns>
      ))}

      <Code
        snippet={`
            <Columns>
              <Column size="full">full</Column>
            </Columns>

            <Columns>
              <Column size="four-fifths">four-fifths</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>

            <Columns>
              <Column size="three-quarters">three-quarters</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>

            <Columns>
              <Column size="two-thirds">two-thirds</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>

            <Columns>
              <Column size="three-fifths">three-fifths</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>

            <Columns>
              <Column size="half">half</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>

            <Columns>
              <Column size="two-fifths">two-fifths</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>

            <Columns>
              <Column size="one-third">one-third</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>

            <Columns>
              <Column size="one-quarter">one-quarter</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>

            <Columns>
              <Column size="one-fifth">one-fifth</Column>
              <Column>auto</Column>
              <Column>auto</Column>
            </Columns>
          `}
      />
    </PageSection>
  )
}

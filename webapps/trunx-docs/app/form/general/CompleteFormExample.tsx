"use client"
import {
  Button,
  Checkbox,
  Column,
  Columns,
  Control,
  Field,
  Form,
  Help,
  Input,
  Label,
  Radio,
  bulma,
} from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection title="Colors">
      <Columns>
        <Column size="half">
          <Form>
            <Field>
              <Label>Name</Label>

              <Control>
                <Input type="text" placeholder="Text input" />
              </Control>
            </Field>

            <Field>
              <Label>Username</Label>

              <Control>
                <Input
                  color="success"
                  type="text"
                  placeholder="Text input"
                  defaultValue="trunx"
                />

                <Help color="success">This username is available</Help>
              </Control>
            </Field>

            <Field>
              <Label>Email</Label>

              <Control>
                <Input
                  color="danger"
                  type="email"
                  placeholder="Email input"
                  defaultValue="hello@"
                />

                <Help color="danger">This email is invalid</Help>
              </Control>
            </Field>

            <Field>
              <Control>
                <Checkbox>
                  <span className={bulma("pl-2")}>
                    I agree to the <a href="#">terms and conditions</a>
                  </span>
                </Checkbox>
              </Control>
            </Field>

            <Field>
              <Control>
                <Radio name="question">
                  <span className={bulma("px-1")}>Yes</span>
                </Radio>

                <Radio name="question">
                  <span className={bulma("px-1")}>No</span>
                </Radio>
              </Control>
            </Field>

            <Field isGrouped>
              <Control>
                <Button color="link">Submit</Button>
              </Control>

              <Control>
                <Button color="link" isLight>
                  Cancel
                </Button>
              </Control>
            </Field>
          </Form>
        </Column>

        <Column size="half">
          <Code
            snippet={`
          <Form>
            <Field>
              <Label>Name</Label>

              <Control>
                <Input type="text" placeholder="Text input" />
              </Control>
            </Field>

            <Field>
              <Label>Username</Label>

              <Control>
                <Input
                  color="success"
                  type="text"
                  placeholder="Text input"
                  defaultValue="trunx"
                />

                <Help color="success">This username is available</Help>
              </Control>
            </Field>

            <Field>
              <Label>Email</Label>

              <Control>
                <Input
                  color="danger"
                  type="email"
                  placeholder="Email input"
                  defaultValue="hello@"
                />

                <Help color="danger">This email is invalid</Help>
              </Control>
            </Field>

            <Field>
              <Control>
                <Checkbox>
                  <span className={bulma("pl-2")}>
                    I agree to the <a href="#">terms and conditions</a>
                  </span>
                </Checkbox>
              </Control>
            </Field>

            <Field>
              <Control>
                <Radio name="question">
                  <span className={bulma("px-1")}>Yes</span>
                </Radio>

                <Radio name="question">
                  <span className={bulma("px-1")}>No</span>
                </Radio>
              </Control>
            </Field>

            <Field isGrouped>
              <Control>
                <Button color="link">Submit</Button>
              </Control>

              <Control>
                <Button color="link" isLight>
                  Cancel
                </Button>
              </Control>
            </Field>
          </Form>
	  `}
          />
        </Column>
      </Columns>
    </PageSection>
  )
}

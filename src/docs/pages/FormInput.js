import solidIcon from 'fa-svg-icon/solid'
import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Button,
  Checkbox,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Help,
  Icon,
  Input,
  Label,
  Radio,
  Section,
  Subtitle,
  Title
} from '../../../index.js'

class ClickToEditExample extends React.Component {
  constructor (props) {
    super(props)

    this.inputRef = React.createRef()

    this.state = {
      editing: false,
      value: 'Click to edit'
    }

    this.onChange = this.onChange.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
  }

  onChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    const {
      editing,
      value
    } = this.state

    return editing ? (
      <Input
        inputRef={this.inputRef}
        isPrimary
        onBlur={this.toggleEditing}
        onChange={this.onChange}
        value={value}
      />
    ) : (
      <Button
        onClick={this.toggleEditing}
      >
        {value === '' ? '(empty 😔)' : value}
      </Button>
    )
  }

  toggleEditing () {
    const {
      editing
    } = this.state

    this.setState({
      editing: !editing
    }, () => {
      // If switching from read to edit mode, give focus to input.
      if (!editing) {
        this.inputRef.current.focus()
      }
    })
  }
}

export default function FormInput () {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Input
            </Title>

            <Subtitle>
              The <b>text input</b> and its variations
            </Subtitle>

            <hr />

            <p>
              The following <b>modifiers</b> are supported:
            </p>

            <ul>
              <li>
                color
              </li>

              <li>
                size
              </li>

              <li>
                state
              </li>
            </ul>

            <p>
              The following <b>type props</b> are supported:
            </p>

            <ul>
              <li>
                <code>
                  type="text"
                </code>
              </li>

              <li>
                <code>
                  type="password"
                </code>
              </li>

              <li>
                <code>
                  type="email"
                </code>
              </li>

              <li>
                <code>
                  type="tel"
                </code>
              </li>
            </ul>

            <hr />

            <Title is4>
              Colors
            </Title>

            <Columns>
              <Column isHalf>
                <Field>
                  <Control>
                    <Input isPrimary type='text' placeholder='Primary input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isInfo type='text' placeholder='Info input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isSuccess type='text' placeholder='Success input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isWarning type='text' placeholder='Warning input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isDanger type='text' placeholder='Danger input' />
                  </Control>
                </Field>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Field>
                      <Control>
                        <Input isPrimary type='text' placeholder='Primary input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input isInfo type='text' placeholder='Info input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input isSuccess type='text' placeholder='Success input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input isWarning type='text' placeholder='Warning input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input isDanger type='text' placeholder='Danger input' />
                      </Control>
                    </Field>
                  `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              Sizes
            </Title>

            <Columns>
              <Column isHalf>
                <Field>
                  <Control>
                    <Input isSmall type='text' placeholder='Small input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input type='text' placeholder='Normal input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isMedium type='text' placeholder='Medium input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isLarge type='text' placeholder='Large input' />
                  </Control>
                </Field>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Field>
                      <Control>
                        <Input isSmall type='text' placeholder='Small input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input type='text' placeholder='Normal input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input isMedium type='text' placeholder='Medium input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Input isLarge type='text' placeholder='Large input' />
                      </Control>
                    </Field>
                  `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              States
            </Title>

            <Columns>
              <Column isHalf>
                <Input isRounded type='text' placeholder='Small input' />
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                     <Input isRounded type='text' placeholder='Small input' />
                  `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              Styles
            </Title>

            <Subtitle>
              Normal
            </Subtitle>

            <Columns>
              <Column isHalf>
                <Control>
                  <Input type='text' placeholder='Normal input' />
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control>
                      <Input type='text' placeholder='Normal input' />
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <Subtitle>
              Hover
            </Subtitle>

            <Columns>
              <Column isHalf>
                <Control>
                  <Input isHovered type='text' placeholder='Hovered input' />
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control>
                      <Input isHovered type='text' placeholder='Hovered input' />
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <Subtitle>
              Focus
            </Subtitle>

            <Columns>
              <Column isHalf>
                <Control>
                  <Input isFocused type='text' placeholder='Focused input' />
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control>
                      <Input isFocused type='text' placeholder='Focused input' />
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <Subtitle>
              Loading
            </Subtitle>

            <Columns>
              <Column isHalf>
                <Control isLoading>
                  <Input type='text' placeholder='Loading input' />
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control isLoading>
                      <Input type='text' placeholder='Loading input' />
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <Columns>
              <Column isHalf>
                <p>
                  You can resize the loading spinner by addding <code>isSmall</code>, <code>isMedium</code> or <code>isLarge</code> props to the <code>Control</code> container.
                </p>

                <Field>
                  <Control isSmall isLoading>
                    <Input isSmall type='text' placeholder='Small loading input' />
                  </Control>
                </Field>

                <Field>
                  <Control isLoading>
                    <Input type='text' placeholder='Normal loading input' />
                  </Control>
                </Field>

                <Field>
                  <Control isMedium isLoading>
                    <Input isMedium type='text' placeholder='Medium loading input' />
                  </Control>
                </Field>

                <Field>
                  <Control isLarge isLoading>
                    <Input isLarge type='text' placeholder='Large loading input' />
                  </Control>
                </Field>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Field>
                      <Control isSmall isLoading>
                        <Input isSmall type='text' placeholder='Small loading input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control isLoading>
                        <Input type='text' placeholder='Normal loading input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control isMedium isLoading>
                        <Input isMedium type='text' placeholder='Medium loading input' />
                      </Control>
                    </Field>

                    <Field>
                      <Control isLarge isLoading>
                        <Input isLarge type='text' placeholder='Large loading input' />
                      </Control>
                    </Field>
                  `}
                </Code>
              </Column>
            </Columns>

            <Subtitle>
              Disabled
            </Subtitle>

            <Columns>
              <Column isHalf>
                <Control>
                  <Input type='text' placeholder='Disabled input' disabled />
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control>
                      <Input type='text' placeholder='Disabled input' disabled />
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <Subtitle>
              Read only and static inputs
            </Subtitle>

            <p>
              If you use the <code>readOnly</code> prop, the input will look similar to a normal one, but is not editable and has no shadow.
            </p>

            <Columns>
              <Column isHalf>
                <Control>
                  <Input type='text' defaultValue='This text is read only' readOnly />
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control>
                      <Input type='text' defaultValue='This text is read only' readOnly />
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <p>
              If you <em>also</em> add the <code>isStatic</code> prop, it removes the background, border, shadow, and horizontal padding, while maintaining the vertical spacing so you can easily align the input in any context, like a horizontal form.
            </p>

            <Columns>
              <Column isHalf>
                <Field isHorizontal>
                  <Field.Label isNormal>
                    <Label>From</Label>
                  </Field.Label>

                  <Field.Body>
                    <Field>
                      <Control>
                        <Input isStatic type='email' defaultValue='me@example.com' readOnly />
                      </Control>
                    </Field>
                  </Field.Body>
                </Field>

                <Field isHorizontal>
                  <Field.Label isNormal>
                    <Label>To</Label>
                  </Field.Label>

                  <Field.Body>
                    <Field>
                      <Control>
                        <Input type='email' placeholder='Recipient email' />
                      </Control>
                    </Field>
                  </Field.Body>
                </Field>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Field isHorizontal>
                      <Field.Label isNormal>
                        <Label>Form</Label>
                      </Field.Label>

                      <Field.Body>
                        <Field>
                          <Control>
                            <Input isStatic type='email' defaultValue='me@example.com' readOnly />
                          </Control>
                        </Field>
                      </Field.Body>
                    </Field>

                    <Field isHorizontal>
                      <Field.Label isNormal>
                        <Label>To</Label>
                      </Field.Label>

                      <Field.Body>
                        <Field>
                          <Control>
                            <Input type='email' placeholder='Recipient email'/>
                          </Control>
                        </Field>
                      </Field.Body>
                    </Field>
                  `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              With Font Awesome icons
            </Title>

            <p>
              You can use one of 2 <b>modifier</b> props on a <code>Control</code> component:
            </p>

            <ul>
              <li>
                <code>hasIconsLeft</code>
              </li>

              <li>
                and/or <code>hasIconsRight</code>
              </li>
            </ul>

            <p>
              You also need to add a <b>modifier</b> prop on the <code>Icon</code> component:
            </p>

            <ul>
              <li>
                <code>isLeft</code> if <code>hasIconsLeft</code> is used
              </li>

              <li>
                <code>isRight</code> if <code>hasIconsRight</code> is used
              </li>
            </ul>

            <p>
              The size of the <code>Input</code> component will define the size of the icon container.
            </p>

            <Columns>
              <Column isHalf>
                <Field>
                  <Control hasIconsLeft hasIconsRight>
                    <Input type='email' placeholder='Email' />

                    <Icon isLeft>
                      <Icon.Svg icon={solidIcon.envelope} />
                    </Icon>

                    <Icon isRight>
                      <Icon.Svg icon={solidIcon.check} />
                    </Icon>
                  </Control>
                </Field>

                <Field>
                  <Control hasIconsLeft>
                    <Input type='password' placeholder='Password' />

                    <Icon isLeft>
                      <Icon.Svg icon={solidIcon.lock} />
                    </Icon>
                  </Control>
                </Field>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Field>
                      <Control hasIconsLeft hasIconsRight>
                        <Input type='email' placeholder='Email' />

                        <Icon isLeft>
                          <Icon.Svg icon={solidIcon.envelope} />
                        </Icon>

                        <Icon isRight>
                          <Icon.Svg icon={solidIcon.check} />
                        </Icon>
                      </Control>
                    </Field>

                    <Field>
                      <Control hasIconsLeft>
                        <Input type='password' placeholder='Password' />

                        <Icon isLeft>
                          <Icon.Svg icon={solidIcon.lock} />
                        </Icon>
                      </Control>
                    </Field>
                  `}
                </Code>
              </Column>
            </Columns>

            <p>
              If the control contains an icon, Bulma (the mother of Trunx :) will make sure the icon remains <b>centered</b>, no matter the size of the input <em>or</em> of the icon.
            </p>

            <Columns>
              <Column isHalf>
                <Control hasIconsLeft hasIconsRight>
                  <Input isSmall type='email' placeholder='Email' />

                  <Icon isLeft isSmall>
                    <Icon.Svg icon={solidIcon.envelope} />
                  </Icon>

                  <Icon isRight isSmall>
                    <Icon.Svg icon={solidIcon.check} />
                  </Icon>
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control hasIconsLeft hasIconsRight>
                      <Input isSmall type='email' placeholder='Email' />

                      <Icon isLeft isSmall>
                        <Icon.Svg icon={solidIcon.envelope} />
                      </Icon>

                      <Icon isRight isSmall>
                        <Icon.Svg icon={solidIcon.check} />
                      </Icon>
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <Columns>
              <Column isHalf>
                <Control hasIconsLeft hasIconsRight>
                  <Input type='email' placeholder='Email' />

                  <Icon isLeft>
                    <Icon.Svg icon={solidIcon.envelope} />
                  </Icon>

                  <Icon isRight>
                    <Icon.Svg icon={solidIcon.check} />
                  </Icon>
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control hasIconsLeft hasIconsRight>
                      <Input type='email' placeholder='Email' />

                      <Icon isLeft>
                        <Icon.Svg icon={solidIcon.envelope} />
                      </Icon>

                      <Icon isRight>
                        <Icon.Svg icon={solidIcon.check} />
                      </Icon>
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <Columns>
              <Column isHalf>
                <Control hasIconsLeft hasIconsRight>
                  <Input isMedium type='email' placeholder='Email' />

                  <Icon isLeft isMedium>
                    <Icon.Svg icon={solidIcon.envelope} />
                  </Icon>

                  <Icon isRight isMedium>
                    <Icon.Svg icon={solidIcon.check} />
                  </Icon>
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control hasIconsLeft hasIconsRight>
                      <Input isMedium type='email' placeholder='Email' />

                      <Icon isLeft isMedium>
                        <Icon.Svg icon={solidIcon.envelope} />
                      </Icon>

                      <Icon isRight isMedium>
                        <Icon.Svg icon={solidIcon.check} />
                      </Icon>
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <Columns>
              <Column isHalf>
                <Control hasIconsLeft hasIconsRight>
                  <Input isLarge type='email' placeholder='Email' />

                  <Icon isLeft isLarge>
                    <Icon.Svg icon={solidIcon.envelope} />
                  </Icon>

                  <Icon isRight isLarge>
                    <Icon.Svg icon={solidIcon.check} />
                  </Icon>
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control hasIconsLeft hasIconsRight>
                      <Input isLarge type='email' placeholder='Email' />

                      <Icon isLeft isLarge>
                        <Icon.Svg icon={solidIcon.envelope} />
                      </Icon>

                      <Icon isRight isLarge>
                        <Icon.Svg icon={solidIcon.check} />
                      </Icon>
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              Example
            </Title>

            <p>
              The <code>inputRef</code> prop accepts a React ref, created with <code>React.createRef()</code>.
              Other than that it accepts all props you can pass to a React <code>input</code> element.
            </p>

            <ClickToEditExample />

            <Code language='jsx'>
              {indent`
                class ClickToEditExample extends React.Component {
                  constructor (props) {
                    super(props)

                    this.inputRef = React.createRef()

                    this.state = {
                      editing: false,
                      value: 'Click to edit'
                    }

                    this.onChange = this.onChange.bind(this)
                    this.toggleEditing = this.toggleEditing.bind(this)
                  }

                  onChange (event) {
                    this.setState({
                      value: event.target.value
                    })
                  }

                  render () {
                    const {
                      editing,
                      value
                    } = this.state

                    return editing ? (
                      <Input
                        inputRef={this.inputRef}
                        isPrimary
                        onBlur={this.toggleEditing}
                        onChange={this.onChange}
                        value={value}
                      />
                    ) : (
                      <Button
                        onClick={this.toggleEditing}
                      >
                        {value === '' ? '(empty 😔)' : value}
                      </Button>
                    )
                  }

                  toggleEditing () {
                    const {
                      editing
                    } = this.state

                    this.setState({
                      editing: !editing
                    }, () => {
                      // If switching from read to edit mode, give focus to input.
                      if (!editing) {
                        this.inputRef.current.focus()
                      }
                    })
                  }
                }
              `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  )
}

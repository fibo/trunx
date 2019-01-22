import React from 'react'

import { storiesOf } from '@storybook/react'
import solidIcon from 'fa-svg-icon/solid'

import Button from '../component/Button'
import Checkbox from '../component/Checkbox'
import Column from '../component/Column'
import Columns from '../component/Columns'
import Container from '../component/Container'
import Content from '../component/Content'
import Control from '../component/Control'
import Field from '../component/Field'
import Help from '../component/Help'
import Icon from '../component/Icon'
import Input from '../component/Input'
import Label from '../component/Label'
import Radio from '../component/Radio'
import Section from '../component/Section'
import Select from '../component/Select'
import Subtitle from '../component/Subtitle'
import Textarea from '../component/Textarea'
import Title from '../component/Title'

import Code from './Code'
import indent from './indent'
import Meta from './Meta'

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

storiesOf('Form', module)
  .add('General', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Form controls
          </Title>

          <Subtitle>
            All generic <b>form controls</b>, designed for consistency
          </Subtitle>

          <hr />

          <p>
            The following form controls <b>components</b> are supported:
          </p>

          <ul>
            <li>
              <code>Input</code>
            </li>

            <li>
              <code>Label</code>
            </li>

            <li>
              <code>Textarea</code>
            </li>

            <li>
              <code>Select</code>
            </li>

            <li>
              <code>Checkbox</code>
            </li>

            <li>
              <code>Radio</code>
            </li>

            <li>
              <code>Button</code>
            </li>

            <li>
              <code>Help</code>
            </li>
          </ul>

          <p>
            Each of them should be wrapped in a <code>Control</code> component.
  When combining several controls in a <b>form</b>, use the <code>Field</code> component as a <b>container</b>, to keep the spacing consistent.
          </p>

          <Columns>
            <Column isHalf>
              <Field>
                <Label>Name</Label>

                <Control>
                  <Input type='text' placeholder='Text input' />
                </Control>
              </Field>

              <Field>
                <Label>Username</Label>

                <Control>
                  <Input isSuccess type='text' placeholder='Text input' defaultValue='trunx' />

                  <Help isSuccess>
                    This username is available
                  </Help>
                </Control>
              </Field>

              <Field>
                <Label>Email</Label>

                <Control>
                  <Input isDanger type='email' placeholder='Email input' defaultValue='hello@' />

                  <Help isDanger>
                    This email is invalid
                  </Help>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Checkbox>
                    I agree to the <a href='#'>terms and conditions</a>
                  </Checkbox>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Radio name='question'>
                    Yes
                  </Radio>

                  <Radio name='question'>
                    No
                  </Radio>
                </Control>
              </Field>

              <Field isGrouped>
                <Control>
                  <Button isLink>Submit</Button>
                </Control>

                <Control>
                  <Button isText>Cancel</Button>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                   <Label>Name</Label>

                    <Control>
                      <Input type='text' placeholder='Text input' />
                    </Control>
                  </Field>

                  <Field>
                   <Label>Username</Label>

                    <Control>
                      <Input isSuccess type='text' placeholder='Text input' defaultValue='trunx' />

                      <Help isSuccess>
                        This username is available
                      </Help>
                    </Control>
                  </Field>

                  <Field>
                   <Label>Email</Label>

                    <Control>
                      <Input isDanger type='email' placeholder='Email input' defaultValue='hello@' />

                      <Help isDanger>
                        This email is invalid
                      </Help>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Checkbox>
                        I agree to the <a href='#'>terms and conditions</a>
                      </Checkbox>
                    </Control>
                  </Field>

                  <Field isGrouped>
                    <Control>
                      <Button isLink>Submit</Button>
                    </Control>

                    <Control>
                      <Button isText>Cancel</Button>
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>

          <Title is4>
            Form field
          </Title>

          <p>
            The <code>Field</code> component is a simple container for:
          </p>

          <ul>
            <li>
              a text <code>Label</code>
            </li>

            <li>
              a form <code>Control</code>
            </li>

            <li>
              an otional <code>Help</code> text
            </li>
          </ul>

          <Columns>
            <Column isHalf>
              <Field>
                <Label>Label</Label>

                <Control>
                  <Input type='text' placeholder='Text input' />
                </Control>

                <Help>This is a help text</Help>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Label>Label</Label>

                    <Control>
                      <Input type='text' placeholder='Text input' />
                    </Control>

                    <Help>This is a help text</Help>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>

          <p>
            This container allows form fields to be <b>spaced consistently</b>.
          </p>

          <Columns>
            <Column isHalf>
              <Field>
                <Label>Name</Label>

                <Control>
                  <Input type='text' placeholder='e.g Alex Smith' />
                </Control>
              </Field>

              <Field>
                <Label>Email</Label>

                <Control>
                  <Input type='password' placeholder='e.g. alexsmith@gmail.com' />
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Label>Name</Label>

                    <Control>
                      <Input type='text' placeholder='e.g Alex Smith' />
                    </Control>
                  </Field>

                  <Field>
                    <Label>Email</Label>

                    <Control>
                      <Input type='password' placeholder='e.g. alexsmith@gmail.com' />
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Input', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Input
          </Title>

          <Subtitle>
            The <b>text input</b> and its variations
          </Subtitle>

          <Meta colors sizes />

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
                {'type="text"'}
              </code>
            </li>

            <li>
              <code>
                {'type="password"'}
              </code>
            </li>

            <li>
              <code>
                {'type="email"'}
              </code>
            </li>

            <li>
              <code>
                {'type="tel"'}
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
            If you use the <code>readonly</code> prop, the input will look similar to a normal one, but is not editable and has no shadow.
          </p>

          <Columns>
            <Column isHalf>
              <Control>
                <Input type='text' value='This text is read only' readonly />
              </Control>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Control>
                    <Input type='text' value='This text is read only' readonly />
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
                      <Input isStatic type='email' value='me@example.com' readonly />
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
                          <Input isStatic type='email' value='me@example.com' readonly />
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
            Ref
          </Title>

          <p>
            The <code>inputRef</code> prop accepts a React ref, created with <code>React.createRef()</code>.
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
  ))
  .add('Textarea', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Textarea
          </Title>

          <Subtitle>
            The multiline <b>textarea</b> and its variations
          </Subtitle>

          <Meta colors sizes />

          <hr />

          <Columns>
            <Column isHalf>
              <Textarea placeholder='e.g. Hello world' />
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Textarea placeholder='e.g. Hello world' />
                `}
              </Code>
            </Column>
          </Columns>

          <p>
            You can set the height of the textarea using the <code>rows</code> prop which sets the homonym HTML attribute.
          </p>

          <Columns>
            <Column isHalf>
              <Textarea placeholder='10 lines of textarea' rows='10' />
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Textarea placeholder='10 lines of textarea' rows='10' />
                `}
              </Code>
            </Column>
          </Columns>

          <hr />

          <Title is4>
            Colors
          </Title>

          <Columns>
            <Column isHalf>
              <Field>
                <Control>
                  <Textarea isPrimary placeholder='Primary textarea' />
                </Control>
              </Field>

              <Field>
                <Control>
                  <Textarea isInfo placeholder='Info textarea' />
                </Control>
              </Field>

              <Field>
                <Control>
                  <Textarea isSuccess placeholder='Success textarea' />
                </Control>
              </Field>

              <Field>
                <Control>
                  <Textarea isWarning placeholder='Warning textarea' />
                </Control>
              </Field>

              <Field>
                <Control>
                  <Textarea isDanger placeholder='Danger textarea' />
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Control>
                      <Textarea isPrimary placeholder='Primary textarea' />
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Textarea isInfo placeholder='Info textarea' />
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Textarea isSuccess placeholder='Success textarea' />
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Textarea isWarning placeholder='Warning textarea' />
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Textarea isDanger placeholder='Danger textarea' />
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Select', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Select
          </Title>

          <Subtitle>
            The browser built-in <b>select dropdown</b>, styled accordingly
          </Subtitle>

          <Meta colors sizes />

          <hr />

          <p>
            The following modifiers are supported:
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

          <Columns>
            <Column isHalf>
              <Select>
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                `}
              </Code>
            </Column>
          </Columns>

          <hr />

          <Title is4>
            Multiple select
          </Title>

          <Columns>
            <Column isHalf>
              <p>
                You can style a <b>multiple select</b> dropdown, by using the <code>isMultiple</code> prop.
              </p>

              <Select isMultiple size='8'>
                <option value='Argentina'>Argentina</option>
                <option value='Bolivia'>Bolivia</option>
                <option value='Brazil'>Brazil</option>
                <option value='Chile'>Chile</option>
                <option value='Colombia'>Colombia</option>
                <option value='Ecuador'>Ecuador</option>
                <option value='Guyana'>Guyana</option>
                <option value='Paraguay'>Paraguay</option>
                <option value='Peru'>Peru</option>
                <option value='Suriname'>Suriname</option>
                <option value='Uruguay'>Uruguay</option>
                <option value='Venezuela'>Venezuela</option>
              </Select>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Select isMultiple size="8">
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Venezuela">Venezuela</option>
                  </Select>
                `}
              </Code>
            </Column>
          </Columns>

          <hr />

          <Title is4>
            Colors
          </Title>

          <Columns>
            <Column isHalf>
              <Field>
                <Control>
                  <Select isPrimary>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Select isInfo>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Select isSuccess>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Select isWarning>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Select isDanger>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Control>
                      <Select isPrimary>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Select isInfo>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Select isSuccess>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Select isWarning>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Select isDanger>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>

          <hr />

          <Title is4>
            Styles
          </Title>

          <Columns>
            <Column isHalf>
              <Field>
                <Control>
                  <Select isRounded>
                    <option>Rounded dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Control>
                      <Select isRounded>
                        <option>Rounded dropdown</option>
                        <option>With options</option>
                      </Select>
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
                  <Select isSmall>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Select isMedium>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Select isLarge>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Control>
                      <Select isSmall>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Select isMedium>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Select isLarge>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
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

          <Subtitle>Normal</Subtitle>

          <Columns>
            <Column isHalf>
              <Field>
                <Control>
                  <Select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Control>
                      <Select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>

          <Subtitle>Hover</Subtitle>

          <Columns>
            <Column isHalf>
              <Field>
                <Control>
                  <Select isHovered>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Control>
                      <Select isHovered>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>

          <Subtitle>Focus</Subtitle>

          <Columns>
            <Column isHalf>
              <Field>
                <Control>
                  <Select isFocused>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Control>
                      <Select isFocused>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>

          <Subtitle>Loading</Subtitle>

          <Columns>
            <Column isHalf>
              <Field>
                <Control>
                  <Select isLoading>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </Select>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field>
                    <Control>
                      <Select isLoading>
                        <option>Select dropdown</option>
                        <option>With options</option>
                      </Select>
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Checkbox', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Checkbox
          </Title>

          <Subtitle>
            The 2-state <b>checkbox</b> in its native format
          </Subtitle>

          <Meta />

          <hr />

          <p>
            The <code>Checkbox</code> component is a simple wrapper around the <code>{'<input type="checkbox">'}</code> HTML element. It is intentionally not styled, to preserve cross-browser compatibility and the user experience.
          </p>

          <Columns>
            <Column isHalf>
              <Checkbox>Remember me</Checkbox>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Checkbox>Remember me</Checkbox>
                `}
              </Code>
            </Column>
          </Columns>

          <p>
            You can add <b>links</b> to your checkbox, or even <b>disable</b> it.
          </p>

          <Columns>
            <Column isHalf>
              <Checkbox>
                I agree to the <a href='#'>terms and conditions</a>
              </Checkbox>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Checkbox>
                    I agree to the <a href='#'>terms and conditions</a>
                  </Checkbox>
                `}
              </Code>
            </Column>
          </Columns>

          <Columns>
            <Column isHalf>
              <Checkbox disabled>Save my preferences</Checkbox>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Checkbox disabled>Save my preferences</Checkbox>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  /*
  .add('Radio', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Radio
          </Title>

          <Subtitle>
            The mutually exclusive <b>radio buttons</b>in their native format
          </Subtitle>

          <Meta />

          <hr />

          <Columns>
            <Column isHalf>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  code
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('File upload', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            File
          </Title>

          <Subtitle>
            A custom <b>file upload</b> input, without JavaScript
          </Subtitle>

          <Meta colors sizes />

          <hr />

          <Columns>
            <Column isHalf>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  code
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  */

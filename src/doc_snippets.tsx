//////////////////////////////////////////////////////////////////////
//
// This file contains all snippets used in trunx documentation.
// It is not included in the dist/ folder but it is checked by `npm test`.
//
//////////////////////////////////////////////////////////////////////

import { FC, PropsWithChildren, ButtonHTMLAttributes } from "react"
import type { Bulma } from "./index.js"
import {
  A,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Buttons,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  Cell,
  Checkbox,
  Container,
  Content,
  Control,
  Delete,
  Div,
  Field,
  FieldBody,
  FieldHorizontal,
  FieldLabel,
  FileUpload,
  FileIcon,
  FileLabel,
  FixedGrid,
  Footer,
  Grid,
  Hero,
  HeroBody,
  Icon,
  IconText,
  Image,
  Input,
  Label,
  Media,
  MediaContent,
  MediaLeft,
  MediaRight,
  Message,
  Modal,
  ModalCard,
  ModalClose,
  ModalContent,
  NavbarEnd,
  NavbarMenu,
  NavbarStart,
  Notification,
  P,
  Progress,
  Section,
  Select,
  SkeletonLines,
  Subtitle,
  Span,
  Tab,
  Tabs,
  Tag,
  Tags,
  Textarea,
  Title,
  classnames,
} from "./index.js"

// Snippets in README.md
//////////////////////////////////////////////////////////////////////

export const MyComponent: FC<{ isSuccess: boolean }> = ({ isSuccess }) => (
  <Div bulma="box">
    <Span
      bulma={["has-text-weight-semibold", { "has-text-primary": isSuccess }]}
    >
      Lorem ipsum...
    </Span>
  </Div>
)

type MyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{ isLoading: boolean }>

export const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({
  isLoading,
  children,
  ...props
}) => (
  <button
    className={classnames<Bulma>("button", { "is-loading": isLoading })}
    {...props}
  >
    {children}
  </button>
)

export const OtherReadmeSnippets: FC = () => (
  <>
    <Button color="primary" size="large" isRounded>
      Download
    </Button>

    <Message color="primary">Hello trunx</Message>
  </>
)

// Snippets in components TSDocs.
//////////////////////////////////////////////////////////////////////

export const Snippets: FC = () => (
  <>
    {/* HTML related components */}

    <A href="https://example.com" bulma="is-underlined">
      Website
    </A>

    <Div bulma="block"></Div>

    <Div bulma={{ "skeleton-block": true }}>Lorem ipsum</Div>

    <P bulma="has-text-centered">Lorem ipsum...</P>

    <Span bulma={["has-text-grey", "is-capitalized"]}>hello</Span>

    {/* Bulma related components */}

    <Breadcrumb align="center" aria-label="breadcrumbs">
      <BreadcrumbItem href="https://bulma.io/">Bulma</BreadcrumbItem>
      <BreadcrumbItem isActive>Trunx</BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb separator="dot" size="small"></Breadcrumb>

    <Button color="primary" variant="light" isLoading>
      Login
    </Button>

    <Buttons size="small">
      <Button color="success">Save</Button>
      <Button>Cancel</Button>
    </Buttons>

    <Card>
      <CardHeader>
        <CardHeaderTitle>Title</CardHeaderTitle>
        <CardHeaderIcon>
          <Icon>
            <i className="fas fa-angle-down" aria-hidden="true" />
          </Icon>
        </CardHeaderIcon>
      </CardHeader>
      <CardContent>Lorem ipsum...</CardContent>
      <CardFooter>
        <A bulma="card-footer-item">Save</A>
        <A bulma="card-footer-item">Delete</A>
      </CardFooter>
    </Card>

    <Checkbox disabled>
      <Span bulma="ml-2">Save my preferences</Span>
    </Checkbox>

    <Container isFluid>
      <Notification color="primary">
        This container is <strong>fluid</strong>
      </Notification>
    </Container>

    <Content size="small">
      <h1>Hello World</h1>
      <p>Lorem ipsum...</p>
    </Content>

    <Field>
      <Label>Name</Label>
      <Control>
        <Input placeholder="e.g Alex Smith" />
      </Control>
    </Field>

    <FieldHorizontal>
      <FieldLabel size="normal">
        <Label>From</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Control>
            <Input type="text" placeholder="Name" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input type="email" placeholder="Email" />
          </Control>
        </Field>
      </FieldBody>
    </FieldHorizontal>

    <FileUpload
      color="info"
      cta={
        <>
          <FileIcon>
            <i className="fas fa-upload"></i>
          </FileIcon>
          <FileLabel>Choose a file...</FileLabel>
        </>
      }
      // Any prop accepted by input type="file"
      accept="image/png, image/jpeg"
      name="avatar"
    />

    <FixedGrid hasAutoCount>
      <Cell>cell 1</Cell>
      <Cell>cell 2</Cell>
    </FixedGrid>

    <FixedGrid bulma="has-4-cols">
      <Cell>cell 1</Cell>
      <Cell bulma="is-col-start-3">cell 2</Cell>
      <Cell>cell 3</Cell>
      <Cell>cell 4</Cell>
      <Cell>cell 5</Cell>
      <Cell>cell 6</Cell>
    </FixedGrid>

    <Footer>
      <Content bulma="has-text-centered">
        <p>
          <strong>trunx</strong> by <a href="https://fibo.github.io">fibo</a>.
          The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </Content>
    </Footer>

    <Grid bulma={["is-col-min-4", "is-gap-2"]}>
      <Cell>cell 1</Cell>
      <Cell>cell 2</Cell>
    </Grid>

    <Hero size="small">
      <HeroBody>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
      </HeroBody>
    </Hero>

    <Hero color="success" isHalfheight>
      <HeroBody>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
      </HeroBody>
    </Hero>

    <Icon>
      <i className="fas fa-home"></i>
    </Icon>

    <IconText>
      <Icon bulma="has-text-primary">
        <i className="fas fa-home"></i>
      </Icon>
      <span>Home</span>
    </IconText>

    <Image dimension="128x128">
      <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
    </Image>

    <Image dimension="128x128">
      <img
        className="is-rounded"
        src="https://bulma.io/assets/images/placeholders/256x256.png"
      />
    </Image>

    <Image ratio="16by9">
      <iframe
        className="has-ratio"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/YE7VzlLtp-4"
        allowFullScreen
      />
    </Image>

    <Media>
      <MediaLeft dimension="64x64">
        <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
      </MediaLeft>
      <MediaContent>Content</MediaContent>
      <MediaRight>
        <Delete />
      </MediaRight>
    </Media>

    <Modal noBackground>
      <ModalContent>Content</ModalContent>
      <ModalClose />
    </Modal>

    <Message color="danger" size="large">
      Lorem ipsum...
    </Message>

    <Message
      color="dark"
      header={
        <>
          {" "}
          <p>Header</p> <Delete />{" "}
        </>
      }
    >
      Lorem ipsum...
    </Message>

    <ModalCard
      head="Modal title"
      foot={
        <Buttons>
          <Button>Ok</Button>
        </Buttons>
      }
    >
      Content ...
    </ModalCard>

    <NavbarMenu>
      <NavbarStart>// Navbar items</NavbarStart>
      <NavbarEnd>// Navbar items</NavbarEnd>
    </NavbarMenu>

    <Notification color="info" variant="light">
      <Delete />
      Lorem ipsum...
    </Notification>

    <Progress color="primary" size="small" value="42" max="100">
      42%
    </Progress>

    <Section size="medium">
      <Title tag="h2">Title</Title>
    </Section>

    <SkeletonLines num={5} />

    <Select
      size="large"
      options={[
        { value: "A", label: "Apple" },
        { value: "B", label: "Banana" },
      ]}
    />

    <Subtitle is={3}>Subtitle 3</Subtitle>

    <Tag color="primary" variant="light" size="medium">
      v1.0.0
    </Tag>

    <Tag color="warning" size="medium">
      Hello
      <Delete size="small" />
    </Tag>

    <Tabs>
      <Tab isActive>Pictures</Tab>
      <Tab>Music</Tab>
      <Tab>Videos</Tab>
    </Tabs>

    <Tags size="large">
      <Tag>All</Tag>
      <Tag>Medium</Tag>
      <Tag>Size</Tag>
    </Tags>

    <Tags hasAddons>
      <Tag>package</Tag>
      <Tag color="primary">trunx</Tag>
    </Tags>

    <Tags hasAddons>
      <Tag color="danger">Alex Smith</Tag>
      <a className="tag is-delete" />
    </Tags>

    <Textarea size="small" color="info" />

    <Title tag="h1">Title</Title>
    <Subtitle tag="h2">Subtitle</Subtitle>

    <Title is={1}>Title 1</Title>
    <Title is={2}>Title 2</Title>
    <Title is={3}>Title 3 (default)</Title>
    <Title is={4}>Title 4</Title>
    <Title is={5}>Title 5</Title>
    <Title is={6}>Title 6</Title>

    <Title is={1} isSpaced>
      Title 1
    </Title>

    <Title hasSkeleton>Title</Title>
  </>
)

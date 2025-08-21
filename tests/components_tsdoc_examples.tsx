// This file is generated
import {
  BreadcrumbItem,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  Control,
  Delete,
  DropdownDivider,
  DropdownMenu,
  DropdownTrigger,
  FieldBody,
  FieldLabel,
  FileIcon,
  FileLabel,
  HeroBody,
  Input,
  Label,
  MediaContent,
  MediaLeft,
  MediaRight,
  Menu,
  ModalBackground,
  ModalClose,
  ModalContent,
  NavbarEnd,
  NavbarStart,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  Subtitle,
  Tab,
  A,
  Div,
  P,
  Span,
  Ul,
  Breadcrumb,
  Button,
  Buttons,
  Cell,
  Card,
  Checkbox,
  Container,
  Content,
  Dropdown,
  DropdownItem,
  Field,
  FieldHorizontal,
  FileUpload,
  FixedGrid,
  Footer,
  Grid,
  Hero,
  Icon,
  IconText,
  Image,
  Media,
  Message,
  Modal,
  ModalCard,
  NavbarMenu,
  Notification,
  Pagination,
  Progress,
  Section,
  Select,
  SkeletonLines,
  Table,
  Tabs,
  Tag,
  Tags,
  Textarea,
  Title,
} from "../dist/index.js"
export const testAExample1 = () => (
  <A href="https://example.com" bulma="is-underlined">Website</A>
)
// Block.
export const testDivExample1 = () => (
  <Div bulma="block" />
)
// Skeleton block.
export const testDivExample2 = () => (
  <Div bulma={{ "skeleton-block": true }}>Lorem ipsum</Div>
)
export const testPExample1 = () => (
  <P bulma="has-text-grey">Lorem ipsum...</P>
)
export const testSpanExample1 = () => (
  <Span bulma={["has-text-grey", "is-capitalized"]}>hello</Span>
)
export const testUlExample1 = () => (
  <Menu>
    <Ul bulma="menu-list">
      <li><a>Dashboard</a></li>
      <li><a>Customers</a></li>
    </Ul>
  </Menu>
)
export const testBreadcrumbExample1 = () => (
  <Breadcrumb align="center" aria-label="breadcrumbs">
    <BreadcrumbItem href="https://bulma.io/">Bulma</BreadcrumbItem>
    <BreadcrumbItem isActive>Trunx</BreadcrumbItem>
  </Breadcrumb>
)
// Alternative separator and size.
export const testBreadcrumbExample2 = () => (
  <Breadcrumb separator="dot" size="small">
  <BreadcrumbItem >foo</BreadcrumbItem>
  </Breadcrumb>
)
// A primary button.
export const testButtonExample1 = () => (
  <Button color="primary" variant="light">Save</Button>
)
// A loading button.
export const testButtonExample2 = () => (
  <Button isLoading>Login</Button>
)
// Small buttons.
export const testButtonsExample1 = () => (
  <Buttons size="small">
  <Button color="success">Save</Button>
  <Button>Cancel</Button>
  </Buttons>
)
export const testCellExample1 = () => (
  <FixedGrid bulma="has-4-cols">
    <Cell>cell 1</Cell>
    <Cell bulma="is-col-start-3">cell 2</Cell>
    <Cell>cell 3</Cell>
    <Cell>cell 4</Cell>
    <Cell>cell 5</Cell>
    <Cell>cell 6</Cell>
  </FixedGrid>
)
export const testCardExample1 = () => (
  <Card>
    <CardHeader>
      <CardHeaderTitle>Title</CardHeaderTitle>
      <CardHeaderIcon>
        <Icon>
          <i className="fas fa-angle-down" aria-hidden="true" />
        </Icon>
      </CardHeaderIcon>
    </CardHeader>
    <CardContent>
      Lorem ipsum...
    </CardContent>
    <CardFooter>
      <A bulma="card-footer-item">Save</A>
      <A bulma="card-footer-item">Delete</A>
    </CardFooter>
  </Card>
)
export const testCheckboxExample1 = () => (
  <Checkbox disabled>
    <Span bulma="ml-2">Save my preferences</Span>
  </Checkbox>
)
export const testContainerExample1 = () => (
  <Container isFluid>
    <Notification color="primary">
      This container is <strong>fluid</strong>
    </Notification>
  </Container>
)
export const testContentExample1 = () => (
  <Content size="small">
    <h1>Hello World</h1>
    <p>Lorem ipsum...</p>
  </Content>
)
export const testDropdownExample1 = () => (
  <Dropdown isActive>
    <DropdownTrigger aria-haspopup="true" aria-controls="my-dropdown-menu">
      <span>Dropdown button</span>
      <Icon size="small">
        <i className="fas fa-angle-down" aria-hidden="true" />
      </Icon>
    </DropdownTrigger>
    <DropdownMenu id="my-dropdown-menu" role="menu">
       <DropdownItem href="#">Dropdown item</DropdownItem>
       <DropdownItem href="#">Other Dropdown item</DropdownItem>
       <DropdownItem isActive href="#">Active Dropdown item</DropdownItem>
       <DropdownDivider />
       <DropdownItem href="#">With a divider</DropdownItem>
    </DropdownMenu>
  </Dropdown>
)
// A common dropdown item is an anchor link.
export const testDropdownItemExample1 = () => (
  <DropdownItem isActive href="#">Dropdown item</DropdownItem>
)
// Use a div to insert almost any type of content.
export const testDropdownItemExample2 = () => (
  <Div bulma="dropdown-item">
  <p>You can insert content here.</p>
  </Div>
)
export const testFieldExample1 = () => (
  <Field>
    <Label>Name</Label>
    <Control>
      <Input placeholder="e.g Alex Smith" />
    </Control>
  </Field>
)
export const testFieldHorizontalExample1 = () => (
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
)
export const testFileUploadExample1 = () => (
  <FileUpload
    cta={<>
      <FileIcon><i className="fas fa-upload" /></FileIcon>
      <FileLabel>Choose a file...</FileLabel>
    </>}
    // Any prop accepted by input type="file"
    accept="image/png, image/jpeg"
    name="avatar"
  />
)
export const testFixedGridExample1 = () => (
  <FixedGrid hasAutoCount>
    <Cell>cell 1</Cell>
    <Cell>cell 2</Cell>
  </FixedGrid>
)
export const testFooterExample1 = () => (
  <Footer>
    <Content bulma="has-text-centered">
      <p>
        <strong>trunx</strong> by <a href="https://fibo.github.io">fibo</a>.
        The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
    </Content>
  </Footer>
)
export const testGridExample1 = () => (
  <Grid bulma={["is-col-min-4", "is-gap-2"]}>
    <Cell>cell 1</Cell>
    <Cell>cell 2</Cell>
  </Grid>
)
// A small hero.
export const testHeroExample1 = () => (
  <Hero size="small">
  <HeroBody>
  <Title>Title</Title>
  <Subtitle>Subtitle</Subtitle>
  </HeroBody>
  </Hero>
)
// Half height hero.
export const testHeroExample2 = () => (
  <Hero color="success" isHalfheight>
  <HeroBody>
  <Title>Title</Title>
  <Subtitle>Subtitle</Subtitle>
  </HeroBody>
  </Hero>
)
export const testIconExample1 = () => (
  <Icon>
    <i className="fas fa-home" />
  </Icon>
)
export const testIconTextExample1 = () => (
  <IconText>
    <Icon bulma="has-text-primary">
      <i className="fas fa-home" />
    </Icon>
    <span>Home</span>
  </IconText>
)
// Fixed square images.
export const testImageExample1 = () => (
  <Image dimension="128x128">
  <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
  </Image>
)
// Rounded images.
export const testImageExample2 = () => (
  <Image dimension="128x128">
  <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/256x256.png" />
  </Image>
)
// Arbitrary ratios with any element.
export const testImageExample3 = () => (
  <Image ratio="16by9">
  <iframe
  className="has-ratio"
  width="640"
  height="360"
  src="https://www.youtube.com/embed/YE7VzlLtp-4"
  allowFullScreen
  />
  </Image>
)
export const testMediaExample1 = () => (
  <Media>
    <MediaLeft dimension="64x64">
      <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
    </MediaLeft>
    <MediaContent>
      Content
    </MediaContent>
    <MediaRight>
      <Delete />
    </MediaRight>
  </Media>
)
export const testMessageExample1 = () => (
  <Message color="danger" size="large">Lorem ipsum...</Message>
)
// Optional header can hold a title and a Delete component.
export const testMessageExample2 = () => (
  <Message color="dark"
  header={
  <>
  <p>Header</p>
  <Delete />
  </>
  }
  >Lorem ipsum...</Message>
)
export const testModalExample1 = () => (
  <Modal>
    <ModalBackground />
    <ModalContent>
      Modal content here
    </ModalContent>
    <ModalClose />
  </Modal>
)
export const testModalCardExample1 = () => (
  <ModalCard
    head="Modal title"
    foot={<Buttons><Button>Ok</Button></Buttons>}
  >
    Content ...
  </ModalCard>
)
export const testNavbarMenuExample1 = () => (
  <NavbarMenu>
    <NavbarStart>
      // Navbar items
    </NavbarStart>
    <NavbarEnd>
      // Navbar items
    </NavbarEnd>
  </NavbarMenu>
)
export const testNotificationExample1 = () => (
  <Notification color="info" variant="light">
    <Delete />
    Lorem ipsum...
  </Notification>
)
export const testPaginationExample1 = () => (
  <Pagination>
    <PaginationPrevious>Previous</PaginationPrevious>
    <PaginationNext>Next Page</PaginationNext>
    <PaginationList>
      <PaginationLink href="#" aria-label="Goto page 1">1</PaginationLink>
      <PaginationEllipsis />
      <PaginationLink href="#" aria-label="Goto page 45">45</PaginationLink>
      <PaginationLink href="#" isCurrent aria-current="page" aria-label="Goto page 46">46</PaginationLink>
      <PaginationLink href="#" aria-label="Goto page 47">47</PaginationLink>
    </PaginationList>
  </Pagination>
)
export const testProgressExample1 = () => (
  <Progress color="primary" size="small" value="42" max="100">42%</Progress>
)
export const testSectionExample1 = () => (
  <Section size="medium">
    <Title tag="h2">Title</Title>
  </Section>
)
export const testSelectExample1 = () => (
  <Select
    size="large"
    options={[
      { value: "A", label: "Apple" },
      { value: "B", label: "Banana" },
    ]}
  />
)
export const testSkeletonLinesExample1 = () => (
  <SkeletonLines num={5} />
)
export const testTableExample1 = () => (
  <Table bulma={["is-striped", "is-hoverable"]}>
    <tbody>
      <tr><td>Cell 1</td><td>Cell 2</td></tr>
    </tbody>
  </Table>
)
export const testTabsExample1 = () => (
  <Tabs>
    <Tab isActive>Pictures</Tab>
    <Tab>Music</Tab>
    <Tab>Videos</Tab>
  </Tabs>
)
export const testTagExample1 = () => (
  <Tag color="primary" variant="light">
    v1.0.0
  </Tag>
)
// Append a delete button.
export const testTagExample2 = () => (
  <Tag color="warning" size="medium">
  Hello
  <Delete size="small" />
  </Tag>
)
// Large size tags.
export const testTagsExample1 = () => (
  <Tags size="large">
  <Tag>All</Tag>
  <Tag>Medium</Tag>
  <Tag>Size</Tag>
  </Tags>
)
// Attach tags together.
export const testTagsExample2 = () => (
  <Tags hasAddons>
  <Tag>package</Tag>
  <Tag color="primary">trunx</Tag>
  </Tags>
)
// Attach a text tag with a delete tag together.
export const testTagsExample3 = () => (
  <Tags hasAddons>
  <Tag color="danger">Alex Smith</Tag>
  <A bulma={["tag", "is-delete"]} />
  </Tags>
)
// Small textarea with color.
export const testTextareaExample1 = () => (
  <Textarea size="small" color="info" />
)
// There are two types of heading: Title and Subtitle.
export const testTitleExample1 = () => (
  <>
  <Title tag="h1">Title</Title>
  <Subtitle tag="h2">Subtitle</Subtitle>
  </>
)
// All title sizes.
export const testTitleExample2 = () => (
  <>
  <Title is={1}>Title 1</Title>
  <Title is={2}>Title 2</Title>
  <Title is={3}>Title 3 (default)</Title>
  <Title is={4}>Title 4</Title>
  <Title is={5}>Title 5</Title>
  <Title is={6}>Title 6</Title>
  </>
)
// Maintain the normal spacing between titles and subtitles.
export const testTitleExample3 = () => (
  <>
  <Title is={1} isSpaced>Title 1</Title>
  <Subtitle is={3}>Subtitle 3</Subtitle>
  </>
)
// Title that has skeleton.
export const testTitleExample4 = () => (
  <Title hasSkeleton>Title</Title>
)
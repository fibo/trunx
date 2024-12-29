<img src="https://fibo.github.io/trunx/media/trunx-logotype.png" width="350"/>

> Super Saiyan React components, son of awesome [Bulma]

**ToC**

- [Installation](#installation)
- API:
  - [React components](#react-components)
    - [HTML tag components](#html-tag-components)
    - [Bulma related components](#bulma-related-components)
    - [Components list](#components-list)
    - [Inline documentation](#inline-documentation)
    - [className prop](#classname-prop)
  - [classnames](#classnames)
- [How to](#how-to)
  - [Use Trunx with Vite](#use-trunx-with-vite)
  - [Create a custom component](#create-a-custom-component)
- [Motivation](#motivation)
- [License](#license)

## Installation

With [npm](https://www.npmjs.com/) do

```sh
npm install trunx
```

Of course you also need Bulma (v1) but it is up to you if you want to install it via `bulma` npm package. See [how to install Bulma](https://bulma.io/documentation/start/installation/).

You may also have React installed, minimum version supported is 17 (the Trunx transpiled code uses `react/jsx-runtime`). However it is not listed as a peer dependency, you may also use Trunx without React.

Finally I recommend using TypeScript to get the best _developer experience_ with Trunx.

## API

### React components

Almost all Trunx components have a `bulma` prop that accepts:

- a string
- an array of bulma classes: `["button", "is-primary"]`
- an object which keys are bulma classes, when value is truthy then the class is added: `{ "is-primary": true }`
- an array of any of the previous: `["button", { "is-primary": true }]`

You know, Trunx is a Super Sayan because it is written in TypeScript. The `bulma` prop can be autocompleted and typos can be avoided thanks to type checking.

<img src="https://fibo.github.io/trunx/media/trunks-sword.png" height="400"/>

#### HTML tag components

Some Trunx components render their homomnym HTML tag.

```tsx
import { Div, Span } from "trunx"

export function MyComponent({ isSuccess }: { isSuccess: boolean }) {
  return (
    <Div bulma="box">
      <Span
        bulma={["has-text-weight-semibold", { "has-text-primary": isSuccess }]}
      >
        Lorem ipsum...
      </Span>
    </Div>
  )
}
```

#### Bulma related components

Trunx provides React components that implement a Bulma element or a Bulma component. This means that they usually add a related Bulma class. For example `Button` component renders a button HTML tag with the Bulma `button` class. They may have props related to some Bulma class (.e.g. `color`, `size`). Most of the Bulma related props start with `is`, `has` and the prop name is just the camel-case version of its related Bulma class. For example `isRounded` prop corresponds to `is-rounded` Bulma class.

```tsx
<Button color="primary" size="large" isRounded>
  Download
</Button>
```

You can use the `bulma` prop in case you need to add more Bulma classes that has not a related prop.

```tsx
<Columns isGapless>
  <Column bulma="is-half"></Column>
</Columns>
```

#### Inline documentation

Components are documented inline with TSDocs. You can configure your editor to display documentation and examples.

<img src="https://fibo.github.io/trunx/media/inline-docs.png"/>

Some code snippets use a FontAwesome class, for example `<i className="fas fa-home"></i>`. The icon set is up to you, Trunx do not provide icons.

#### `className` prop

Almost all trunx components support a `className` prop, in case you need to append your custom CSS classes.

#### Components list

<img src="https://fibo.github.io/trunx/media/trunks.png" height="290"/>

HTML tags: `A`, `Div`, `P`, `Span`, `Ul`.

Bulma related:

- `Breadcrumb`, `BreadcrumbItem`
- `Button`, `Buttons`
- `Card`
  - `CardContent`
  - `CardFooter`
  - `CardHeader`
  - `CardHeaderIcon`
  - `CardHeaderTitle`
  - `CardImage`
- `Cell`
- `Checkbox`
- `Column`
- `Columns`
- `Container`
- `Content`
- `Control`
- `Delete`
- `Dropdown`
  - `DropdownDivider`
  - `DropdownItem`
  - `DropdownMenu`
  - `DropdownTrigger`
- `Field`
- `FieldHorizontal`
  - `FieldBody`
  - `FieldLabel`
- `FileUpload`
  - `FileIcon`
  - `FileLabel`
- `FixedGrid`
- `Footer`
- `Grid`
- `Help`
- `Hero`
  - `HeroBody`
  - `HeroFoot`
  - `HeroHead`
- `Icon`, `IconText`
- `Image`
- `Input`
- `Label`
- `Media`
  - `MediaContent`
  - `MediaLeft`
  - `MediaRight`
- `Menu`
  - `MenuLabel`
  - `MenuList`
- `Message`
- `Modal`
  - `ModalBackground`
  - `ModalCard`
  - `ModalClose`
  - `ModalContent`
- `Navbar`
  - `NavbarBrand`
  - `NavbarBurger`
  - `NavbarDivider`
  - `NavbarDropdown`
  - `NavbarDropdownMenu`
  - `NavbarEnd`
  - `NavbarItem`
  - `NavbarLink`
  - `NavbarMenu`
  - `NavbarStart`
- `Notification`
- `Pagination`
  - `PaginationEllipsis`
  - `PaginationLink`
  - `PaginationList`
  - `PaginationNext`
  - `PaginationPrevious`
- `Progress`
- `Radio`
- `Section`
- `SkeletonLines`
- `Select`
- `Table`
- `Tabs`, `Tab`
- `Tags`, `Tag`
- `Textarea`
- `Title`, `Subtitle`

### `classnames`

Trunx package provides a utility for conditionally joining CSS classes together.

Syntax is similar to [classnames npm package](https://www.npmjs.com/package/classnames).

```js
import { classnames } from "trunx"

classnames("foo", "bar") // 'foo bar'
classnames("foo", ["bar"]) // 'foo bar'
classnames({ foo: true }, { bar: false }) // 'foo'
```

It accepts a generic "class names" type.

```ts
type T = "foo" | "bar" // my CSS classes
classnames<T>("foo", "quz") // ERROR: not assignable to type ClassnamesArg<T>[]
```

For example you can use it to compose Bulma classes.

```tsx
import { PropsWithChildren, ButtonHTMLAttributes } from "react"
import { Bulma, classnames } from "trunx"

type MyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{ isLoading: boolean }>

export function MyButton({
  isLoading,
  children,
  ...props
}: PropsWithChildren<MyButtonProps>) {
  return (
    <button
      className={classnames<Bulma>("button", { "is-loading": isLoading })}
      {...props}
    >
      {children}
    </button>
  )
}
```

Notice that you can use Trunx without React! It can be used with any framework as well as with _Web Components_.
The _classnames.js_ is only 299 bytes and can be imported directly with

```js
import classnames from "trunx/classnames"
```

The snippet above will avoid importing the React stuff.

## How to

### Use Trunx with Vite

Assuming you have a [Vite](https://vitejs.dev/) project with React and TypeScript, of course first of all install `trunx` and `bulma`.

Then create a `src/main.scss`, you can import all Bulma to get started.

```scss
@use "bulma/sass";
```

Import it in your entry file, e.g. `src/main.tsx`, with something like `import "./main.scss"` and you are done.

Try it out! Import `trunx` in your `src/App.tsx`:

```tsx
import { Message } from "trunx"
```

Add a `Message` like this in your JSX:

```tsx
<Message color="primary">Hello Trunx</Message>
```

### Create a custom component

Suppose you want to create your custom button that is always rounded and has only `success` and `warning` colors. You may also want to set your custom colors.
To do so, your `src/main.scss` could be something like this:

```scss
@use "bulma/sass" with (
  $success: #28a03c,
  $warning: #f45a50
);
```

Then your button component can import the `ButtonProps` from `trunx` and customize them,
something like the following.

```tsx
import { PropsWithChildren } from "react"
import {
  Button as _Button,
  ButtonProps as _ButtonProps,
  ColorProp,
  MainColor,
} from "trunx"

type ButtonProps = Omit<_ButtonProps, "color" | "isRounded"> &
  ColorProp<Extract<MainColor, "warning" | "success">>

export function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <_Button isRounded {...props}>
      {children}
    </_Button>
  )
}
```

## Motivation

I really like [Bulma] CSS framework and I am also a [Dragon Ball](https://en.wikipedia.org/wiki/Dragon_Ball) fan.
That is why I am creating this component library. I hope you enjoy it!

> Trunks (Japanese: トランクス Hepburn: Torankusu) is a fictional character in the Dragon Ball manga series created by Akira Toriyama.

I remember when I was reading the comics and Trunks arrived from the future. He was really powerful and could defeat Frieza in few seconds. One of the best twists of the entire series, in my opinion.

## License

[MIT](https://fibo.github.io/mit-license)

[bulma]: https://bulma.io "Bulma CSS framework"

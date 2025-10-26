<img src="https://fibo.github.io/trunx/media/trunx-logotype.png" width="350"/>

> Super Saiyan React components, son of awesome [Bulma]

## Table of contents

- [Installation](#installation)
- API:
  - [React components](#react-components)
    - [HTML tag components](#html-tag-components)
    - [Bulma related components](#bulma-related-components)
    - [Inline documentation](#inline-documentation)
    - [className prop](#classname-prop)
  - [classnames](#classnames)
  - [Bulma type](#bulma-type)
- [How to](#how-to)
  - [Use Trunx with Vite](#use-trunx-with-vite)
  - [Bulma customization](#bulma-customization)
  - [Bulma modularity](#bulma-modularity)
  - [Use Trunx with Preact](#use-trunx-with-preact)
- [Motivation](#motivation)
- [License](#license)

## Installation

With [npm](https://www.npmjs.com/) do

```sh
npm install trunx
```

Of course you need Bulma (v1) but it is up to you if you want to install it via `bulma` npm package. See [how to install Bulma](https://bulma.io/documentation/start/installation/).

You may have React installed, minimum version supported is 17 (the Trunx transpiled code uses `react/jsx-runtime`). However it is not listed as a peer dependency, you can [use Trunx with Preact](#use-trunx-with-preact)).

Finally I recommend using TypeScript to get the best _developer experience_ with Trunx.

## API

### React components

Almost all Trunx components have a `bulma` prop that accepts:

- a string
- an array of bulma classes: `["button", "is-primary"]`
- an object which keys are bulma classes, when value is truthy then the class is added: `{ "is-primary": true }`
- an array of any of the previous: `["button", { "is-primary": true }]`

You know, Trunx is a Super Saiyan because it is written in TypeScript. The `bulma` prop can be autocompleted and typos can be avoided thanks to type checking.

<img src="https://fibo.github.io/trunx/media/trunks-sword.png" height="400"/>

#### HTML tag components

Some Trunx components render their homonymous HTML tag.
You can use the `bulma` prop to style them with Bulma classes.

```tsx
import { Div, Span } from "trunx"

export function MyComponent({ isSuccess }: { isSuccess: boolean }) {
  return (
    <Div bulma="box">
      <Span bulma={{ "has-text-primary": isSuccess }}>Lorem ipsum...</Span>
    </Div>
  )
}
```

List of HTML tags related components:

- `A`
- `Div`
- `P`
- `Span`
- `Ul`

#### Bulma related components

Trunx provides React components that implement a Bulma element or a Bulma component. This means that they usually add a related Bulma class.
For example `Button` component renders a button HTML tag with the Bulma `button` class.
They may have props related to some Bulma class (e.g. `color`, `size`).
Most of the Bulma related props start with `is`, `has` and the prop name is just the camel-case version of its related Bulma class.
For example `isRounded` prop corresponds to `is-rounded` Bulma class.

```tsx
<Button color="primary" size="large" isRounded>
  Download
</Button>
```

You can use the `bulma` prop in case you need to add more Bulma classes that are not related to a prop.

```tsx
<Columns isGapless>
  <Column bulma="is-half"></Column>
</Columns>
```

List of Bulma related components:

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

#### Inline documentation

Components are documented inline with TSDocs. You can configure your editor to display documentation and examples.

<img src="https://fibo.github.io/trunx/media/inline-docs.png"/>

Some code snippets use a FontAwesome class, for example `<i className="fas fa-home"></i>`. The icon set is up to you, Trunx does not provide icons.

#### `className` prop

Almost all Trunx components support a `className` prop, in case you need to append your custom CSS classes.

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

Notice that you can use Trunx without React! It can be used with any framework as well as with _Web Components_.
The _classnames.js_ is only 207 bytes and can be imported directly with

```js
import { classnames } from "trunx/classnames"
```

The snippet above will avoid importing the React stuff.

<img src="https://fibo.github.io/trunx/media/trunks.png" height="290"/>

### `Bulma` type

Trunx exports a `Bulma` type which is a literal type containing (almost) all the Bulma classes.

For example, you can use it to make sure a `className` is a bulma class:

```tsx
import { Bulma } from "trunx"

export function SuccessText({ text }: { text: string }) {
  return <span className={"has-text-success" satisfies Bulma}>{text}</span>
}
```

## How to

### Use Trunx with Vite

Assuming you have a [Vite](https://vitejs.dev/) project with React and TypeScript,
first of all install `trunx` and `bulma`.

```sh
npm install trunx bulma
```

You need to install Sass, currently Vite is suggesting to do it with

```sh
npm install sass-embedded --save-dev
```

Then create a `src/main.scss` and import it in your entry file, e.g. `src/main.tsx`, with something like `import "./main.scss"`

In the _main.scss_ file you can import all Bulma to get started.

```scss
@use "bulma/sass";
```

Try it out! Import `trunx` in your `src/App.tsx`:

```tsx
import { Message } from "trunx"
```

Add a `Message` like this in your JSX:

```tsx
<Message color="primary">Hello Trunx</Message>
```

### Bulma customization

Of course you want to customize Bulma variables, it is recommended to use the official Bulma _Customizer_: go on the Bulma website and click on the _Open Customizer_ button (at the bottom right of the page). Once you are done with your settings, click on _Export_ and copy the variables to your `src/main.scss` file, after the `@use "bulma/sass"` line. For example

```scss
@use "bulma/sass";

:root {
  --bulma-primary-h: 200deg;
}
```

### Bulma modularity

In case you want to import only the Bulma modules you use, instead of `@use "bulma/sass"` you can use something like this:

```scss
// Load Bulma's base styles and themes (including the minireset)
@use "bulma/sass/base";
@use "bulma/sass/themes";

// Load other Bulma components
@use "bulma/sass/elements/button";
@use "bulma/sass/elements/message";
// etc.
```

Check out the [Modularity in Bulma](https://bulma.io/documentation/start/modular/) official documentation for details.

### Use Trunx with Preact

Trunx is compatible with [Preact](https://preactjs.com/).

In the Vite example above, just choose the preact template when you create the Vite app.
Everything will work out of the box!

In general you need to [alias React to Preact](https://preactjs.com/guide/v10/getting-started/#aliasing-react-to-preact).
For example if you are using _esbuild_ you can add this to the build options

```js
alias: {
  react: 'preact/compat',
  'react-dom/test-utils': 'preact/test-utils',
  'react-dom': 'preact/compat',
  'react/jsx-runtime': 'preact/jsx-runtime',
},
```

## Motivation

I really like [Bulma] CSS framework and I am a [Dragon Ball](https://en.wikipedia.org/wiki/Dragon_Ball) fan.
That is why I am creating this component library. I hope you enjoy it!

> Trunks (Japanese: トランクス Hepburn: Torankusu) is a fictional character in the Dragon Ball manga series created by Akira Toriyama.

I remember when I was reading the comics and Trunks arrived from the future. He was really powerful and could defeat Frieza in a few seconds. One of the best twists of the entire series, in my opinion.

## License

[MIT](https://fibo.github.io/mit-license)

[bulma]: https://bulma.io "Bulma CSS framework"

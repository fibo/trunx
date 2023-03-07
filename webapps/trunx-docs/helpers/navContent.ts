import { route } from "../routes/routes"

export const navContents = [
  {
    label: "Columns",
    items: [
      { label: "Basics", route: route.columns.basics },
      { label: "Sizes", route: route.columns.sizes },
      // {
      //   label: "Responsiveness",
      //   route: route.columns.responsiveness,
      // },
      // { label: "Nesting", route: route.columns.nesting },
    ],
  },
  // {
  //   label: "Layout",
  //   items: [
  //     { label: "Container", route: route.layout.container },
  //     { label: "Level", route: route.layout.level },
  //     { label: "Media Object", route: route.layout.mediaObject },
  //     { label: 'Hero', route: route.layout.hero },
  //     { label: "Footer", route: route.layout.footer },
  //     { label: "Tiles", route: route.layout.tiles },
  //   ],
  // },
  // {
  //   label: "Form",
  //   items: [
  //     { label: "General", route: route.form.general },
  //     { label: "Input", route: route.form.input },
  //     { label: "Textarea", route: route.form.textarea },
  //     { label: "Radio", route: route.form.radio },
  //   ],
  // },
  {
    label: "Elements",
    items: [
      // { label: "Box", route: route.elements.box },
      { label: "Button", route: route.elements.button },
      // { label: "Content", route: route.elements.content },
      // { label: "Delete", route: route.elements.delete },
      // { label: "Tag", route: route.elements.tag },
      // { label: "Title", route: route.elements.title },
    ],
  },
  {
    label: "Components",
    items: [
      // { label: "Breadcrumb", route: route.components.breadcrumb },
      // { label: "Navbar", route: route.components.navbar },
      // { label: "Message", route: route.components.message },
      { label: "Modal", route: route.components.modal },
    ],
  },
]

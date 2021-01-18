export interface TrunxProps {
  [props: string]: boolean | undefined
}
export declare function camelCaseToKebabCase(inputString: string): string
export declare function trunxPropsToClassnamesObject(props?: TrunxProps): {}
export declare const bulmaClassNames: readonly [
  'box',
  'breadcrumb',
  'button',
  'buttons',
  'card',
  'card-content',
  'card-footer',
  'card-footer-item',
  'card-header',
  'card-header-icon',
  'card-header-title',
  'card-image',
  'checkbox',
  'column',
  'columns',
  'container',
  'content',
  'control',
  'delete',
  'dropdown',
  'dropdown-divider',
  'dropdown-content',
  'dropdown-item',
  'dropdown-menu',
  'dropdown-trigger',
  'field',
  'field-body',
  'field-label',
  'file',
  'file-cta',
  'file-icon',
  'file-input',
  'file-label',
  'file-name',
  'footer',
  'heading',
  'help',
  'hero',
  'hero-body',
  'hero-foot',
  'hero-head',
  'icon',
  'image',
  'input',
  'label',
  'level',
  'level-item',
  'level-left',
  'level-right',
  'media',
  'media-content',
  'media-left',
  'media-right',
  'menu',
  'menu-label',
  'menu-list',
  'message',
  'message-body',
  'message-header',
  'modal',
  'modal-background',
  'modal-content',
  'modal-card',
  'modal-card-body',
  'modal-card-foot',
  'modal-card-head',
  'modal-card-title',
  'modal-close',
  'navbar',
  'navbar-brand',
  'navbar-burger',
  'navbar-divider',
  'navbar-dropdown',
  'navbar-end',
  'navbar-item',
  'navbar-link',
  'navbar-menu',
  'navbar-start',
  'notification',
  'pagination',
  'pagination-ellipsis',
  'pagination-link',
  'pagination-list',
  'pagination-next',
  'pagination-previous',
  'panel',
  'panel-block',
  'panel-heading',
  'panel-icon',
  'panel-tabs',
  'progress',
  'radio',
  'section',
  'select',
  'subtitle',
  'table',
  'table-container',
  'tabs',
  'tag',
  'tags',
  'textarea',
  'title',
  'tile'
]
export declare type BulmaClassName = typeof bulmaClassNames[number]
export declare const bulmaClassName: {
  [key: string]:
    | 'progress'
    | 'message'
    | 'media'
    | 'button'
    | 'footer'
    | 'input'
    | 'label'
    | 'menu'
    | 'section'
    | 'select'
    | 'table'
    | 'textarea'
    | 'title'
    | 'image'
    | 'box'
    | 'breadcrumb'
    | 'buttons'
    | 'card'
    | 'card-content'
    | 'card-footer'
    | 'card-footer-item'
    | 'card-header'
    | 'card-header-icon'
    | 'card-header-title'
    | 'card-image'
    | 'checkbox'
    | 'column'
    | 'columns'
    | 'container'
    | 'content'
    | 'control'
    | 'delete'
    | 'dropdown'
    | 'dropdown-divider'
    | 'dropdown-content'
    | 'dropdown-item'
    | 'dropdown-menu'
    | 'dropdown-trigger'
    | 'field'
    | 'field-body'
    | 'field-label'
    | 'file'
    | 'file-cta'
    | 'file-icon'
    | 'file-input'
    | 'file-label'
    | 'file-name'
    | 'heading'
    | 'help'
    | 'hero'
    | 'hero-body'
    | 'hero-foot'
    | 'hero-head'
    | 'icon'
    | 'level'
    | 'level-item'
    | 'level-left'
    | 'level-right'
    | 'media-content'
    | 'media-left'
    | 'media-right'
    | 'menu-label'
    | 'menu-list'
    | 'message-body'
    | 'message-header'
    | 'modal'
    | 'modal-background'
    | 'modal-content'
    | 'modal-card'
    | 'modal-card-body'
    | 'modal-card-foot'
    | 'modal-card-head'
    | 'modal-card-title'
    | 'modal-close'
    | 'navbar'
    | 'navbar-brand'
    | 'navbar-burger'
    | 'navbar-divider'
    | 'navbar-dropdown'
    | 'navbar-end'
    | 'navbar-item'
    | 'navbar-link'
    | 'navbar-menu'
    | 'navbar-start'
    | 'notification'
    | 'pagination'
    | 'pagination-ellipsis'
    | 'pagination-link'
    | 'pagination-list'
    | 'pagination-next'
    | 'pagination-previous'
    | 'panel'
    | 'panel-block'
    | 'panel-heading'
    | 'panel-icon'
    | 'panel-tabs'
    | 'radio'
    | 'subtitle'
    | 'table-container'
    | 'tabs'
    | 'tag'
    | 'tags'
    | 'tile'
}

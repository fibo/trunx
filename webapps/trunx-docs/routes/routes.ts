type Route = {
    columns: { basics: string, nesting: string, responsiveness: string, sizes: string },
    components: { breadcrumb: string, message: string, modal: string, navbar: string },
    elements: { box: string, button: string, content: string, delete: string, tag: string, title: string },
    form: { general: string, input: string, radio: string, textarea: string },
    home: string,
    layout: { container: string, footer: string, hero: string, level: string, mediaObject: string, section: string, tiles: string },
    modifiers: { colorHelpers: string, syntax: string }
}

export const route: Route = {
    columns: {
        basics: '/columns/basics',
        nesting: '/columns/nesting',
        responsiveness: '/columns/responsiveness',
        sizes: '/columns/sizes',
    },
    components: {
        breadcrumb: '/components/breadcrumb',
        message: '/component/message',
        modal: '/component/modal',
        navbar: '/components/navbar',
    },
    elements: {
        box: '/elements/box',
        button: '/elements/button',
        content: '/elements/content',
        delete: '/elements/delete',
        tag: '/elements/tag',
        title: '/elements/title',
    },
    form: {
        general: '/form/general',
        input: '/form/input',
        radio: '/form/radio',
        textarea: '/form/textarea',
    },
    home: '/',
    layout: {
        container: '/layout/container',
        footer: '/layout/footer',
        hero: '/layout/hero',
        level: '/layout/level',
        mediaObject: '/layout/media-object',
        section: '/layout/section',
        tiles: '/layout/tiles',
    },
    modifiers: {
        colorHelpers: '/modifiers/color-helpers',
        syntax: '/modifiers/syntax',
    },
}

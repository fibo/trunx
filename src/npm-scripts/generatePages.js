import path from 'path'
import { fileURLToPath } from 'url'
import writeFile from 'write-file-utf8'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const homePageFilepath = path.join(__dirname, '..', '..', 'docs', 'index.html')
const pageNotFoundFilepath = path.join(__dirname, '..', '..', 'docs', '404.html')

const content = `<!DOCTYPE>
<html lang="en">
  <head>
    <title>Trunx</title>

    <meta name="author" content="Gianluca Casati">
    <meta name="description" content="Super Saiyan React components, son of awesome Bulma, implemented in TypeScript">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="canonical" href="https://trunx.dev"/>

    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png">

    <link rel="stylesheet" href="/style.css">
  </head>

  <body>
    <div id="root"></div>

    <script src="/bundle.js"></script>
  </body>
</html>
`

async function generatePages () {
  await writeFile(homePageFilepath, content)
  await writeFile(pageNotFoundFilepath, content)
}

generatePages()

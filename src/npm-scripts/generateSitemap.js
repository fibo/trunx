import path from 'path'
import { fileURLToPath } from 'url'
import readFile from 'read-file-utf8'
import writeFile from 'write-file-utf8'

import routes from '../docs/routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const packageJsonFilepath = path.join(__dirname, '..', '..', 'package.json')
const sitemapFilepath = path.join(__dirname, '..', '..', 'docs', 'sitemap.xml')

function urlTagContent ({ baseUrl, routePath }) {
  return [
    '  <url>',
    `    <loc>${baseUrl}${routePath}</loc>`,
    // TODO how to read modified file date? Maybe from git...
    '    <lastmod>2020-01-01T00:00:00+00:00</lastmod>',
    '  </url>'
  ].join('\n')
}

function routePaths ({ routes }) {
  return [routes.home].concat(
    Object.keys(routes).map(level1 => (
      Object.keys(routes[level1]).map(level2 => (
        routes[level1][level2]
      ))
    ))
  ).flat()
}

function sitemapContent ({ baseUrl, routes }) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    routePaths({ routes }).map(routePath => urlTagContent({ baseUrl, routePath })),
    '</urlset>'
  ].join('\n')
}

async function generateSitemap () {
  const { homepage: baseUrl } = await readFile(packageJsonFilepath).then(content => JSON.parse(content))

  await writeFile(sitemapFilepath, sitemapContent({ baseUrl, routes }))
}

generateSitemap()

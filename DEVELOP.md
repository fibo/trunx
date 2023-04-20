# Trunx Development

## Workflow

Install dependencies

```sh
npm install
```

Launch documentation website locally

```sh
npm start
```

## Release

### Publish package

Transpile components, build documentation website

```sh
npm run build
```

After components are built, commit code and then you can release a new version

```sh
cd packages/trunx/
npm version [patch|minor|major]
npm publish
```

Once the package is published on npm, commit new version change in *package-lock.json* and *packages/trunx/package.json* and push.

```sh
cd -
git add .
git commit -m 'bump version'
git push origin main
```

Optionally create a git tag, for instance

```sh
git tag v0.45.1
git push origin v0.45.1
```

## Deploy website

Trunx website is deployed on [Vercel](https://vercel.com/).

SSL is provided by [Let's Encrypt](https://letsencrypt.org/) via the following DNS record:

* type: `CAA`
* value: `0 issue "letsencrypt.org"`


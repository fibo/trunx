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

Transpile components, build documentation website

```sh
npm run build
```

After components are built, commit code and then you can release a new version

```sh
cd packages/trunx/
npm version [patch|minor|major]
```

## Website deploy

Trunx website is deployed on [Vercel](https://vercel.com/).

SSL is provided by [Let's Encrypt](https://letsencrypt.org/) via the following DNS record:

* type: `CAA`
* value: `0 issue "letsencrypt.org"`


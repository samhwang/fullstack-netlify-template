# Fullstack Netlify Template

## Using this template

There are 3 ways that you can adopt this template.

- Click the `Use this template` button on this repo, or click on [this link](https://github.com/samhwang/fullstack-netlify-template/generate).
- Clone this repo, delete the .git folder and re-init the Git tree.
- Use `degit`: `npx degit samhwang/fullstack-netlify-template project-name`

## Batteries included

- Client: based on [`vite-starter-template`](https://github.com/samhwang/vite-starter-template).
  - [Vite](https://vitejs.dev/), [React](https://reactjs.org) and [TypeScript](https://www.typescriptlang.org/) - The core of the client side.
  - [React Router](https://reactrouter.com/) - To handle app client side routing
  - [React Hook Form](https://react-hook-form.com/) - To handle form creation and validation.
- Backend: built with [`trpc-netlify-functions`](https://github.com/samhwang/trpc-netlify-functions)
  - [Netlify Functions](https://www.netlify.com/products/functions/) - Serverless functions offered by Netlify.
  - [Prisma](https://prisma.io) - Next-generation Node.js and TypeScript ORM.
  - [tRPC](https://trpc.io) - End-to-end typesafe APIs made easy.
- Common tools:
  - [Rome](https://https://rome.tools/) for code formatting.
  - [Vitest](https://vitest.dev/) for running unit tests with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
  - [msw](https://mswjs.io/) to fake a service worker request to intercept API calls.

## Quickstart

```shell
cp .env.sample .env
docker compose up -d db
npm install
pnpm run dev
```

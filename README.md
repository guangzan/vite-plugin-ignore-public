# vite-plugin-ignore-public

[![NPM version](https://img.shields.io/npm/v/vite-plugin-ignore-public?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-ignore-public)

Ignore public directories at build time

## Motivation

When developing with the vite development environment, you may need to use assets under public. If the target of the build does not depend on this part of the assets, ignore some of them at build time and do not copy them to the dist directory. vite will duplicate them by default, and there is no way to turn off this behavior yet, use this plugin to fix it.

## Install

```bash
npm i -D vite-plugin-ignore-public
```

Add plugin to your `vite.config.ts`:

```ts
// vite.config.ts
import { IgnorePublicPlugin } from 'vite-plugin-ignore-public'

export default {
  plugins: [
    IgnorePublicPlugin(),
  ]
}
```

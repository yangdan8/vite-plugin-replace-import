# @iamyangdan/vite-plugin-replace-import

---

## Installation

Now this plugin supports both Vite 2.x and 3.x. Just install it:

```bash
npm i -D @iamyangdan/vite-plugin-replace-import
pnpm i -D @iamyangdan/vite-plugin-replace-import
yarn add -D @iamyangdan/vite-plugin-replace-import
```

## Usage

```js
// vite.config.js
import ViteReplaceImport from '@iamyangdan/vite-plugin-replace-import';

export default {
  plugins: [ViteReplaceImport()],
};
```

```js
// vite.config.js
import ViteReplaceImport from '@iamyangdan/vite-plugin-replace-import';

export default {
  plugins: [
    ViteReplaceImport({
      disabled: false,
      queryKey: 'replace',
    }),
  ],
};
```

## License

MIT

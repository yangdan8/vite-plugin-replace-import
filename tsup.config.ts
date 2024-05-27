// tsup.config.ts
import type { Options } from 'tsup';

const config: Options = {
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'es2020',
};

export default config;

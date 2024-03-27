/// <reference types='vitest' />
import { join } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { VitePluginNode } from 'vite-plugin-node';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../node_modules/.vite/app1',

  server: {
    port: 3000,
    host: 'localhost',
  },

  preview: {
    port: 3001,
    host: 'localhost',
  },

  plugins: [
    nxViteTsPaths(),
    checker({
      typescript: { tsconfigPath: join(__dirname, './tsconfig.app.json') },
    }),
    ...VitePluginNode({
      // Nodejs native Request adapter
      // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
      // you can also pass a function if you are using other frameworks, see Custom Adapter section
      adapter: 'nest',
      // tell the plugin where is your project entry
      appPath: './src/main.ts',
      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      exportName: 'viteNodeApp',
      // Optional, default: 'esbuild'
      // The TypeScript compiler you want to use
      // by default this plugin is using vite default ts compiler which is esbuild
      // 'swc' compiler is supported to use as well for frameworks
      // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
      // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
      tsCompiler: 'swc',
      initAppOnBoot: true,
      swcOptions: {
        sourceMaps: true,
        jsc: {
          externalHelpers: true,
        },
      },
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../dist/app1',
    reportCompressedSize: true,
    emptyOutDir: true,
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
      sourceMap: true,
    },
  },

  optimizeDeps: {
    // Vite does not work well with optional dependencies,
    // mark them as ignored for now
    exclude: [
      '@nestjs/microservices',
      '@nestjs/websockets',
      'cache-manager',
      'class-transformer',
      'class-validator',
      'fastify-swagger',
    ],
  },
});

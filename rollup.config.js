import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import html from "@rollup/plugin-html";

import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";

const isDev = true;

export default [
  {
    input: "src/main.ts",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/bundle.js",
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess(),
      }),
      resolve(),

      // A Rollup plugin to convert CommonJS modules to ES6, so they can be
      // included in a Rollup bundle
      commonjs(),

      typescript({
        sourceMap: isDev,
        inlineSources: isDev,
      }),

      // To create index.html in public
      html({
        publicPath: "/",
      }),

      livereload({
        watch: "public/bundle.js",
        delay: 200,
      }),
    ],
  },
];

import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import html from "@rollup/plugin-html";

const isDev = true;

export default [
  {
    input: "src/main.js",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/bundle.js",
    },
    plugins: [
      svelte({}),
      resolve(),

      // A Rollup plugin to convert CommonJS modules to ES6, so they can be
      // included in a Rollup bundle
      commonjs(),

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

import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.tsx",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.es.js", format: "es" },
  ],
  external: ["react", "react-dom"], // Mark react and react-dom as external
  plugins: [postcss({ extract: true }), typescript()],
};
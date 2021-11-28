const sourceMaps = require("rollup-plugin-sourcemaps")
const packageJSON = require("./package.json")
export default {
  input: "dist/index.js",
  output: {
      file: packageJSON.main,
      format: "umd",
      name: "bundle.js",
      sourcemap: true
    }
  ,
  plugins: [
    sourceMaps()
  ]
}

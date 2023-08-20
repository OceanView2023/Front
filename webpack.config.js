const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: "./app.js", // Nombre del archivo principal en la raíz
  output: {
    filename: "bundle.js", // Nombre del archivo de salida
    path: path.resolve(__dirname, "dist"), // Carpeta de salida (crea una carpeta "dist")
  },
  mode: "production",
  plugins: [new NodePolyfillPlugin()],
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      url: require.resolve("url/"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
    },
  },
};

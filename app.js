const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const port = process.env.PORT;

// Servir archivos estáticos desde la carpeta raíz
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

const express = require("express");

const app = express();
const port = 82;

app.get("/", (req, res) => {
  res.send("<h1>Server 2</h1>");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(
    `Servidor escuchando en el puerto ${port}. Ir a http://localhost:${port}`
  );
});

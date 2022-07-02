const express = require("express");
const routes = require("./routes/index.js");
const app = express();
const port = 3001;

//RUTAS DE API
app.get("/", (req, res) => {
  res.send("Hola mi server en espress");
});

routes(app);

app.listen(port, () => {
  console.log("Mi port " + port);
});

const express = require("express");
const routes = require("./routes/index.js");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())

//RUTAS DE API
app.get("/", (req, res) => {
  res.send("Hola mi server en express");
});

routes(app);

app.listen(port, () => {
  console.log("Mi port " + port);
});

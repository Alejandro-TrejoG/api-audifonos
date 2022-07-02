const express = require("express");
const file_products = require("./products");
const file_users = require("./users");
const router = express.Router();

function routerApi(app) {
  app.use("/api/v1", router);
  router.use("/products", file_products);
  router.use("/users", file_users);
}

module.exports = routerApi;
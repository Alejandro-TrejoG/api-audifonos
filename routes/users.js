const express = require("express");
const router = express.Router();
const claseAudifonos = require("../services/audifonos.service");
const usuarios = new claseAudifonos();

router.get("/", async (req, res) => {
  try {
    const usuariosArray = await usuarios.getDataUsers();
    res.status(200).json({
      body: usuariosArray,
    });
  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
    let body = req.body;
    console.log(body);
    await usuarios.registerUser(body);
    res.status(201).json({
      message: "Create Successfully",
    });
});

module.exports = router;

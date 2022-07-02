const express = require("express");
const router = express.Router();
const claseAudifonos = require("../services/audifonos.service");
const audifonos = new claseAudifonos();

router.get("/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const audifonosArray = await audifonos.getDataAudifonos(id)
    res.status(200).json({
        body: audifonosArray
    })
  } catch (error) {
    throw error
  }
});



module.exports = router;

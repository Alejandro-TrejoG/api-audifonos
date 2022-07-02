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

router.post("/", async (req, res)=>{
  try {
    let body = req.body;
    await audifonos.registerAudifonos(body)
    res.status(201).json({
      message: "Create Successfully",
  })
  } catch (error) {
    throw error
  }
})

router.patch("/:id", async (req, res) => {
  const { id } = req.params
  const body = req.body
  console.log(id)
  console.log(body)
  await audifonos.updateAudifonos(id, body)
  res.status(201).json({
      message: "Update successfully"
  })
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  await audifonos.deleteAudifonos(id)
  res.status(200).json({
      message: "Delete Successfull"
  })
})



module.exports = router;

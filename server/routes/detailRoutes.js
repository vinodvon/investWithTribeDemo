const express = require("express");
const router = express.Router();
const detailController = require("../controllers/detailController");

router.get("/", detailController.getDetails);

router.post("/", detailController.saveDetails);

module.exports = router;

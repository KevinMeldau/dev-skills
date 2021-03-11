const express = require("express");
const router = express.Router();

const devskillsCtrl = require("../controllers/devskills");

router.get("/", devskillsCtrl.index);
router.get("/:id", devskillsCtrl.show);

module.exports = router;

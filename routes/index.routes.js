const router = require("express").Router();

router.use("/food", require("./food.routes"));
router.use("/auth", require("./auth.routes"));

module.exports = router;

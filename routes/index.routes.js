const router = require("express").Router();

router.use("/foot", require("./foot.routes"));

module.exports = router;

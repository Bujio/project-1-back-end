const router = require("express").Router();
const Foot = require("../models/Foot.model");

//POST CREATE

router.post("/", async (req, res, next) => {
  try {
    const foot = await Foot.create(req.body);
    return res.status(201).json(foot);
  } catch (err) {
    next(err);
  }
});

//GET LIST
router.get("/", async (req, res, next) => {
  try {
    const footList = await Foot.find();
    return res.status(200).json(footList);
  } catch (err) {
    next(err);
  }
});

//GET FOOT ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const footId = await Foot.findById(id);
    return res.status(200).json(footId);
  } catch (err) {
    next(err);
  }
});

//PUT FOOT UPDATE

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const footUpdate = await Foot.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(footUpdate);
  } catch (err) {
    next(err);
  }
});

//DELETE FOOT

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Foot.findOneAndDelete(id);
    return res.status(200).json({ message: "borrado correctamente" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

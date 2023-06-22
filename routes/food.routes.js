const router = require("express").Router();
const Food = require("../models/Food.model");

//POST CREATE

router.post("/", async (req, res, next) => {
  try {
    const food = await Food.create(req.body);
    return res.status(201).json(food);
  } catch (err) {
    next(err);
  }
});

//GET FOOD LIST
router.get("/", async (req, res, next) => {
  try {
    const foodList = await Food.find();
    return res.status(200).json(foodList);
  } catch (err) {
    next(err);
  }
});

//GET FOOD ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foodId = await Food.findById(id);
    return res.status(200).json(foodId);
  } catch (err) {
    next(err);
  }
});

//PUT FOOD UPDATE

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foodUpdate = await Food.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(foodUpdate);
  } catch (err) {
    next(err);
  }
});

//DELETE FOOD

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Food.findOneAndDelete(id);
    return res.status(200).json({ message: "borrado correctamente" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

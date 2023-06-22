const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Food = new Schema({
  name: String,
  kcal: Number,
});

module.exports = model("Foot", Food);

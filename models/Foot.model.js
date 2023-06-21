const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Foot = new Schema({
  name: String,
  kcal: Number,
});

module.exports = model("Foot", Foot);

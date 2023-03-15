const mongoose = require("mongoose");

const CollSchema = mongoose.Schema({
  name: String,
  city: String,
  number: Number,
});

module.exports = mongoose.model("demo1", CollSchema);

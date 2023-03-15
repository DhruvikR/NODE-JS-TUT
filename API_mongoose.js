require("./mongoose_dbConnect");
const mongoose = require("mongoose");
const coll = require("./mongoose_conCol");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await coll.find();
  res.send(data);
});

app.post("/", async (req, res) => {
  let data = await new coll(req.body);
  let result = await data.save();
  res.send(result);
});

app.put("/:_id", async (req, res) => {
  let data = await coll.updateOne({ id: req.params._id }, { $set: req.body });
  res.send(data);
});

app.delete("/", async (req, res) => {
  let data = await coll.deleteOne({ _id: res.param.id });
  res.send(data);
});

app.listen(5000);

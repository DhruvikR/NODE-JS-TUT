const express = require("express");
const mongodb = require("mongodb");
const dbConnect = require("./only_db_connect_and_use_in_other_file");
const app = express();

app.use(express.json());
app.get("/", async (req, res) => {
  let coll = await dbConnect();
  let data = await coll.find({}).toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  let coll = await dbConnect();
  let result = await coll.insertOne(req.body);
  // let data = await coll.find({}).toArray();
  if (result.acknowledged) {
    res.send(result);
  }
});

app.put("/:name", async (req, res) => {
  let coll = await dbConnect();
  let result = await coll.updateMany(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  let coll = await dbConnect();
  let result = await coll.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5000);

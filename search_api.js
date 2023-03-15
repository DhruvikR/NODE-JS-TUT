require("./mongoose_dbConnect");
const mongoose = require("mongoose");
const coll = require("./mongoose_conCol");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {
    let result = req.params.key;
    // let result = req.query.name;
    console.log(result);
    let data = await coll.find({
      $or: [
        { name: { $regex: result } },
        { city: { $regex: result } },
        { number: { $regex: result } },
      ],
    });
  res.send("result");
});
app.listen(5050);

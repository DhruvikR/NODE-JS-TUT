const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://DhruvikRangani:zU0VQkivhL0SF7Rp@cluster0.dxubb19.mongodb.net/test";
const database = "Dhruvik";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("Project");
  // let response = await collection.find({ name: "Dhruvik" }).toArray();
  // console.log(response);
}

module.exports = dbConnect;

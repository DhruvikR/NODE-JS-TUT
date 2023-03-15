const dbConnect = require("./only_db_connect_and_use_in_other_file");
const data = require("./data");
const insert = async () => {
  let db = await dbConnect();

  for (let i = 0; i < 6; i++) {
    const result = await db.insertOne({
      name: data[i].name,
      city: data[i].city,
    });
    if (result.acknowledged) {
      console.log("insert success");
    }
  }
};

insert();

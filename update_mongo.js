const dbConnect = require("./only_db_connect_and_use_in_other_file");
const data = require("./data");
const update = async () => {
  let db = await dbConnect();

  for (let i = 0; i < 6; i++) {
    const result = await db.updateMany(
      { name: data[i].name },
      { $set: { number: 9313309730 + i } }
    );
    if (result.acknowledged) {
      console.log("Update success");
    }
  }
};

update();

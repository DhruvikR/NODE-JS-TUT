const dbConnect = require("./only_db_connect_and_use_in_other_file");

const data = require("./data");

const deletemongo = async () => {
  let coll = await dbConnect();
  for (let i = 0; i < 3; i++) {
    const result = coll.deleteOne({ name: data[i].name });
  }
};

deletemongo();

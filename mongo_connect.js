const dbConnect = require("./only_db_connect_and_use_in_other_file");

// dbConnect().then((res) => {
//   res
//     .find({ name: "busa" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async () => {
  let collection1 = await dbConnect();
  let data = await collection1.find({}).toArray();
  console.log(data);
};

main();

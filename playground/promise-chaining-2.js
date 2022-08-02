require("../src/db/mongoose");
const Task = require("../src/models/task");
// 62e8b4470f74ef442c61e91b

Task.findByIdAndDelete("62e8ca0bfec33618acf548b2")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

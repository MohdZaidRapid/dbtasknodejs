require("../src/db/mongoose");
const User = require("../src/models/user");

// 62e8b95f5507d92ff89a0505
User.findByIdAndUpdate("62e8bb7d9bcb2554e032b5a7", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });


  
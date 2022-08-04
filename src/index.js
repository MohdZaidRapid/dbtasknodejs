const express = require("express");
require("./db/mongoose");
const userRouter = require("./router/user");
const taskRouter = require("./router/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");
// const main = async () => {
//   // const task = await Task.findById("62ea79c46c3b8059c81bde4d");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);
//   const user = await User.findById("62ea7590d03f61484cd98620");
//   await user.populate("tasks").execPopulate()
//   // console.log(user.tasks);
// };
// main();

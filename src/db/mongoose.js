const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.MONGO_DB_URI)

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

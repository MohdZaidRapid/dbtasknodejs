// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    // console.log("Connected correctly!");

    const db = client.db(databaseName);

    db.collection("users")
      .find({ age: 27 })
      .toArray((error, users) => {
        console.log(users);
      });
    db.collection("users")
      .find({ age: 27 })
      .count((error, count) => {
        console.log(count);
      });
  }
);

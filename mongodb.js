// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    // db.collection("users").insertOne({
    //   name: "Andrew",
    //   age: 27,
    // });

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }

    //     console.log(result.ops);
    //   }
    // );
    db.collection("tasks").insertMany(
      [
        {
          description: "Clean the house",
          completed: true,
        },
        {
          description: "Renew inspection",
          completed: false,
        },
        {
          description: "Pot plants",
          completed: false,
        },
      ],
      (error, results) => {
        if (error) {
          return console.log("Unable to insert tasks !");
        }
        console.log(results.ops);
      }
    );
  }
);

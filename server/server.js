const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

const Post = require("./models/postModel");
const posts = require("./utils/importData");

// console.log(posts);
dotenv.config({ path: "./configure.env" });

const dbUrl = process.env.DB_URL;
const port = process.env.PORT || 8001;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected with DB");

    //One time importing data
    // Post.insertMany(posts);
  });

const server = app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

//Error Handling

process.on("uncaughtException", (err) => {
  console.log(err, err.name, err.message);
  console.log("UNCAUGHT EXCEPTION 🔴🔴🔴 Shutting down.....");
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLED REJECTION 🔴🔴🔴 Shutting down.....");
  server.close(() => {
    process.exit(1);
  });
});

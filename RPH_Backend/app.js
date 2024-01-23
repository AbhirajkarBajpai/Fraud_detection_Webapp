const express = require("express");  // Express is a web application framework for Node.js that simplifies the process of building APIs and web applications.
const mongoose = require("mongoose"); // Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, providing a higher-level abstraction for MongoDB interactions.
const cookieParser = require("cookie-parser"); // Cookie-parser is a middleware to parse cookies attached to the client's request object.
const cors = require("cors"); // CORS (Cross-Origin Resource Sharing) middleware to enable communication between your server and a frontend application running on a different origin.
require("dotenv").config(); // Loading environment variables from a .env file into process.env.
const router = require("./Transaction-route");
const poster = require("./fraud-route");
const app = express();

// Configuring CORS middleware to allow cross-origin requests from "http://localhost:3000"
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Using cookie-parser middleware to parse cookies in the incoming request
app.use(cookieParser());

// Parsing incoming JSON requests
app.use(express.json());

app.use("/api", router);
app.use("/post", poster);

// Connecting to the MongoDB database hosted on MongoDB Atlas
mongoose
  .connect(
    `<CONNECT HERE>`
  )
  .then(() => {
    // Starting the Express server on port 5000 after successfully connecting to the database
    app.listen(5000);
    console.log("Database is connected! Listening to localhost 5000");
  })
  .catch((err) => console.log(err));

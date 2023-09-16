const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

mongoose.connect(
  "mongodb+srv://joshipankaja:bqsRefD9OlzX0j2J@mongolearner.d1msn6s.mongodb.net/retailHome?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.host}:${db.port}`);
});
/*

// Connect to the Mongo DB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/realestateapp", {
  useNewUrlParser: true,
  //useFindAndModify: false,
  useUnifiedTopology: true,
});
*/

// Start the API server
app.listen(PORT, function () {
  console.log(` API Server now listening on PORT ${PORT}!`);
});

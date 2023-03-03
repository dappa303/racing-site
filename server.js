const express = require("express");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const router = require("./routes");

const app = express();

MongoClient.connect("mongodb://127.0.0.1:27017/").then((client) => {
  const db = client.db("races");
  const speeds = db.collection("speedmaps");
  app.locals.speedmaps = speeds;
  app.locals.reviews = db.collection("reviews");
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/speedmap", router);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express");
var mysql = require("mysql");
const app = express();
const port = 3000;
const redis = require("redis");

var connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

connection.connect(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }

  console.log("Connected to database.");
});

app.get('/', (req,res) => {
  res.status(200)
  res.send(`Application listening at port ${port}`)
})


app.get("/db", (req, res) => {
  if (connection.state === "disconnected") {
    console.error("Database connection failed: " + err.stack);
    res.send("db connection failed");

    return;
  } else res.send("db connection successful");
});

const client = redis.createClient({
  host: process.env.REDIS_HOSTNAME,
  port: process.env.REDIS_PORT,
});

client.on("error", (err) => {
  console.log("Error " + err);
});

app.get("/redis", (req, res) => {
  client.set("foo", "bar", (error, rep) => {
    if (error) {
      console.log(error);
      res.send("redis connection failed");
      return;
    }
    if (rep) {
      //JSON objects need to be parsed after reading from redis, since it is stringified before being stored into cache
      console.log(rep);
      res.send("redis is successfuly connected");
    }
  });
});


app.listen(port, () => {
  console.log(process.env.REDIS_HOSTNAME, process.env);
  console.log(`Example app listening at http://localhost:${port}`);
});
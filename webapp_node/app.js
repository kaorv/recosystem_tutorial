const express = require("express");
const app = express();

const PORT = 8080;
const HOST = "0.0.0.0";

app.set("view engine","ejs");
app.use("/public",express.static(__dirname + "/public"));

app.use("/",require("./routes/index.js"));

app.listen(PORT,HOST);
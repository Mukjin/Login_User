const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
//const path = require("path");

const home = require("./src/routes/home");

app.set("views", "./app/src/views");
app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname, "src", "public")));

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home);

module.exports = app;

// 서버 실행 코드
// nodemon ./app/bin/www.js

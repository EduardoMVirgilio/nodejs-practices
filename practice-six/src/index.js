const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path")

// Aplication Setting

app.listen(3000,"localhost",() => console.log("Server Online"));

app.set("view engine","ejs");

app.use(express.static(path.resolve(__dirname,"../public")))

app.use(express.urlencoded({extended:false}))

app.use(require("./routes/web"))
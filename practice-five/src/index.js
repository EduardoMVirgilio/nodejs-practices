const express = require("express")
const app = express();
const ejs = require("ejs")

// Aplication Settings

app.listen(3000,"localhost", () => console.log("Server Start"))

app.set("view engine", "ejs")

// Aplication Routes
app.use(require("./routes/web"))
const express = require("express")
const app = express()

// Aplication Settings
app.listen(3000,"localhost", () => console.log("El servidor ya esta ensendido"))

// Aplication Routes

app.get("/", (req,res) => { return res.send("Hola Mundo") })

app.get("/:nombre", (req,res) => { return res.send("Hola Mundo "+req.params.nombre) })

app.get("/:nombre/:chebere?", 
(req,res) => { 
    return req.params.chebere == "chebere" ? 
    res.send("Antes eras Chebere "+req.params.nombre) : 
    res.send("Que te ha pasado " + req.params.nombre) 
})

app.get("/:nombre/detalle", (req,res) => { return req.query.ok ? res.send("Eres chebere "+req.params.nombre) : res.send("No eres chebere " +req.params.nombre) })


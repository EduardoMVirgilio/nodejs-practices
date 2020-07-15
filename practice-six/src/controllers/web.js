const path = require("path");
let model = require("../models/task");
const fs = require("fs");
module.exports = {
    index: (req,res) => res.render(path.resolve(__dirname,"../views/index"),{title:"App Task"}),
    tasks: (req,res) => {
        let misTareas = model.all();
        res.render(path.resolve(__dirname,"../views/tasks"),{title:"My Task",misTareas})
    },
    create: (req,res) => res.render(path.resolve(__dirname,"../views/create"),{title:"New Task"}),
    save: (req,res) => {
        let tareas =model.all() 
        let id = tareas.length + 1;
        let date = new Date(Date.now());
        req.body.state = req.body.state ? "completa": "incompleta";
        req.body.date = date;
        req.body.id = id;
        tareas.push(req.body)
        fs.writeFileSync(path.resolve(__dirname,"../data/task.json"),JSON.stringify(tareas,null,2))
        res.redirect("/")
    }
}
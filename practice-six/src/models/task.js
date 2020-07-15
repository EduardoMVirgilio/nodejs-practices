const fs = require("fs");
const path = require("path")
module.exports = {
    all: () => JSON.parse(fs.readFileSync(path.resolve(__dirname,"../data/task.json"),"utf-8")),
    one: (id) => JSON.parse(fs.readFileSync(path.resolve(__dirname,"../data/task.json"),"utf-8")).find(element => element.id == id)
}
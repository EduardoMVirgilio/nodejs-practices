const path = require("path")
module.exports = {
    index: (req,res) => res.render(path.resolve(__dirname,"../views/index"),{nombre:"Nicolas"}),
    nosotros: (req,res) => {
        let servicios = ["Websites", "Marketing", "Design Graphics"]
        return res.render(path.resolve(__dirname,"../views/nosotros"),{servicios})
    }
}
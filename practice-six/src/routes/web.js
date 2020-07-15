const router = require("express").Router();

const controller = require("./../controllers/web");

router.get("/",controller.index)

router.get("/listar",controller.tasks)

router.get("/crear",controller.create)

router.post("/guardar",controller.save)

module.exports = router
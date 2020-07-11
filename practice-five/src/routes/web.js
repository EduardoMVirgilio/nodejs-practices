const router = require("express").Router()

const controller = require("../controllers/web")

router.get("/",controller.index)

router.get("/nosotros",controller.nosotros)

module.exports = router
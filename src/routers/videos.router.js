const router = require("express").Router();
const videosController = require("./../controllers/videos.controller");
router.get("/", videosController.getAll);
router.get("/:videoId/products", videosController.getProducts);
module.exports = router;

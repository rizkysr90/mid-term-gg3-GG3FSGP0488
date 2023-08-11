const router = require("express").Router();
const videosController = require("./../controllers/videos.controller");
router.get("/", videosController.getVideos);
router.get("/:video_id", videosController.getVideo);
module.exports = router;

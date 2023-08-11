const router = require("express").Router();
const commentsController = require("./../controllers/comment.controller");
router.post("/", commentsController.submit);
router.get("/:video_id", commentsController.getAll);

module.exports = router;

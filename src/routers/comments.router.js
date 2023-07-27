const router = require("express").Router();
const commentsController = require("./../controllers/comment.controller");
router.post("/", commentsController.submit);
router.get("/:videoId", commentsController.getAll);

module.exports = router;

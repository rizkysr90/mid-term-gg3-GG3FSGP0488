const router = require("express").Router();
const videosRouter = require("./videos.router");
const commentsRouter = require("./comments.router");
router.use("/videos", videosRouter);
router.use("/comments", commentsRouter);
module.exports = router;

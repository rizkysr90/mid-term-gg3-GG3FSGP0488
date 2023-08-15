const Comment = require("../models/comment.model.js");

const submit = async (req) => {
  const { username, comment, video_id } = req.body;

  const newComments = new Comment({
    comment,
    video_id: video_id,
    username,
    created_at: new Date(),
  });
  let creationTask = await newComments.save();
  return creationTask.id;
};
const getAll = async (req) => {
  const comments = await Comment.find({ video_id: req.params?.video_id }, [
    "comment",
    "username",
    "createdAt",
  ]);
  return comments;
};

module.exports = {
  submit,
  getAll,
};

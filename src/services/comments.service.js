const Comment = require("./../models/comments.js");

const submit = async (req) => {
  const { username, comment, videoId } = req.body;

  const newComments = new Comment({
    comment,
    video: videoId,
    username,
    created_at: new Date(),
  });
  let creationTask = await newComments.save();
  return creationTask.id;
};
const getAll = async (req) => {
  const comments = await Comment.find({ video: req.params?.videoId }, [
    "comment",
    "username",
  ]);
  return comments;
};

module.exports = {
  submit,
  getAll,
};

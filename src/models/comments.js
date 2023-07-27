const mongoose = require("mongoose");
const Video = require("./videos");
const comments = new mongoose.Schema({
  comment: {
    required: true,
    type: String,
  },
  video: {
    type: mongoose.ObjectId,
    ref: Video,
  },
  username: {
    required: true,
    type: String,
  },
  created_at: {
    type: Date,
  },
});

module.exports = mongoose.model("Comments", comments);

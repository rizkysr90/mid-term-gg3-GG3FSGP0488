const mongoose = require("mongoose");
const comments = new mongoose.Schema(
  {
    comment: {
      required: true,
      type: String,
    },
    video_id: {
      type: mongoose.ObjectId,
      ref: "videos",
    },
    user_id: {
      type: mongoose.ObjectId,
      ref: "users",
    },
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

module.exports = mongoose.model("comments", comments);

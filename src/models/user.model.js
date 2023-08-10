const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

const User = mongoose.model("users", userSchema);
module.exports = {
  User,
};

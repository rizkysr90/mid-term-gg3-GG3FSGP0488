const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  thumbnail_url: {
    required: true,
    type: String,
  },
  seller: {
    type: {
      username: {
        type: String,
        required: true,
      },
      avatar_url: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  video_url: {
    type: String,
  },
  products: {
    type: [
      {
        thumbnail_product_url: {
          type: String,
        },
        price: {
          type: Number,
        },
        title: {
          type: String,
        },
        product_url: {
          type: String,
        },
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("Video", videoSchema);

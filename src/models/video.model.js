const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title_video: {
      required: true,
      type: String,
    },
    thumbnail_video_url: {
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
          required: true,
        },
        store_url: {
          type: String,
          required: true,
        },
      },
    },
    video_url: {
      type: String,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    // products: {
    //   type: [
    //     {
    //       thumbnail_product_url: {
    //         type: String,
    //       },
    //       price: {
    //         type: Number,
    //       },
    //       title: {
    //         type: String,
    //       },
    //       product_url: {
    //         type: String,
    //       },
    //     },
    //   ],
    //   default: [],
    // },
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

module.exports = mongoose.model("videos", videoSchema);

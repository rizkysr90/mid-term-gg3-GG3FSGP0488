const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    thumbnail_product_url: {
      required: true,
      type: String,
    },
    title_product: {
      require: true,
      type: String,
    },
    price_product: {
      require: true,
      type: Number,
    },
    product_url: {
      require: true,
      type: String,
    },
    live_videos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "videos",
      },
    ],
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);
const Product = mongoose.model("products", productSchema);

module.exports = {
  Product,
};

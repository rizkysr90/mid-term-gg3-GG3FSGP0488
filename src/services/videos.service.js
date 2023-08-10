const Video = require("../models/video.model.js");
const Product = require("../models/product.model.js");
const getAll = async (req) => {
  const videos = await Video.find({}, [
    "title_video",
    "thumbnail_video_url",
    "seller",
    "video_url",
  ]);
  return videos;
};
const getProducts = async (req) => {
  const products = await Video.findById(req.params?.videoId, [
    "title",
    "products",
  ]);
  return products;
};

module.exports = {
  getAll,
  getProducts,
};

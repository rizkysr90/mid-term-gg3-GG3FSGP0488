const Video = require("../models/video.model.js");
const Product = require("../models/product.model.js");
const getVideos = async (req) => {
  const videos = await Video.find({}, ["title_video", "seller", "video_url"]);
  return videos;
};
const getVideo = async (req) => {
  const products = await Video.findById(req.params?.video_id, [
    "title_video",
    "seller",
    "created_at",
    "video_url",
  ]).populate(["products"]);
  return products;
};

module.exports = {
  getVideos,
  getVideo,
};

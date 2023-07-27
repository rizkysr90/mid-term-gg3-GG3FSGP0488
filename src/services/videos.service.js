const Video = require("./../models/videos.js");
const getAll = async (req) => {
  const videos = await Video.find({}, ["title", "thumbnail_url", "seller"]);
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

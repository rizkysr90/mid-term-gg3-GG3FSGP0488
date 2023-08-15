const videosService = require("./../services/videos.service");
const responseModel = require("../utilities/responseModel.utility");
const getVideos = async (req, res, next) => {
  try {
    // Validasi data
    const data = await videosService.getVideos(req);
    return res
      .status(200)
      .json(responseModel.success("berhasil mendapatkan data", data, 200));
  } catch (error) {
    next(error);
  }
};
const getVideo = async (req, res, next) => {
  try {
    const data = await videosService.getVideo(req);
    return res
      .status(200)
      .json(responseModel.success("berhasil mendapatkan data", data, 200));
  } catch (error) {}
};

module.exports = {
  getVideos,
  getVideo,
};

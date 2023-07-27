const videosService = require("./../services/videos.service");
const responseModel = require("./../utilities/responseModel");
const getAll = async (req, res, next) => {
  try {
    // Validasi data
    const data = await videosService.getAll(req);
    return res
      .status(200)
      .json(responseModel.success("berhasil mendapatkan data", data, 200));
  } catch (error) {
    next(error);
  }
};
const getProducts = async (req, res, next) => {
  try {
    const data = await videosService.getProducts(req);
    return res
      .status(200)
      .json(responseModel.success("berhasil mendapatkan data", data, 200));
  } catch (error) {}
};

module.exports = {
  getAll,
  getProducts,
};

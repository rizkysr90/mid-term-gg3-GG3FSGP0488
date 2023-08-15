const commentServices = require("./../services/comments.service");
const responseModel = require("../utilities/responseModel.utility");
const submit = async (req, res, next) => {
  try {
    // Validasi data
    const { username, comment, video_id } = req.body;
    if (!username || !comment || !video_id) {
      responseModel.errors("mohon masukkan data yang lengkap", 400, {});
    }
    const data = await commentServices.submit(req);
    return res
      .status(201)
      .json(responseModel.success("berhasil membuat data baru", data, 201));
  } catch (error) {
    next(error);
  }
};
const getAll = async (req, res, next) => {
  try {
    const data = await commentServices.getAll(req);
    return res
      .status(200)
      .json(responseModel.success("berhasil mendapatkan data", data, 200));
  } catch (error) {}
};

module.exports = {
  submit,
  getAll,
};

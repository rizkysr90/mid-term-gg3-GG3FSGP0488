const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  const statusCode = err.error_code || 500;
  const data = err.data || {};
  const resBody = {
    metadata: {
      status: statusCode,
      msg: err.message,
    },
    data,
  };
  res.status(statusCode).json(resBody);
};

module.exports = errorHandler;

const success = (message, data, statusCode) => {
  return {
    metadata: {
      status: statusCode,
      msg: message,
    },
    data,
  };
};

const errors = (message, error_code, data) => {
  let errorResponse = new Error(message);
  errorResponse.error_code = error_code;
  errorResponse.data = data;

  throw errorResponse;
};

module.exports = {
  success,
  errors,
};

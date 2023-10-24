const { ValidationError } = require("yup");
const monitoring = require("../monitoring");
const parseYupError = require("../parseYupError");
const { BAD_REQUEST, ERROR } = require("../../constants/HttpStatusCodes");

const GENERIC_ERROR_MESSAGE = "API Error";

const handleAPIError = (res, err, statusCode = ERROR) => {
  if (!(err instanceof ValidationError)) {
    monitoring.error(err);
    res.status(statusCode);
    res.send(GENERIC_ERROR_MESSAGE);
    return;
  }
  res.status(BAD_REQUEST);
  res.send(parseYupError(err));
};

module.exports = handleAPIError;

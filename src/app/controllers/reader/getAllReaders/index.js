const handleAPIError = require("../../../../utils/handleAPIError");
const fetchAllReaders = require("../../../../actions/reader/fetchAllReaders");

const getAllReaders = async (req, res) => {
  try {
    const { readers } = await fetchAllReaders();
    res.status(201).send({
      readers
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllReaders;

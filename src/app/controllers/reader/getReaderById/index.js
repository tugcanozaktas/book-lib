const handleAPIError = require("../../../../utils/handleAPIError");
const fetchReaderById = require("../../../../actions/reader/fetchReaderById");

const getReaderById = async (req, res) => {
  const { readerId } = req.params;
  try {
    const { reader } = await fetchReaderById({
      readerId
    });

    res.status(201).send({
      reader
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getReaderById;

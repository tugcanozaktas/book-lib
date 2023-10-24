const handleAPIError = require("../../../../utils/handleAPIError");
const removeReader = require("../../../../actions/reader/removeReader");

const deleteReader = async (req, res) => {
  const { readerId } = req.params;

  try {
    const { deletedReader } = await removeReader({
      readerId
    });

    res.status(204).send({
      deletedReader
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteReader;

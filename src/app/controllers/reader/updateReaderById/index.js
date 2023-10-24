const handleAPIError = require("../../../../utils/handleAPIError");
const modifyReaderById = require("../../../../actions/reader/modifyReaderById");

const patchReaderById = async (req, res) => {
  const { readerId } = req.params;
  const { genre, email, password, name } = req.body;

  try {
    const { reader } = await modifyReaderById({
      readerId,
      email,
      password,
      genre,
      name
    });

    res.status(201).send({
      reader
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchReaderById;

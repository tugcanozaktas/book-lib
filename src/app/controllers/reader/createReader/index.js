const handleAPIError = require("../../../../utils/handleAPIError");
const createReader = require("../../../../actions/reader/createReader");

const postReader = async (req, res) => {
  const { name, email, password, genre } = req.body;

  try {
    const { readerId } = await createReader({ name, email, password, genre });

    res.status(201).send({
      readerId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postReader;

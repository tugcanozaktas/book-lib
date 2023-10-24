const fetchUsers = require("../../../../actions/users/fetchUser");
const handleAPIError = require("../../../../utils/handleAPIError");

const getUsers = async (req, res) => {
  try {
    const { users } = await fetchUsers();
    res.status(201).send({
      users
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getUsers;

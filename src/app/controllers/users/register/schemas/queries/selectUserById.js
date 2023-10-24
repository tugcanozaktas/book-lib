const {
  submitQuery,
  camelKeys,
  getFirst
} = require("../../../../../../lib/database");

const selectUserByEmail = ({ email }) => submitQuery`
    SELECT 
      user_id
    FROM users
    WHERE email=${email};
`;

module.exports = getFirst(camelKeys(selectUserByEmail));

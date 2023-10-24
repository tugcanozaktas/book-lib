const insertReader = require("./queries/insertReader");

const createReader = async ({ name, email, password, genre }) => {
  const readerId = await insertReader({ name, email, password, genre });
  return { readerId };
};

module.exports = createReader;

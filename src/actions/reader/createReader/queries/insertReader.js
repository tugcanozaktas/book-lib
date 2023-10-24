const { submitQuery, getInsertId } = require("../../../../lib/database");

const insertReader = ({ name, email, password, genre }) => submitQuery`
    INSERT INTO Readers(name, email, password, genre)
    VALUES(${name},${email},${password}, ${genre});
`;

module.exports = getInsertId(insertReader);

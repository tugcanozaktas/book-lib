const { submitQuery, camelKeys } = require("../../../../lib/database");

const selectReaderById = ({ readerId }) => submitQuery`
    SELECT 
       reader_id, name, email, genre
    FROM Readers
    WHERE reader_id= ${readerId}
    `;

module.exports = camelKeys(selectReaderById);

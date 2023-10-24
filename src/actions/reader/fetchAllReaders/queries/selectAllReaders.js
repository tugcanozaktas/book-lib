const { submitQuery, camelKeys } = require("../../../../lib/database");

const selectAllReaders = () => submitQuery`
    SELECT 
        reader_id, name, email, genre
    FROM Readers
`;

module.exports = camelKeys(selectAllReaders);

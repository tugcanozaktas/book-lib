const { submitQuery } = require("../../../../lib/database");

const deleteReaderQuerys = ({ readerId }) => submitQuery`
    DELETE FROM
        Readers
    WHERE
        reader_id=${readerId}
`;

module.exports = deleteReaderQuerys;

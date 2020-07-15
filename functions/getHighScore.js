const { table, getHighScores } = require("./utils/airtable");

exports.handler = async (event) => {
  // return all of records from first page of table instead of max amount of records
  // try catch is used for async in case an error does happen something else returns
  try {
    const records = await getHighScores(true);
    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "failed to query from table" }),
    };
  }
};

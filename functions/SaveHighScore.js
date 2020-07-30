const { table, getHighScores } = require("./utils/airtable");
const { getAccessTokenFromHeaders } = require("./utils/auth");

exports.handler = async (event) => {
  const token = getAccessTokenFromHeaders(event.headers);
  if (!token) {
    return {
      statusCode: 401,
      body: { err: "User is not logged in or signed up" },
    };
  }
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: "that method is not allowed" }),
    };
  }

  const { Score, Name } = JSON.parse(event.body);
  if (typeof Score === "undefined" || !Name) {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: "bad request" }),
    };
  }

  try {
    const records = await getHighScores(false);

    // we have formatted records in order highest to lowest lowest be last index
    const lowestRecord = records[9];
    if (
      typeof lowestRecord.fields.Score === "undefined" ||
      Score > lowestRecord.fields.Score
    ) {
      //update record with incoming score
      const updatedRecord = { id: lowestRecord.id, fields: { Name, Score } };
      await table.update([updatedRecord]);
      return {
        statusCode: 200,
        body: JSON.stringify(updatedRecord),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({}),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "failed to query from table" }),
    };
  }
};

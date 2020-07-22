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

  const { score, name } = JSON.parse(event.body);
  if (typeof score === "undefined" || !name) {
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
      typeof lowestRecord.fields.score === "undefined" ||
      score > lowestRecord.fields.score
    ) {
      //update record with incoming score
      const updatedRecord = { id: lowestRecord.id, fields: { name, score } };
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

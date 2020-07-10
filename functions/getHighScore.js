const Airtable = require("airtable");

Airtable.configure({
  apiKey: "keyC0L1DoS6vboLIV",
});

const base = require("airtable").base("appga1Hx5KtN8YLK6");
const table = base.table("Table");

exports.handler = async (event) => {
  const records = table.select({}).firstPage();
  return {
    statusCode: 200,
    body: JSON.stringify(records),
  };
};

// exports.handler tells netlify this is a serverless function
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello world",
    }),
  };
};

// exports.handler tells netlify this is a serverless function
exports.handler = (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello world",
    }),
  };
};

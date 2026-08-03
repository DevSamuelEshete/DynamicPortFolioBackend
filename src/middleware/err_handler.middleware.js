function error_handler(err, req, res, next) {
  const name = err.name;
  const status_code = err.status_code;
  const description = err.description;

  if (!name || !status_code) console.error(err);
  return res.status(500).json({
    message: `An UnKnown Internal Server Error Occured.`,
  });

  return res.status(status_code).json({
    message: `An Error Occured: '${name}'.`,
    description: err.description,
  });
}

module.exports = error_handler;

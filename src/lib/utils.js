const log = (statement) => {
  if (process.env.NODE_ENV !== "development") return;
  console.log(statement);
};

module.exports = { log };

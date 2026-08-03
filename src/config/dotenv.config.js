const config = require("dotenv").config;

config({ path: "./.env" });

const env = {
  node_env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "5000"),

  mongo_uri: process.env.MONGO_URI,

  session_secret: process.env.SESSION_SECRET,
  max_age: parseInt(process.env.SESSION_MAX_AGE || "60000"),
};

const undefined_keys = Object.keys((key) => env[key] === undefined);
if (undefined_keys.length > 0) {
  throw {
    name: "MissingEnvVariableError",
    message: `The following environment variables are missing: ${undefined_keys.join(", ")}`,
  };
}

module.exports = env;

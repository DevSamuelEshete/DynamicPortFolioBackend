const mongoose = require("mongoose");
const env = require("../config/dotenv.config");
const { log } = require("../lib/utils");

async function connectToMongoDB() {
  log("Connecting To MongoDB ...");
  const connection = await mongoose.connect(env.mongo_uri);
  log("MongoDB Connected Successfully!");
}

module.exports = { connectToMongoDB, mongoose };

const { mongoose } = require("../db/mongo.db");

const Schema = mongoose.Schema;

const bios_schema = new Schema(
  {
    title: {
      type: String,
      max: 20,
      required: false,
    },
    description: {
      type: String,
      max: 200,
      required: true,
    },
    pfp_url: {
      type: String,
      required: false,
    },
    cv_url: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

const biosModel = mongoose.model("Bios", bios_schema);
module.exports = biosModel;

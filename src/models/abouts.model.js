const { mongoose } = require("../db/mongo.db");

const Schema = mongoose.Schema;

const abouts_schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgs_url: { type: Array, required: true, default: [] },
  },
  { timestamps: true },
);

const aboutsModel = mongoose.model("Abouts", abouts_schema);
module.exports = aboutsModel;

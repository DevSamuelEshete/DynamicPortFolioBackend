const { mongoose } = require("../db/mongo.db");

const Schema = mongoose.Schema;

const abouts_schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    img_url: { type: String, required: false },
  },
  { timestamps: true },
);

const aboutsModel = mongoose.model("Abouts", abouts_schema);
module.exports = aboutsModel;

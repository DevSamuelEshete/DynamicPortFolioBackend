const { mongoose } = require("../db/mongo.db");
const aboutsModel = require("../models/abouts.model");

function createAbout(req, res) {
  const { title, description, img_url } = req.body;

  if (!title || !description)
    throw {
      status_code: 400,
      name: "UserInputError",
      description: "Required body variables missing",
    };

  const new_about = aboutsModel.create(req.body);

  return res.status(201).json({
    message: "A new about was successfully created",
    data: { about: new_about },
  });
}

module.exports = { createAbout };

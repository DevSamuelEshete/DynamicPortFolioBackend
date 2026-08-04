const { mongoose } = require("../db/mongo.db");
const aboutsModel = require("../models/abouts.model");

async function getAbouts(req, res) {
  const { id } = req.params;
  if (!id) {
    const abouts = await aboutsModel.find();
    return res
      .status(200)
      .json({ message: "successfully fetched bio(s)", data: { abouts } });
  }

  const about = await aboutsModel.findById(id);
  return res
    .status(200)
    .json({ message: "successfully fetched bios", data: { about } });
}

async function createAbout(req, res) {
  const { title, description, imgs_url } = req.body;

  if (!title || !description)
    throw {
      status_code: 400,
      name: "UserInputError",
      description: "Required body variables missing",
    };

  const new_about = await aboutsModel.create(req.body);

  return res.status(201).json({
    message: "A new about was successfully created",
    data: { about: new_about },
  });
}

async function updateAbout(req, res) {
  const { id } = req.params;
  const updated_about = await aboutsModel.findByIdAndUpdate(
    id,
    { ...req.body },
    { returnDocument: "after" },
  );

  return res.status(200).json({
    message: "Successfuly updated 'About'",
    data: { about: updated_about },
  });
}

module.exports = { getAbouts, createAbout, updateAbout };

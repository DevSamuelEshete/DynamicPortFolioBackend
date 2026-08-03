const { mongoose } = require("../db/mongo.db");
const biosModel = require("../models/bios.model");

async function createBios(req, res) {
  const { name, description, pfp_url, cv_url } = req.body;
  if (!description)
    throw {
      status_code: 400,
      name: "UserInputError",
      description: "Required body field missing.",
    };

  const new_bio = await biosModel.create(req.body);
  return res.status(201).json({ success: true, data: { bio: new_bio } });
}

async function updateBios(req, res) {
  const { id } = req.params;
  const { title, description, pfp_url, cv_url } = req.body;

  const bio = await biosModel.findByIdAndUpdate(
    id,
    { ...req.body },
    { returnDocument: "after" },
  );

  return res
    .status(200)
    .json({ message: `successfully updated: '${id}'`, date: { bio } });
}

module.exports = { createBios, updateBios };

const Router = require("express").Router;
const { createBios, updateBios } = require("../controllers/bios.controllers");

const biosRouter = Router();

biosRouter.post("/create", createBios);
biosRouter.put("/update/:id", updateBios);

module.exports = biosRouter;

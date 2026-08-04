const Router = require("express").Router;
const {
  createBios,
  updateBios,
  getBios,
} = require("../controllers/bios.controllers");

const biosRouter = Router();

biosRouter.get("/", getBios);
biosRouter.get("/:id", getBios);
biosRouter.post("/create", createBios);
biosRouter.put("/update/:id", updateBios);

module.exports = biosRouter;

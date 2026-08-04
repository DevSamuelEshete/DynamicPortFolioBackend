const {
  createAbout,
  updateAbout,
  getAbouts,
} = require("../controllers/abouts.controllers");

const Router = require("express").Router;
const aboutsRouter = Router();

aboutsRouter.get("/", getAbouts);
aboutsRouter.get("/:id", getAbouts);
aboutsRouter.post("/create", createAbout);
aboutsRouter.put("/update/:id", updateAbout);

module.exports = aboutsRouter;

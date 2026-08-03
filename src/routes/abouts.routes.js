const { createAbout } = require("../controllers/abouts.controllers");

const Router = require("express").Router;
const aboutsRouter = Router();

aboutsRouter.post("/create", createAbout);

module.exports = aboutsRouter;

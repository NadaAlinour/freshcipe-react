const { Router } = require("express");

const recipeRouter = Router();

recipeRouter.get("/", (req, res) => res.send('get recipe route'));

module.exports = recipeRouter;
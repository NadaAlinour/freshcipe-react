import { Router } from "express";

const recipeRouter = Router();

recipeRouter.get("/", (req, res) => res.send('get recipe route'));

export default recipeRouter;

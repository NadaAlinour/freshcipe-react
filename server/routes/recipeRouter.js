import { Router } from "express";
import * as recipeController from "../controllers/recipeController"

const recipeRouter = Router();

recipeRouter.get("/", recipeController.getRecipes);

export default recipeRouter;

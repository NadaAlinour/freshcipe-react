import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { validateUser } from "../middlewares/validator.js";

const authRouter = Router();

authRouter.post("/sign-up", validateUser, authController.createUser);

export default authRouter;

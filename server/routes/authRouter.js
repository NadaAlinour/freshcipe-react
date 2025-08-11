const { Router } = require("express");
const authController = require("../controllers/authController");

const authRouter = Router();

authRouter.post("/sign-up", authController.createUser);



module.exports = authRouter;
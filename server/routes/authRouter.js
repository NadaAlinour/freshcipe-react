import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { validateUser } from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";

const authRouter = Router();
authRouter.post("/sign-up", validateUser, authController.createUser);
//authRouter.post("/log-in", passport.authenticate("local"));
authRouter.post("/log-in", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("err:", err);
    console.log("user:", user);
    console.log("info:", info);

    if (err) return next(err);
    if (!user)
      return res.status(401).json({ message: info?.message || "Login failed" });

    req.login(user, (err) => {
      if (err) return next(err);
      return res.json({ message: "Logged in", user });
    });
  })(req, res, next);
});

export default authRouter;

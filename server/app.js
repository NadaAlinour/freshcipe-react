import dotenv from "dotenv";
dotenv.config();

import express from "express";
import session from "express-session";
import passport from "./middlewares/passport.js";

import authRouter from "./routes/authRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import productRouter from "./routes/productRouter.js";
import recipeRouter from "./routes/recipeRouter.js";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));

app.use(passport.initialize())
app.use(passport.session());



app.use("/auth", authRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use("/recipes", recipeRouter);



const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

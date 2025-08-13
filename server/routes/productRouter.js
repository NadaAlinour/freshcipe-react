import { Router } from "express";

const productRouter = Router();

productRouter.get("/", (req, res) => res.send('get product route'));

export default productRouter;


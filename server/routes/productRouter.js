import { Router } from "express";
import * as productController from "../controllers/productController"

const productRouter = Router();

productRouter.get("/", productController.getProducts);

export default productRouter;


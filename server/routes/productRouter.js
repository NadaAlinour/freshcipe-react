const { Router } = require("express");

const productRouter = Router();

productRouter.get("/", (req, res) => res.send('get product route'));

module.exports = productRouter;
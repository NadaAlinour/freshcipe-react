const { Router } = require("express");

const categoryRouter = Router();

categoryRouter.get("/", (req, res) => res.send('get category route'));

module.exports = categoryRouter;
import { Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/", (req, res) => res.send('get category route'));

export default categoryRouter;

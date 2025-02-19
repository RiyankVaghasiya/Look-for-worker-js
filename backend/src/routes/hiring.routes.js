import { Router } from "express";
import { hireWorker } from "../controllers/hiring.controller.js";
import { verifyJWT, verifyWorker } from "../middlewares/auth.middleware.js";

const hiringRouter = Router();

hiringRouter.route("/hireWorker").post(hireWorker);

export { hiringRouter };

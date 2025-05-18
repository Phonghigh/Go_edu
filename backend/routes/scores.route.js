import { lookup } from "../controllers/scores_controller.js";
import express from "express";
import { validateParams } from "../middleware/validate.js";
import { lookuschema } from "../validators/scores.js";

const ScoresRouter = express.Router();
ScoresRouter.get("/:sbd",validateParams(lookuschema,'params'),lookup);
export default ScoresRouter;
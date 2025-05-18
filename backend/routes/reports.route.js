import express from "express";
import { get_reports } from "../controllers/report.controller.js";

const ReportsRouter = express.Router();
ReportsRouter.get("/",get_reports);
export default ReportsRouter;
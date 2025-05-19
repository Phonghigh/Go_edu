import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import ScoresRouter from "./routes/scores.route.js";
import ReportsRouter from "./routes/reports.route.js";
import top10Router from './routes/top10.route.js';
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use('/api/v1/top10/', top10Router);
app.use("/api/v1/scores",ScoresRouter);
app.use("/api/v1/reports",ReportsRouter);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
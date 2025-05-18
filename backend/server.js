import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import ScoresRouter from "./routes/scores.route.js";
// import connectDB from "./config/db.js";
const app = express();

dotenv.config();

const port = process.env.port || 5000
connectDB();

app.use(express.json());

app.use("/api/v1/scores",ScoresRouter);
app.listen(5000, () => console.log('Server running on port 5000'));
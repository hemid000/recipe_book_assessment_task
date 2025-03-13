import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipes";

dotenv.config();
console.log("API_BASE_URL:", process.env.API_BASE_URL);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/recipes", recipeRoutes);

export default app;

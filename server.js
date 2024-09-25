import rateLimit from "express-rate-limit";
import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import counterRoutes from "./routes/counterRoutes.js";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // Limita a 100 solicitudes por IP cada 15 minutos
  message: "Too many requests from this IP, please try again later",
});

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(limiter);
app.use(express.json());

// Rutas
app.use("/api/counter", counterRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

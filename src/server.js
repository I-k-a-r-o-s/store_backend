import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDatabase from "./config/database.js";
import productRouter from "./routes/product.route.js";
import cors from "cors";

const server = express();

server.use(cors())

server.use(express.json());

server.use("/api/products",productRouter)

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDatabase();
    server.listen(PORT, () => {
      console.log("Server Started on Port:", PORT);
    });
  } catch (error) {
    console.log("MongoDB connection failed:", error);
    process.exit(1);
  }
};

startServer();

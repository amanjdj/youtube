import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// ALL these are configuration for different packages like cors cookieParser also json limit

app.use(
  cors({
    // origin: process.env.CORS_ORIGIN,
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaaration

console.log("✅ Mounting /api/v1/users routes...");

app.use("/api/v1/users", userRouter);

export { app };

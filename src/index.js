// // // require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log("✅ Server file loaded at", new Date().toLocaleString());
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRRR: ", error);
      throw error;
    });
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed", err);
    process.exit(1);
  });

// //  -r dotenv/config --experimental-json-modules    in package.json script dev

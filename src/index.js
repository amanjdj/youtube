// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

// import "dotenv/config";

dotenv.config({ path: "./env" });

connectDB();

//  -r dotenv/config --experimental-json-modules    in package.json script

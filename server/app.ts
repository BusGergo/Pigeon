import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;
const databaseURL = process.env.DATABASE_URL || "";
const origin = process.env.ORIGIN || "";

app.use(
  cors({
    origin: [origin],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("Database connection estabilished.");
  })
  .catch((e) => {
    console.error("Unable to connect to the database: " + e);
  });

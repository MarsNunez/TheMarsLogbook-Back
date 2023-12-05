import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/UserRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", userRouter);

mongoose
  .connect(
    "mongodb+srv://thor:thor@cluster0.xrmbv6w.mongodb.net/Cluster0?retryWrites=true&w=majority"
  )
  .then(
    app.listen(3001, () => {
      console.log("Mongoose and app up, server listening on port 3001");
    })
  );

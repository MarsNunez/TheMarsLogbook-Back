import { Router } from "express";
import { UserModel } from "../models/UserModel.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  //   const encriptedPassword =
  const newUser = await new UserModel({
    username,
    password,
  });
  newUser.save();
  res.json(newUser);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
});

export { router as userRouter };

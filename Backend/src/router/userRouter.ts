import { Router } from "express";
import {
  createUserContoller,
  DeleteUserById,
  getByidController,
  getUserController,
  updteUserController,
} from "../Controller/userController";
import { checkLogin } from "../Controller/userLoginController";
import { logoutCheck } from "../Controller/userLogoutController";

const userRouter = Router();

userRouter.post("/", createUserContoller);
userRouter.put("/:id", updteUserController);
userRouter.delete("/:id", DeleteUserById);
userRouter.get("/", getUserController);
userRouter.post("/login", checkLogin);
userRouter.post("/logout", logoutCheck);
userRouter.get("/:id", getByidController);

export default userRouter;

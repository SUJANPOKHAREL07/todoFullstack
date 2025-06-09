import { Router } from "express";
import { createUserContoller, getByidController, getUserController, updteUserController } from "../Controller/userController";

const userRouter=Router()

userRouter.post("/",createUserContoller)
userRouter.put("/:id",updteUserController)
userRouter.get("/",getUserController)
userRouter.get("/:id",getByidController)

export default userRouter
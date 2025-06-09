import { Router } from "express";
import { createUserContoller, updteUserController } from "../Controller/userController";

const userRouter=Router()

userRouter.post("/",createUserContoller)
userRouter.put("/:id",updteUserController)

export default userRouter
import { Router } from "express";
import { createUserContoller } from "../Controller/userController";

const userRouter=Router()

userRouter.post("/",createUserContoller)

export default userRouter
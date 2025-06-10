import { Router } from "express";
import { createUserContoller, deleteUserCOntroller, getByidController, getUserController, updteUserController } from "../Controller/userController";

const userRouter=Router()

userRouter.post("/",createUserContoller)
userRouter.put("/:id",updteUserController)
userRouter.delete("/:id",deleteUserCOntroller)
userRouter.get("/",getUserController)
userRouter.get("/:id",getByidController)

export default userRouter
import { Router } from "express";
import { createTaskController, deletetaskController, getAllTaskController, getTaskByIDCOntroller, updateTaskController } from "../Controller/tasktodoController";
import { authenMiddleware } from "../tokens/authenMiddleware";


const taskRouter=Router()

taskRouter.post("/",authenMiddleware,createTaskController)
taskRouter.put("/:id",updateTaskController)
taskRouter.delete("/:id",deletetaskController)
taskRouter.get("/",getAllTaskController)
taskRouter.get("/:id",getTaskByIDCOntroller)

export default taskRouter

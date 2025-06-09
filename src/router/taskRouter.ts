import { Router } from "express";
import { createTaskController, getAllTaskController, updateTaskController } from "../Controller/tasktodoController";


const taskRouter=Router()

taskRouter.post("/",createTaskController)
taskRouter.put("/:id",updateTaskController)
taskRouter.get("/",getAllTaskController)

export default taskRouter

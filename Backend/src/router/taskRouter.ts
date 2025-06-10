import { Router } from "express";
import { createTaskController, deletetaskController, getAllTaskController, getTaskByIDCOntroller, updateTaskController } from "../Controller/tasktodoController";


const taskRouter=Router()

taskRouter.post("/",createTaskController)
taskRouter.put("/:id",updateTaskController)
taskRouter.delete("/:id",deletetaskController)
taskRouter.get("/",getAllTaskController)
taskRouter.get("/:id",getTaskByIDCOntroller)

export default taskRouter

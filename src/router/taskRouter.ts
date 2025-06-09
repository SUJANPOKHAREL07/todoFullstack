import { Router } from "express";
import { createTaskController, getAllTaskController, getTaskByIDCOntroller, updateTaskController } from "../Controller/tasktodoController";


const taskRouter=Router()

taskRouter.post("/",createTaskController)
taskRouter.put("/:id",updateTaskController)
taskRouter.get("/",getAllTaskController)
taskRouter.get("/:id",getTaskByIDCOntroller)

export default taskRouter

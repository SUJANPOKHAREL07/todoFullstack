import { Router } from "express";
import { createTaskController } from "../Controller/tasktodoController";


const taskRouter=Router()

taskRouter.post("/",createTaskController)

export default taskRouter

import { Request,Response } from "express";
import { createTaskPrisma } from "../model/taskPrismaModel";


const createTaskController=async(req:Request,res:Response)=>{
    try{
        const data=await createTaskPrisma(req.body)
        res.status(200).json(data)
    }catch{
        res.status(404).json("Unable to create task")
    }
}

export {createTaskController}
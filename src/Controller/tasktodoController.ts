import { Request,Response } from "express";
import { createTaskPrisma, getAllTaskPrisma, updateTaskPrisma } from "../model/taskPrismaModel";


const createTaskController=async(req:Request,res:Response)=>{
    try{
        const data=await createTaskPrisma(req.body)
        res.status(200).json(data)
    }catch{
        res.status(404).json("Unable to create task")
    }
}
const updateTaskController=async(req:Request,res:Response)=>{
    try{
        const id=Number(req.params.id)
        const {title,status,userID}=req.body
        const data=await updateTaskPrisma({id,title,status,userID})
        res.status(200).json(data)
    }
    catch{
        res.status(404).json("Unable to update")
    }
}

const getAllTaskController=async(req:Request,res:Response)=>{
    try{
        const data=await getAllTaskPrisma()
        res.status(200).json(data)
    }catch{
        res.status(404).json("Unable to fetch data")
    }
}

export {createTaskController,updateTaskController,getAllTaskController}
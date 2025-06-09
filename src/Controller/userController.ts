import { createUserPrisma, getAllUserPrisma, getUserById, updateUserPrisma } from "../model/userPrismamodel"
import { Request,Response } from "express"


const createUserContoller=async(req:Request,res:Response)=>{
   try{
     const created=await createUserPrisma(req.body)
    res.status(200).json(created)
   }
   catch{
    res.status(404).json("Unable to create users")
   }
}

const updteUserController=async(req:Request,res:Response)=>{
    try{
        const id =Number(req.params.id)
        const {userName,email,password}=req.body
        const updaetd=await updateUserPrisma({id,userName,email,password})
        res.status(200).json(updaetd)
    }
    catch{
        res.status(404).json("Unable to update")
    }
}
const getUserController=async(req:Request,res:Response)=>{
    try{
        const data=await getAllUserPrisma()
        res.status(200).json(data)
    }catch{
        res.status(404).json("Unable to fetch the data")
    }
}

const getByidController=async(req:Request,res:Response)=>{
    try{
        const id = Number(req.params.id)
        const data=await getUserById(id)
      
        res.status(200).json(data)
    }
    catch{
        res.status(404).json("Unable to find the data")
    }
}


export{createUserContoller,updteUserController,getUserController,getByidController}
import { createUserPrisma } from "../model/userPrismamodel"
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

export{createUserContoller}
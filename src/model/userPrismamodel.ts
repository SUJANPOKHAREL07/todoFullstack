import { prisma } from "../db";

async function createUserPrisma(data:{
    userName:string,
    email:string,
    password:string,

}){
    const created= await prisma.user.create({
        data:{
            userName:data.userName,
            email:data.email,
            password:data.password
        }
    })
    return created
}

async function updateUserPrisma(data:{
    id:number,
    userName:string,
    email:string,
    password:string
}) {
    const updated=await prisma.user.update({
        where:{
            id:data.id
        },
        data:{
            userName:data.userName,
        email:data.email,
        password:data.password
        
        }
        
    })
    return updated
}


export{createUserPrisma,updateUserPrisma}
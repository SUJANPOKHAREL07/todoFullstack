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
async function getAllUserPrisma() {
    const data= await prisma.user.findMany()
    return data
}

async function getUserById(id:number) {
    const data=await prisma.user.findUnique({
        where:{
            id:id
        },
       
    })
    return data
    
}
async function deleteUserPrisma(id:number) {
    const data=await prisma.user.delete({
        where:{
            id:id
        }
    })
    console.log(data)
    return data
}

export{createUserPrisma,updateUserPrisma,getAllUserPrisma,getUserById,deleteUserPrisma}
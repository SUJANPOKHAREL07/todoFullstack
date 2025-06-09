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




export{createUserPrisma}
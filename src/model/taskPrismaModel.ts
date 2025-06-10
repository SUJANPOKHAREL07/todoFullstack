import { prisma } from "../db";
import { Taskstatus } from "../generated/prisma";

async function createTaskPrisma(data: {
  title: string;
  status: Taskstatus;
  userID: number;
}) {
  const createdata = await prisma.tasktodo.create({
    data: {
      title: data.title,
      status: data.status,
      userID: data.userID,
    },
  });
  return createdata;
}
async function updateTaskPrisma(data: {
  id: number;
  title: string;
  status: Taskstatus;
  userID: number;
}) {
  const update = await prisma.tasktodo.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      status: data.status,
      userID: data.userID,
    },
  });
  return update;
}
async function getAllTaskPrisma() {
    const data=await prisma.tasktodo.findMany({
        include:{
            user:{
                select:{
                    userName:true,
                    
                }
            }       }
    })
    return data
}
async function getTaskbyIDPrisma(id:number) {
    const data=await prisma.tasktodo.findUnique({
        where:{
            id:id
        },
        include:{
            user:{
                select:{
                    userName:true,
                    email:true
                }
            }
        }
    })
    return data
}
async function deleteTaskPrisma(id:number) {
  const datadelete=await prisma.tasktodo.delete({
    where:{
      id:id
    }
  })
  return datadelete
}
export { createTaskPrisma, updateTaskPrisma,getAllTaskPrisma,getTaskbyIDPrisma,deleteTaskPrisma };

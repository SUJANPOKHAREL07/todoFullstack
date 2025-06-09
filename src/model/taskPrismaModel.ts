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
    const data=await prisma.tasktodo.findMany()
    return data
}
export { createTaskPrisma, updateTaskPrisma,getAllTaskPrisma };

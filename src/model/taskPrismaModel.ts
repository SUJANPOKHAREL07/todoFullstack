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

export { createTaskPrisma };

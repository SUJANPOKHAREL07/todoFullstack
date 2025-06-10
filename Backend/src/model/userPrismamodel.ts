import { prisma } from "../db";

async function createUserPrisma(data: {
  userName: string;
  email: string;
  password: string;
}) {
  const created = await prisma.user.create({
    data: {
      userName: data.userName,
      email: data.email,
      password: data.password,
    },
  });
  return created;
}

async function updateUserPrisma(data: {
  id: number;
  userName: string;
  email: string;
  password: string;
}) {
  const updated = await prisma.user.update({
    where: {
      id: data.id,
    },
    data: {
      userName: data.userName,
      email: data.email,
      password: data.password,
    },
  });
  return updated;
}
async function getAllUserPrisma() {
  const data = await prisma.user.findMany();
  return data;
}

async function getUserById(id: number) {
  const data = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return data;
}

// }
//  async deleteUserAndTodos(id: number) {
//      return await prisma.$transaction(async (prisma) => {
//       // Delete todos first
//       await prisma.todolist.deleteMany({
//         where: { userId },
//       });

//       // Then delete the user
//       await prisma.users.delete({
//         where: { id: userId },
//       });

//       return {
//         message: `User ${userId} and their todos deleted successfully.`,
//       };
//     });
//   },
//   },
async function deletTodoandUserprisma(userID: number) {
  return await prisma.$transaction(async (prisma) => {
    await prisma.tasktodo.deleteMany({
      where: {
        userID,
      },
    });
    await prisma.user.delete({
      where: {
        id: userID,
      },
    });
    return {
      message: `the data of user is deleted`,
    };
  });
}

export {
  createUserPrisma,
  updateUserPrisma,
  getAllUserPrisma,
  getUserById,
  deletTodoandUserprisma,
};

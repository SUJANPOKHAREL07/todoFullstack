import { prisma } from "../db";

async function storeUserLoginModal(data: { email: string; password: string }) {
  const storeLogin = await prisma.userloginData.create({
    data: {
      email: data.email,
      password: data.password,
    },
  });

  return storeLogin;
}

async function checkUserbyEmail(email: string, password: string) {
  const data = await prisma.user.findMany({
    where: {
      email,
      password,
    },
  });
  return data;
}
async function checkinUserLogin(email: string) {
  const data = await prisma.userloginData.findFirst({
    where: {
      email: email,
    },
  });
  return data;
}

async function getUserIDById(email: string) {
  const data = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      id: true,
    },
  });
  return data;
}

async function saveSessionData(userID: number, randomToken: string) {
  const dataSession = await prisma.sessionTable.create({
    data: {
      userID: userID,
      randomToken: randomToken,
    },
  });
  console.log(dataSession)
  return
}

async function deleteAfterLogout(email: string) {
  const fromLogin = await prisma.userloginData.delete({
    where: {
      email: email,
    },
  });
}
async function deleteAfterLogoutSession(randomToken: string) {
  const fromLogin = await prisma.sessionTable.delete({
    where: {
      randomToken: randomToken,
    },
  });
}

async function getLoginToken(userID: number) {
  const data = await prisma.sessionTable.findFirst({
    where: {
      userID: userID,
    },
    select: {
      randomToken: true,
    },
  });
  return data;
}

export {
  storeUserLoginModal,
  checkUserbyEmail,
  checkinUserLogin,
  getUserIDById,
  saveSessionData,
  deleteAfterLogout,
  deleteAfterLogoutSession,
  getLoginToken
};

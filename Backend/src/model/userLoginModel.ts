import { prisma } from "../db";

async function storeUserLoginModal(data: {
  email: string;
  password: string;
}) {
   
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
async function checkinUserLogin(email:string) {
    const data=await prisma.userloginData.findFirst({
        where:{
            email:email
        }
    })
    return data
    
}
export { storeUserLoginModal, checkUserbyEmail,checkinUserLogin };

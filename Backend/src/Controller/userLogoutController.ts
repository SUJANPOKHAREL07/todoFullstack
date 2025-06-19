import { Request, Response } from "express";
import {
  deleteAfterLogout,
  deleteAfterLogoutSession,
  getLoginToken,
  getUserIDById,
} from "../model/userLoginModel";
import { emit } from "process";

async function logoutCheck(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const user = await getUserIDById(email);
    if (!user) {
      res.status(404).json("User not found");
      return;
    }
    //   console.log(getID);
    const userID = user.id;
    console.log("thisnis user ID:", userID);
    // const randomToken = String(await getLoginToken(userID));
    const tokenobj = await getLoginToken(userID);
    console.log(tokenobj)
    
if (!tokenobj || !tokenobj.randomToken) {
  console.log("No token found for user", userID);
   res.status(404).json("No session found for logout");
   return
}
    const randomToken = tokenobj?.randomToken;
    console.log(randomToken);
    const logoutfromLoginTable = await deleteAfterLogout(email);
    const deletefromSession = await deleteAfterLogoutSession(randomToken);
    
    res.clearCookie("authorization")
    res.clearCookie("refresh_autho")
    
    res.status(200).json("Logout Success");
  } catch (err) {
    res.status(404).json("Unable to Logout");
  }
}
export { logoutCheck };
